import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { sessionsPath } from "./domain/routerPaths";

export default authMiddleware({
      beforeAuth: (req) => {
            const pathname = req.nextUrl.pathname;
            if (pathname === "/" || pathname === "/dashbaord") {
                  const url = req.nextUrl.clone()
                  url.pathname = sessionsPath
                  return NextResponse.redirect(url)
            }

      },
      publicRoutes: ['/', '/sign-in', '/sign-up', '/favicon.ico'],
});

export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};