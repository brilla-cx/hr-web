// .schemas/index.ts
import author from "./author-schema";
import book from "./book-schema";
import category from "./category-schema";
import faq from "./faq-schema";
import legal from "./legal-schema";
import metadata from "./metadata-schema";
import blockContent from "./objects/blockContent";
import post from "./post-schema";
import quiz from "./quiz-schema";
import quote from "./quote-schema";
import socialBlog from "./socialBlog-schema";
import tool from "./tool-schema";


const schemas = [
  post,
  author,
  category,
  book,
  faq,
  socialBlog,
  tool,
  blockContent,
  quote,
  quiz,
  legal,
  metadata
];

export default schemas;
