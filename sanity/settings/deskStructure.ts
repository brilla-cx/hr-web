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
import Iframe from "sanity-plugin-iframe-pane";

import { SITE_URL } from "../../lib/constants";

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

// Customise this function to show the correct URL based on the current document
function getPreviewUrl(doc) {
  const absoluteURL =
    // eslint-disable-next-line no-nested-ternary
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.NODE_ENV === "production"
      ? SITE_URL
      : `https://${process.env.VERCEL_URL}`;

  return doc?.slug?.current
    ? `${absoluteURL}/api/draft?slug=${doc.slug.current}&type=${
        doc?._type === "post" ? "gists" : doc?._type
      }`
    : `${absoluteURL}`;
}

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  switch (schemaType) {
    case `post`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc) => getPreviewUrl(doc),
          })
          .title("Preview"),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};
