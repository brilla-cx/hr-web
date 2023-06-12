import { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/constants";
import { getAllSitemapData } from "@/sanity/client";

interface SitemapData {
  slug: string;
  _updatedAt: string;
}

interface GroupedSitemapData {
  authors: SitemapData[];
  books: SitemapData[];
  posts: SitemapData[];
  socialBlog: SitemapData[];
  tools: SitemapData[];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allSitemap: GroupedSitemapData = await getAllSitemapData();

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
  ].map((url) => ({ url, lastModified: new Date() }));

  const dynamicRoutes = [
    ...allSitemap.authors.map(({ slug, _updatedAt }) => ({
      url: `${SITE_URL}/author/${slug}`,
      lastModified: _updatedAt,
    })),
    ...allSitemap.books.map(({ slug, _updatedAt }) => ({
      url: `${SITE_URL}/books/${slug}`,
      lastModified: _updatedAt,
    })),
    ...allSitemap.posts.map(({ slug, _updatedAt }) => ({
      url: `${SITE_URL}/gists/${slug}`,
      lastModified: _updatedAt,
    })),
    ...allSitemap.socialBlog.map(({ slug, _updatedAt }) => ({
      url: `${SITE_URL}/social-blog/${slug}`,
      lastModified: _updatedAt,
    })),
    ...allSitemap.tools.map(({ slug, _updatedAt }) => ({
      url: `${SITE_URL}/built-with/${slug}`,
      lastModified: _updatedAt,
    })),
  ];

  return [...staticRoutes, ...dynamicRoutes];
}
