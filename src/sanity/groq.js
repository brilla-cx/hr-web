// Importing the groq function from the next-sanity package
// GROQ (Graph-Relational Object Queries) is a query language from Sanity.io that allows us to describe exactly what information our application needs
import { groq } from "next-sanity";

/*
 * Post Query
 *
 * In Hey Rebekah's Web App, this query is responsible for fetching the details of all the posts from Sanity's backend.
 * The posts are ordered based on their published date and created date.
 * For each post, we fetch the id, created date, name, slug, image, published date, feature status, categories, url, and author details.
 * We also fetch a lower quality image placeholder (LQIP) for the blur-up effect when loading images.
 */
export const postById = groq`*[_id == $id][0] {
  _id,
  name,
  publishedAt,
  category[]->{
    _id,
    name
  },
  author->{
    name,
    image{
      imageAltText,
      asset->{url}
    },
    slug,
    linkedin
  },
  featured,
  isShort,
  image{
    imageAltText,
    asset->{url},
    caption
  },
  slug,
  tldr[] {
    _type == "block" => {
      children[]{
        _type == "span" => {
          text
        }
      }
    }
  }[0...5][],
  content[] {
    _type == "block" => {
      children[]{
        _type == "span" => {
          text
        }
      }
    }
  }[0...5][]
}
`;

export const postquery = groq`*[_type == "post"]  | order(featured desc, publishedAt desc) {
  _id,
  _createdAt,
  name,
  slug,
  image {
    ...,
    "blurDataURL":asset->metadata.lqip,
  },
  publishedAt,
  featured,
  isShort,
  category[]->,
  url,
  author-> {
    name,
    slug,
    image
  }
}`;

/*
 * Single Post Query
 *
 * This query is used to fetch the details of a single post based on its slug.
 * In addition to the basic post details, we also fetch the dominant background color of the post image, estimated reading time, and related posts.
 * The estimated reading time is calculated based on the length of the content.
 * The related posts are determined by the category of the current post and are limited to the top 5 recent posts.
 */
