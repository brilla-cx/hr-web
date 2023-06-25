// .schemas/index.ts
import author from "./author-schema";
import book from "./book-schema";
import category from "./category-schema";
import { cornerstonePage } from "./cornerstonepage-schema";
import faq from "./faq-schema";
import legal from "./legal-schema";
import { aboutUs } from "./objects/aboutus-schema";
import blockContent from "./objects/blockContent";
import { coolThings } from "./objects/coolthings-schema";
import ctaOne from "./objects/cta1-schema";
import ctaTwo from "./objects/cta2-schema";
import { hero } from "./objects/hero-schema";
import { intro } from "./objects/intro-schema";
import { keyword } from "./objects/keyword-schema";
import products from "./objects/products-schema";
import resources from "./objects/resources-schema";
import seo from "./objects/seo-schema";
import whoFor from "./objects/whofor-schema";
import whyShouldCare from "./objects/whyshouldcare-schema";
import post from "./post-schema";
import quiz from "./quiz-schema";
import quote from "./quote-schema";
import redirect from "./redirect";
import socialBlog from "./socialBlog-schema";
import tool from "./tool-schema";

const schemas = [
  author,
  aboutUs,
  blockContent,
  book,
  category,
  cornerstonePage,
  coolThings,
  ctaOne,
  ctaTwo,
  faq,
  intro,
  legal,
  keyword,
  hero,
  post,
  products,
  resources,
  quiz,
  quote,
  seo,
  socialBlog,
  redirect,
  tool,
  whoFor,
  whyShouldCare,
];

export default schemas;
