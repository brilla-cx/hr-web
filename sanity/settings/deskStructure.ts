import {
  FaArchive,
  FaBook,
  FaFeatherAlt,
  FaListUl,
  FaQuestion,
  FaQuoteLeft,
  FaThList,
  FaTools,
  FaUserAstronaut,
} from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { DefaultDocumentNodeResolver } from "sanity/desk";
import Iframe from 'sanity-plugin-iframe-pane'

import { SITE_URL } from "../../lib/constants";
// import { SEOPane } from "sanity-plugin-seo-pane";

export const structure = (S) =>
  S.list()
    .title("Let's make some magic")
    .items([
      S.listItem()
        .title("Posts")
        .icon(FaFeatherAlt)
        .child(S.documentTypeList("post")),
      S.listItem()
        .title("Books")
        .icon(FaBook)
        .child(S.documentTypeList("book")),
      S.listItem()
        .title("Tools")
        .icon(FaTools)
        .child(S.documentTypeList("tool")),
      S.divider(),
      S.listItem()
        .title("Topics")
        .icon(FaThList)
        .child(S.documentTypeList("category")),
      S.listItem()
        .title("Authors")
        .icon(FaUserAstronaut)
        .child(S.documentTypeList("author")),
      S.divider(),
      S.listItem()
        .title("FAQs")
        .icon(FaQuestion)
        .child(S.documentTypeList("faq")),
      S.listItem()
        .title("Quiz Questions")
        .icon(FaListUl)
        .child(S.documentTypeList("quiz")),
      S.listItem()
        .title("Quotes")
        .icon(FaQuoteLeft)
        .child(S.documentTypeList("quote")),
      S.divider(),
      S.listItem()
        .title("Privacy & Terms")
        .icon(GoLaw)
        .child(S.documentTypeList("legal")),
      S.divider(),
      S.listItem()
        .title("Rebekah's Old Blogs")
        .icon(FaArchive)
        .child(S.documentTypeList("socialBlog")),
    ]);

function getPreviewUrl(doc) {
  const absoluteURL =
    // eslint-disable-next-line no-nested-ternary
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.NODE_ENV === "production"
        ? SITE_URL
        : `https://${process.env.VERCEL_URL}`;

  const TYPE_LOOKUP = {
    post: "gists",
    socialBlog: "social-blog",
    tool: "built-with",
    book: "books",
    legal: "",
  };

  const type = TYPE_LOOKUP[doc._type] || doc._type;
  const slug = doc?.slug?.current;

  return slug
    ? `${absoluteURL}/api/draft?slug=${slug}&type=${type}`
    : `${absoluteURL}/api/draft`;
}

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  const previewTypes = ["post", "socialBlog", "book", "tool", "legal"];

  if (previewTypes.includes(schemaType)) {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: (doc) => getPreviewUrl(doc),
        })
        .title("Preview"),
      //S.view
      //.component(SEOPane)
      //.options({
      //keywords: `seo.keywords`,
      //synonyms: `seo.synonyms`,
      //url: (doc) => getPreviewUrl(doc),
      //})
      //.title("SEO"),
    ]);
  }

  return S.document().views([S.view.form()]);
};
