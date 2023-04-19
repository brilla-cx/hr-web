// .schemas/index.ts
import author from "./author-schema";
import blockContent from "./blockContent-schema";
import book from "./book-schema";
import category from "./category-schema";
import faq from "./faq-schema";
import gists from "./gist-schema";
import socialBlog from "./socialBlog-schema";
import tool from "./tool-schema";

const schemas = [gists, author, category, book, faq, socialBlog, tool, blockContent];

export default schemas;
