import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "./config";
import {
  authorsquery,
  paginatedpostsquery,
  postpathquery,
  postquery,
  postsbyauthorquery,
  singlepostquery,
  topcatquery,
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
      })) || {}
    );
  }
  return {};
}

// export async function getAllPosts() {
//   if (client) {
//     return (await client.fetch(postquery)) || [];
//   }
//   return [];
// }

// export async function getSettings() {
//   if (client) {
//     return (await client.fetch(configQuery)) || [];
//   }
//   return [];
// }

// // Author
// export async function getAllAuthorsSlugs() {
//   if (client) {
//     const slugs = (await client.fetch(authorsquery)) || [];
//     return slugs.map(slug => ({ author: slug }));
//   }
//   return [];
// }

// export async function getAuthorPostsBySlug(slug) {
//   if (client) {
//     return (await client.fetch(postsbyauthorquery, { slug })) || {};
//   }
//   return {};
// }

// export async function getAllAuthors() {
//   if (client) {
//     return (await client.fetch(allauthorsquery)) || [];
//   }
//   return [];
// }

// // Category

// export async function getAllCategories() {
//   if (client) {
//     const slugs = (await client.fetch(catpathquery)) || [];
//     return slugs.map(slug => ({ category: slug }));
//   }
//   return [];
// }

// export async function getPostsByCategory(slug) {
//   if (client) {
//     return (await client.fetch(postsbycatquery, { slug })) || {};
//   }
//   return {};
// }

// export async function getTopCategories() {
//   if (client) {
//     return (await client.fetch(catquery)) || [];
//   }
//   return [];
// }

// export async function getPaginatedPosts(limit) {
//   if (client) {
//     return (
//       (await client.fetch(paginatedquery, {
//         pageIndex: 0,
//         limit: limit
//       })) || {}
//     );
//   }
//   return {};
// }
