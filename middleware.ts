import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: (req) => {
        return !req.nextUrl.pathname.startsWith('/dashboard');
    },
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
