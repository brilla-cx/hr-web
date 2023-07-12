// .schemas/index.ts
import author from "./author-schema";
import book from "./book-schema";
import category from "./category-schema";
import faq from "./faq-schema";
import legal from "./legal-schema";
import blockContent from "./objects/blockContent";
import seo from "./objects/seo-schema";
import post from "./post-schema";
import quiz from "./quiz-schema";
import quote from "./quote-schema";
import secrectsKeys from "./secrects-schema";
import socialBlog from "./socialBlog-schema";
import tool from "./tool-schema";

const schemas = [
  author,
  blockContent,
  book,
  category,
  faq,
  legal,
  post,
  quiz,
  quote,
  seo,
  socialBlog,
  tool,
  secrectsKeys,
];

export default schemas;
