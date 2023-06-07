import { MetadataRoute } from 'next';

import { SITE_URL } from '@/lib/constants';
import { getAllAuthorsSlugs, getAllPostsSlugs, getAllSocialBlogSlugs, getAllTools, getPaginatedBooks } from '@/sanity/client';

interface SitemapItem {
    slug: string;
    name: string;
    _updatedAt: Date;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const authors: SitemapItem[] = await getAllAuthorsSlugs();
    const books: SitemapItem[] = await getPaginatedBooks({ limit: 100, pageIndex: 0 });
    const posts: SitemapItem[] = await getAllPostsSlugs();
    const socialBlogs: SitemapItem[] = await getAllSocialBlogSlugs();
    const tools: SitemapItem[] = await getAllTools();

    const staticRoutes = [
        `${SITE_URL}`,
        `${SITE_URL}/about`,
        `${SITE_URL}/accessibility`,
        `${SITE_URL}/advertise`,
        `${SITE_URL}/books`,
        `${SITE_URL}/built-with`,
        `${SITE_URL}/community`,
        `${SITE_URL}/contact`,
        `${SITE_URL}/editorial-policy`,
        `${SITE_URL}/gists`,
        `${SITE_URL}/juno`,
        `${SITE_URL}/partners`,
        `${SITE_URL}/privacy`,
        `${SITE_URL}/rebekah-radice`,
        `${SITE_URL}/social-blog`,
        `${SITE_URL}/style-guide`,
        `${SITE_URL}/terms`,
    ].map(url => ({ url, lastModified: new Date() }));

    const dynamicRoutes = [
        ...authors.map(({ slug, _updatedAt }) => ({ url: `${SITE_URL}/author/${slug}`, lastModified: _updatedAt })),
        ...books.map(({ slug, _updatedAt }) => ({ url: `${SITE_URL}/books/${slug}`, lastModified: _updatedAt })),
        ...posts.map(({ slug, _updatedAt }) => ({ url: `${SITE_URL}/gists/${slug}`, lastModified: _updatedAt })),
        ...socialBlogs.map(({ slug, _updatedAt }) => ({ url: `${SITE_URL}/social-blog/${slug}`, lastModified: _updatedAt })),
        ...tools.map(({ slug, _updatedAt }) => ({ url: `${SITE_URL}/built-with/${slug}`, lastModified: _updatedAt })),
    ];


    return [...staticRoutes, ...dynamicRoutes];
}
