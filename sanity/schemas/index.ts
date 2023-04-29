// .schemas/index.ts
import author from "./author-schema";
import blockContent from "./objects/blockContent";
import book from "./book-schema";
import category from "./category-schema";
import faq from "./faq-schema";
import post from "./post-schema";
import quiz from "./quiz-schema";
import quote from "./quote-schema";
import socialBlog from "./socialBlog-schema";
import tool from "./tool-schema";
import legal from "./legal-schema";

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
];

export default schemas;
