// .schemas/index.ts
import author from "./author-schema";
import blockContent from "./blockContent-schema";
import book from "./book-schema";
import category from "./category-schema";
import faq from "./faq-schema";
import post from "./post-schema";
import quote from "./quote-schema";
import socialBlog from "./socialBlog-schema";
import tool from "./tool-schema";

const schemas = [post, author, category, book, faq, socialBlog, tool, blockContent, quote];

export default schemas;
