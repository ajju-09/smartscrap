import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
     path === "/sign-in" || path === "/verifyemail" || path === "/sign-up"

  const token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.url));
  } 

  if (!token && (path === "/profile" || path === "/thanku" || path === "/contact-us" || path === "/feedback")) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/sign-up',
    '/sign-in',
    '/verifyemail',
    '/profile',
    '/thanku',
    '/contact-us',
    '/feedback'
  ]
};

