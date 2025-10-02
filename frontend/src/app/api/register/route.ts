import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const response = await fetch('https://playground.bintang.ai/webhook/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  let data;
  try {
    data = await response.json();
  } catch {
    data = {};
  }
  return new NextResponse(JSON.stringify(data), { status: response.status, headers: { 'Content-Type': 'application/json' } });
} 