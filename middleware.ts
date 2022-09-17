/* eslint-disable @next/next/no-server-import-in-page */
import { NextFetchEvent, NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (req.nextUrl.pathname === '/auth/profile') {
    const session = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });
    const { origin } = req.nextUrl;

    if (!session) {
      return NextResponse.redirect(`${origin}/auth/login`);
    }
  }

  return NextResponse.next();
}
