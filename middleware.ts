import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { languages, cookieName, fallbackLng } from "./app/i18n/settings";

export function middleware(req: NextRequest) {
  const refreshToken = req.cookies.get("refreshToken");
  const isCabinet = req.url.includes("/cabinet");
  const isRegistrationOrLogin = req.url.includes("/login") || req.url.includes("/register");

  if ((isCabinet && !refreshToken) || (isRegistrationOrLogin && refreshToken)) {
    return NextResponse.redirect(new URL("/", process.env.CLIENT_URL));
  }

  let lng;
  if (req.cookies.has(cookieName)) {
    const langCookie = req.cookies.get(cookieName);
    if (langCookie) {
      lng = acceptLanguage.get(langCookie.value);
    }
    lng = langCookie?.value;
  }
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  if (!lng) lng = fallbackLng;

  if (
    !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url));
  }

  if (req.headers.has("referer")) {
    const refererHeader = req.headers.get("referer");
    let refererUrl: any;
    if (refererHeader) {
      refererUrl = new URL(refererHeader);
    }
    const lngInReferer = languages.find(l => refererUrl.pathname.startsWith(`/${l}`));
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/cabinet/:path*",
    "/register/:path*",
    "/login/",
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)",
  ],
};