export const singlepostquery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ...,
  image {
    ...,
    "blurDataURL":asset->metadata.lqip,
    "ImageColor": asset->metadata.palette.dominant.background,
  },
  author->,
  category[]->,
  "estReadingTime": round(length(pt::text(content)) / 5 / 180 ),
  "related": *[_type == "post" && count(category[@._ref in ^.^.category[]._ref]) > 0 ] | order(publishedAt desc, _createdAt desc) [0...5] {
    _id,
    name,
    slug,
    image,
    "date": coalesce(publishedAt,_createdAt),
  },
}
`;

/*
 * Post Path Query
 *
 * This query is responsible for fetching the slugs of the latest 12 posts.
 * The slugs are used to generate the static paths for each post page during the static site generation process in Next.js.
 */
export const postpathquery = groq`
*[_type == "post" && defined(slug.current)]|order(featured desc, publishedAt desc)[0...12].slug.current
`;

/*
 * Top Category Query
 *
 * This query is used to fetch the top 5 categories based on the number of posts in each category.
 * For each category, we fetch the id, name, color, slug, and the count of posts.
 */
export const topcatquery = groq`*[_type == "category"] {
  _id,
  name,
  color,
  slug,
  "count": count(*[_type == "post" && references(^._id)])
} | order(count desc) [0...5]`;

/*
 * Authors Query
 *
 * This query fetches the slugs of all the authors. The slug is a URL-friendly identifier for the authors.
 */
export const authorsquery = groq`
*[_type == "author" && defined(slug.current)][].slug.current
`;

/*
 * Posts By Author Query
 *
 * This query fetches all the posts written by a specific author. The author is identified by their slug.
 * For each post, we fetch the post details, image details including the LQIP, and author details.
 */
export const postsbyauthorquery = groq`
*[_type == "post" && $slug match author->slug.current ] {
  ...,
  image {
    ...,
    "blurDataURL":asset->metadata.lqip,
  },
  author-> {
    ...,
    beat[]->,
    category->,
  },
  category[]->,
} | order(featured desc, publishedAt desc)
`;

export const authorMeta = groq`
*[_type == "author" && slug.current == $slug][0] {
  seoTitle,
  seoMetaDescription,
  name,
  expertise,
  "category": category->name
}
`;

/*
 * Paginated Posts Query
 *
 * This query fetches a specific set of posts for pagination.
 * The posts are ordered by their published date and created date.
 * The $pageIndex and $limit parameters define the slice of posts to be fetched.
 */
export const paginatedpostsquery = groq`
*[_type == "post"] | order(featured desc, publishedAt desc) [$pageIndex...$limit] {
  ...,
  author->,
  category[]->
}
`;

/*
 * Posts By Category Query
 *
 * This query fetches all the posts in a specific category. The category is identified by its slug.
 * For each post, we fetch the post details, author details, and categories.
 */
export const postsbycatquery = groq`
*[_type == "post" && $slug in category[]->slug.current ] | order(featured desc, publishedAt desc) {
  ...,
  author->,
  category[]->
}
`;

export const gettoolsquery = groq`*[_type == "tool"]  | order(isPartner desc, name asc) {
  ...,
  category->,
}`;

// Get category based on defined in tools atleast once

export const getcatoftoolsquery = groq`*[_type == "category" && count(*[_type == "tool" && references(^._id)]) > 0] | order(name asc) {
  _id,
  slug,
  name,
  color,
    "count": count(*[_type == "tool" && references(^._id)])
}`;

// Get Tools by Slug
export const singletoolsquery = groq`
*[_type == "tool" && slug.current == $slug][0] {
  ...,
  category->
}
`;

/*
 * Social Blog Query
 *
 * This query is used in Rebekah's Web App for fetching the details of all the social blog posts from the Sanity's backend.
 * These social blog posts were originally located at https://rebekahradice.com/post-name.
 * The posts are ordered first by whether they are featured (with featured posts appearing first), and then by their publishing date in descending order (most recent first).
 * For each social blog post, we fetch the id, created date, name, slug, published date, featured status, categories, url, and author details.
 */
export const socialblogquery = groq`*[_type == "socialBlog"] | order(featured desc, publishedAt desc) {
  _id,
  _createdAt,
  name,
  slug,
  publishedAt,
  featured,
  url,
  author-> {
    name,
    slug,
    image
  }
}
`;

/*
 * Single Social Blog Query
 *
 * This query is used to fetch the details of a single social blog post based on its slug.
 * In addition to the basic social blog post details, we also fetch the author details, categories, and estimated reading time.
 * The estimated reading time is calculated based on the length of the content.
 */
export const singlesocialblogquery = groq`
*[_type == "socialBlog" && slug.current == $slug][0] {
  ...,
  author->,
  "estReadingTime": round(length(pt::text(content)) / 5 / 180 ),
}
`;

/*
 * Social Blog Path Query
 *
 * This query is responsible for fetching the slugs of the latest 12 social blog posts.
 * The slugs are used to generate the static paths for each social blog post page during the static site generation process in Next.js.
 */
export const socialblogpathquery = groq`
*[_type == "socialBlog" && defined(slug.current)]|order(publishedAt desc, _createdAt desc)[0...12].slug.current
`;
/*
 * Paginated Social Blog Posts Query
 *
 * This query fetches a specific set of social blog posts for pagination.
 * The posts are ordered by their published date and created date.
 * The $pageIndex and $limit parameters define the slice of posts to be fetched.
 */
export const paginatedsocialblogsquery = groq`
*[_type == "socialBlog"] | order(featured desc, publishedAt desc) [$pageIndex...$limit] {
  ...,
  author->
}
`;

export const getlegalpagebyslugquery = groq`
*[_type == "legal" && slug.current == $slug][0] {
  name,
  tldr,
  content,
  slug
}
`;

/*
 * Paginated Books Query
 *
 */
export const paginatedbooksquery = groq`
*[_type == "book"] | order(publishedAt desc, _createdAt desc) [$pageIndex...$limit] {
  ...,
  category->
}
`;

// Get Book by Slug
export const singlebookquery = groq`
*[_type == "book" && slug.current == $slug][0] {
  ...,
  image {
    ...,
    "blurDataURL": asset->metadata.lqip,
    "ImageColor": asset->metadata.palette.dominant.background,
  },
  category->
}
`;

// get faqs
export const getAllFaqsquery = groq`
*[_type == 'faq'] {
  ...,
}
`;

/**
 * sitemap query
 */

export const authorsSitemapQuery = groq`
*[_type == "author" && defined(slug.current)] {
  "slug": slug.current,
  _updatedAt
}
`;
export const booksSitemapQuery = groq`
*[_type == "book" && defined(slug.current)] {
  "slug": slug.current,
  _updatedAt
}`;
export const postsSitemapQuery = groq`
*[_type == "post" && defined(slug.current)] {
  "slug": slug.current,
  _updatedAt
}`;
export const socialBlogsSitemapQuery = groq`
*[_type == "socialBlog" && defined(slug.current)] {
  "slug": slug.current,
  _updatedAt
}`;
export const toolsSitemapQuery = groq`
*[_type == "tool" && defined(slug.current)] {
  "slug": slug.current,
  _updatedAt
}`;
