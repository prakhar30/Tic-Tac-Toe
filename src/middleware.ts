import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // Only protect API routes
  const isApiRoute = path.startsWith('/api/');

  // Get the token from the request cookies
  const token = request.cookies.get('accessToken')?.value;

  // If it's an API route and there's no token, return unauthorized
  if (isApiRoute && !token) {
    return new NextResponse(
      JSON.stringify({ success: false, message: 'Authentication required' }),
      {
        status: 401,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
  matcher: ['/api/:path*']
}; 