import {
  FaArchive,
  FaBook,
  FaFeatherAlt,
  FaFileAlt,
  FaKey,
  FaListUl,
  FaQuestion,
  FaQuoteLeft,
  FaThList,
  FaTools,
  FaUserAstronaut,
} from "react-icons/fa";
import { map } from "rxjs/operators";
import {
  DefaultDocumentNodeResolver,
  StructureBuilder,
  StructureResolver,
  StructureResolverContext,
} from "sanity/desk";
import Iframe from "sanity-plugin-iframe-pane";

import { SITE_URL } from "../../lib/constants";
// import { SEOPane } from "sanity-plugin-seo-pane";

const createListItem = (S, documentStore, title, icon, type) => {
  return S.listItem()
    .title(title)
    .icon(icon)
    .child(
      documentStore
        .listenQuery(`count(*[_type == '${type}'])`)
        .pipe(
          map((count) =>
            S.documentTypeList(type)
              .title(`${title} (${count})`)
              .filter(`_type == "${type}"`)
          )
        )
    );
};

export const structure: StructureResolver = (
  S: StructureBuilder,
  context: StructureResolverContext
) => {
  const { documentStore, currentUser } = context;

  return S.list()
    .title("Let's make some magic")
    .items([
      createListItem(S, documentStore, "Posts", FaFeatherAlt, "post"),
      createListItem(S, documentStore, "Books", FaBook, "book"),
      createListItem(S, documentStore, "Tools", FaTools, "tool"),
      S.divider(),
      createListItem(S, documentStore, "Categories", FaThList, "category"),
      createListItem(S, documentStore, "Authors", FaUserAstronaut, "author"),
      S.divider(),
      createListItem(S, documentStore, "FAQs", FaQuestion, "faq"),
      createListItem(S, documentStore, "Quizesseses", FaListUl, "quiz"),
      createListItem(S, documentStore, "Quotes", FaQuoteLeft, "quote"),
      S.divider(),
      createListItem(S, documentStore, "Legal Pages", FaFileAlt, "legal"),
      S.divider(),
      createListItem(
        S,
        documentStore,
        "Rebekah's Old Blogs",
        FaArchive,
        "socialBlog"
      ),
      ...(currentUser?.roles.some((role) => role.name === "developer")
        ? [
            createListItem(
              S,
              documentStore,
              "Secret Keys",
              FaKey,
              "secretsKeys"
            ),
          ]
        : []),
    ]);
};

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
