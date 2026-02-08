import { NextResponse } from 'next/server'

export async function GET(request) {
  return NextResponse.json({ status: 'ok', message: 'OCHI Clone API' })
}

export async function POST(request) {
  return NextResponse.json({ status: 'ok', message: 'OCHI Clone API' })
}
