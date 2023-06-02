import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "./config";
import {
  authorsquery,
  getcatoftoolsquery,
  getlegalpagebyslugquery,
  gettoolsquery,
  paginatedbooksquery,
  paginatedpostsquery,
  paginatedsocialblogsquery,
  postById,
  postpathquery,
  postquery,
  postsbyauthorquery,
  postsbycatquery,
  singlepostquery,
  singlesocialblogquery,
  singletoolsquery,
  socialblogpathquery,
  socialblogquery,
  topcatquery,
  singlebookquery
} from "./groq";

if (!projectId) {
  console.error(
    "The Sanity Project ID is not set. Check your environment variables."
  );
}

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null;

// eslint-disable-next-line require-await
export const fetcher = async ([query, params]) => {
  return client ? client.fetch(query, params) : [];
};

export async function getAllPosts() {
  if (client) {
    return (await client.fetch(postquery)) || [];
  }
  return [];
}

export async function getPostBySlug(slug) {
  if (client) {
    return (await client.fetch(singlepostquery, { slug })) || {};
  }
  return {};
}

export async function postByIdQuery(id) {
  if (client) {
    return (await client.fetch(postById, { id })) || {};
  }

  return {};
}

export async function getAllPostsSlugs() {
  if (client) {
    const slugs = (await client.fetch(postpathquery)) || [];
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}

export async function getTopCategories() {
  if (client) {
    return (await client.fetch(topcatquery)) || [];
  }
  return [];
}

// Get all Authors
export async function getAllAuthorsSlugs() {
  if (client) {
    const slugs = (await client.fetch(authorsquery)) || [];
    return slugs.map((slug) => ({ author: slug }));
  }
  return [];
}

// Get all posts by Authors
export async function getAuthorPostsBySlug(slug) {
  if (client) {
    return (await client.fetch(postsbyauthorquery, { slug })) || {};
  }
  return {};
}
// Get Paginated Posts
export async function getPaginatedPosts({ limit, pageIndex = 0 }) {
  if (client) {
    return (
      (await client.fetch(paginatedpostsquery, {
        pageIndex: pageIndex,
        limit: limit,
      })) || []
    );
  }
  return [];
}
//  Category Page

export async function getPostsByCategory(slug) {
  if (client) {
    return (await client.fetch(postsbycatquery, { slug })) || {};
  }
  return {};
}

// Social Blog
export async function getAllSocialBlogs() {
  if (client) {
    return (await client.fetch(socialblogquery)) || [];
  }
  return [];
}

export async function getSocialBlogBySlug(slug) {
  if (client) {
    return (await client.fetch(singlesocialblogquery, { slug })) || {};
  }
  return {};
}

export async function getAllSocialBlogSlugs() {
  if (client) {
    const slugs = (await client.fetch(socialblogpathquery)) || [];
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}

export async function getPaginatedSocialBlogs({ limit, pageIndex = 0 }) {
  if (client) {
    return (
      (await client.fetch(paginatedsocialblogsquery, {
        pageIndex: pageIndex,
        limit: limit,
      })) || {}
    );
  }
  return {};
}

// Built With
export async function getAllTools() {
  if (client) {
    return (await client.fetch(gettoolsquery)) || [];
  }
  return [];
}

// Category of Tools
export async function getToolsCategories() {
  if (client) {
    return (await client.fetch(getcatoftoolsquery)) || [];
  }
  return [];
}

// Static Pages by Slug
export async function getLegalPageBySlug(slug) {
  if (client) {
    return (await client.fetch(getlegalpagebyslugquery, { slug })) || {};
  }
  return {};
}

export async function getToolbySlug(slug) {
  if (client) {
    return (await client.fetch(singletoolsquery, { slug })) || {};
  }
  return {};
}

// Get Paginated Books
export async function getPaginatedBooks({ limit, pageIndex = 0 }) {
  if (client) {
    return (
      (await client.fetch(paginatedbooksquery, {
        pageIndex: pageIndex,
        limit: limit,
      })) || []
    );
  }
  return [];
}

export async function getBookbySlug(slug) {
  if (client) {
    return (await client.fetch(singlebookquery, { slug })) || {};
  }
  return {};
}
