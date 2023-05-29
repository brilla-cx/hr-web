/*
 * Sanity API Functions
 * Path: ./sanity.js
 *
 * In this file, we define several functions related to interacting with the Sanity API
 * using the Next.js framework and the `next-sanity` library. These functions are responsible
 * for fetching data from the Sanity CMS.
 *
 * First, we import the necessary libraries and configuration from the "config" module.
 * The "next-sanity" library provides the `createClient` function for creating a Sanity
 * client instance. We also import various query objects from the "groq" module, which contain
 * the GROQ (Graph-Relational Object Queries) queries used to fetch data from Sanity.
 *
 * We perform a check to ensure that the Sanity Project ID is set. If it is not set,
 * an error message is logged to the console.
 *
 * Next, we create a Sanity client instance by calling `createClient` with the provided
 * configuration values. The client instance is stored in the `client` variable. If `projectId`
 * is falsey, indicating that the project ID is not set, the `client` variable is set to `null`.
 *
 * The `fetcher` function is defined as an async function that takes an array `[query, params]`
 * as input. It checks if the `client` variable is truthy and then calls the `fetch` method on
 * the client instance with the provided query and params. If `client` is falsy, an empty array
 * is returned.
 *
 * We define several async functions for fetching data from Sanity:
 *
 * - `getAllPosts`: Fetches all posts using the `postquery` query.
 * - `getPostBySlug`: Fetches a post by its slug using the `singlepostquery` query and the provided
 *   slug as a parameter.
 * - `getAllPostsSlugs`: Fetches all post slugs using the `postpathquery` query and maps them to an
 *   array of objects with a "slug" property.
 * - `getTopCategories`: Fetches the top categories using the `topcatquery` query.
 * - `getAllAuthorsSlugs`: Fetches all author slugs using the `authorsquery` query and maps them to
 *   an array of objects with an "author" property.
 * - `getAuthorPostsBySlug`: Fetches posts by author using the `postsbyauthorquery` query and the
 *   provided slug as a parameter.
 * - `getPaginatedPosts`: Fetches paginated posts using the `paginatedpostsquery` query and the
 *   provided limit and pageIndex as parameters.
 * - `getPostsByCategory`: Fetches posts by category using the `postsbycatquery` query and the
 *   provided slug as a parameter.
 *
 * Each function checks if the `client` variable is truthy and then calls the `fetch` method on
 * the client instance with the respective query and parameters. If `client` is falsy, an empty
 * object or array is returned depending on the function.
 *
 * These functions serve as the API layer for retrieving data from Sanity and can be used in the
 * Next.js app to populate the pages with dynamic content.
 */

import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "./config";
import {
  authorsquery,
  getcatoftoolsquery,
  gettoolsquery,
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
      })) || {}
    );
  }
  return {};
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
    const query = `*[_type == "legal" && slug.current == $slug][0]`;
    return (await client.fetch(query, { slug })) || {};
  }
  return {};
}

export async function getToolbySlug(slug) {
  if (client) {
    return (await client.fetch(singletoolsquery, { slug })) || {};
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
