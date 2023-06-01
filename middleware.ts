import { authMiddleware } from "@clerk/nextjs";

const publicRoutes = [
    "/",
    "/about",
    "/accessibility",
    "/advertise",
    /^\/api\//,
    /^\/assets\//,
    /^\/author\//,
    /^\/books\//,
    /^\/book-club\//,
    /^\/category\//,
    "/contact",
    "/editorial-policy",
    /^\/gists\//,
    "/juno",
    "/partners",
    "/privacy",
    "/rebekah-radice",
    /^\/social-blog\//,
    /^\/studio\//,
    "/style-guide",
    "/terms",
    "/thank-you",
];

export default authMiddleware({ publicRoutes });


export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};