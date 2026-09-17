import { chromium } from 'playwright'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.join(__dirname, '..', 'docs', 'screenshots')
fs.mkdirSync(OUT, { recursive: true })

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

const browser = await chromium.launch()

async function captureDesktop() {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  await page.goto(BASE_URL, { waitUntil: 'networkidle' })

  // Wait for preloader (counter ~1.5s + 500ms delay + 0.8s exit animation)
  await page.waitForTimeout(4500)

  // Hero (viewport shot)
  await page.screenshot({ path: path.join(OUT, 'desktop-hero.png') })

  // Scroll through every section to trigger whileInView animations, then capture each
  const sections = page.locator('main section')
  const count = await sections.count()
  const names = [
    'hero',
    'marquee',
    'about',
    'eyes',
    'featured-projects',
    'client-reviews',
    'awards',
    'cta',
  ]

  for (let i = 0; i < count; i++) {
    const el = sections.nth(i)
    await el.scrollIntoViewIfNeeded()
    await page.waitForTimeout(1200)
    const name = names[i] ?? `section-${i}`
    if (name === 'hero') continue // already captured
    await el.screenshot({ path: path.join(OUT, `desktop-${name}.png`) })
  }

  // Footer
  const footer = page.locator('footer')
  await footer.scrollIntoViewIfNeeded()
  await page.waitForTimeout(1200)
  await footer.screenshot({ path: path.join(OUT, 'desktop-footer.png') })

  // Full page (all whileInView animations have fired, once: true)
  await page.screenshot({ path: path.join(OUT, 'desktop-full.png'), fullPage: true })

  await page.close()
}

async function captureMobile() {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } })
  await page.goto(BASE_URL, { waitUntil: 'networkidle' })
  await page.waitForTimeout(4500)

  await page.screenshot({ path: path.join(OUT, 'mobile-hero.png') })

  // Open full-screen menu
  await page.click('nav button[aria-label="Open menu"]')
  await page.waitForTimeout(1200)
  await page.screenshot({ path: path.join(OUT, 'mobile-menu.png') })

  await page.close()
}

await captureDesktop()
await captureMobile()
await browser.close()

console.log('Screenshots saved to', OUT)
