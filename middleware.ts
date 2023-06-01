import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
        "/",
        "/about",
        "/accessibility",
        "/advertise",
        (path) => path.startsWith("/api/"),
        (path) => path.startsWith("/assets/"),
        (path) => path.startsWith("/author/"),
        (path) => path.startsWith("/books/"),
        (path) => path.startsWith("/book-club/"),
        (path) => path.startsWith("/category/"),
        "/contact",
        "/editorial-policy",
        (path) => path.startsWith("/gists/"),
        "/juno",
        "/partners",
        "/privacy",
        "/rebekah-radice",
        (path) => path.startsWith("/social-blog/"),
        (path) => path.startsWith("/studio/"),
        "/style-guide",
        "/terms",
        "/thank-you",
    ]
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};