// .schemas/index.ts
import author from "./author-schema";
import book from "./book-schema";
import category from "./category-schema";
import faq from "./faq-schema";
import legal from "./legal-schema";
import metadata from "./metadata-schema";
import blockContent from "./objects/blockContent";
import ldjson from "./objects/ldjson-meta";
import ogMeta from "./objects/og-meta";
import pinterestMeta from "./objects/pinterest-meta";
import seo from "./objects/seo-schema";
import siteMeta from "./objects/site-meta";
import twitterMeta from "./objects/twitter-meta";
import post from "./post-schema";
import quiz from "./quiz-schema";
import quote from "./quote-schema";
import socialBlog from "./socialBlog-schema";
import tool from "./tool-schema";

const schemas = [
  author,
  blockContent,
  book,
  category,
  faq,
  legal,
  ldjson,
  metadata,
  ogMeta,
  pinterestMeta,
  post,
  quiz,
  quote,
  seo,
  siteMeta,
  socialBlog,
  tool,
  twitterMeta
];

export default schemas;
