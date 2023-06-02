import {
  FaArchive,
  FaBook,
  FaFeatherAlt,
  FaFileAlt,
  FaListUl,
  FaQuestion,
  FaQuoteLeft,
  FaThList,
  FaTools,
  FaUserAstronaut,
} from "react-icons/fa";
import { map } from 'rxjs/operators';
import { DefaultDocumentNodeResolver } from "sanity/desk";
import Iframe from 'sanity-plugin-iframe-pane'

import { SITE_URL } from "../../lib/constants";
// import { SEOPane } from "sanity-plugin-seo-pane";

export const structure = (S, context) => {
  const { documentStore } = context;

  return S.list()
    .title("Let's make some magic")
    .items([
      S.listItem()
        .title("Posts")
        .icon(FaFeatherAlt)
        .child(
          documentStore
            .listenQuery(`count(*[_type == 'post'])`)
            .pipe(
              map(count =>
                S.documentTypeList('post')
                  .title(`Posts (${count})`)
                  .filter('_type == "post"')
              )
            )
        ),
      S.listItem()
        .title("Books")
        .icon(FaBook)
        .child(
          documentStore
            .listenQuery(`count(*[_type == 'book'])`)
            .pipe(
              map(count =>
                S.documentTypeList('book')
                  .title(`Books (${count})`)
                  .filter('_type == "book"')
              )
            )
        ),
      S.listItem()
        .title("Tools")
        .icon(FaTools)
        .child(
          documentStore
            .listenQuery(`count(*[_type == 'tool'])`)
            .pipe(
              map(count =>
                S.documentTypeList('tool')
                  .title(`Built With Tools (${count})`)
                  .filter('_type == "tool"')
              )
            )
        ),
      S.divider(),
      S.listItem()
        .title("Categories")
        .icon(FaThList)
        .child(
          documentStore
            .listenQuery(`count(*[_type == 'category'])`)
            .pipe(
              map(count =>
                S.documentTypeList('category')
                  .title(`Categories (${count})`)
                  .filter('_type == "category"')
              )
            )
        ),
      S.listItem()
        .title("Authors")
        .icon(FaUserAstronaut)
        .child(
          documentStore
            .listenQuery(`count(*[_type == 'author'])`)
            .pipe(
              map(count =>
                S.documentTypeList('author')
                  .title(`Authors (${count})`)
                  .filter('_type == "author"')
              )
            )
        ),
      S.divider(),
      S.listItem()
        .title("FAQs")
        .icon(FaQuestion)
        .child(
          documentStore
            .listenQuery(`count(*[_type == 'faq'])`)
            .pipe(
              map(count =>
                S.documentTypeList('faq')
                  .title(`FAQ (${count})`)
                  .filter('_type == "faq"')
              )
            )
        ),
      S.listItem()
        .title("Quizesseses")
        .icon(FaListUl)
        .child(
          documentStore
            .listenQuery(`count(*[_type == 'quiz'])`)
            .pipe(
              map(count =>
                S.documentTypeList('quiz')
                  .title(`Quiz (${count})`)
                  .filter('_type == "quiz"')
              )
            )
        ),
      S.listItem()
        .title("Quotes")
        .icon(FaQuoteLeft)
        .child(
          documentStore
            .listenQuery(`count(*[_type == 'quote'])`)
            .pipe(
              map(count =>
                S.documentTypeList('quote')
                  .title(`Quotes (${count})`)
                  .filter('_type == "quote"')
              )
            )
        ),
      S.divider(),
      S.listItem()
        .title("Legal Pages")
        .icon(FaFileAlt)
        .child(
          documentStore
            .listenQuery(`count(*[_type == 'legal'])`)
            .pipe(
              map(count =>
                S.documentTypeList('legal')
                  .title(`Legal Pages (${count})`)
                  .filter('_type == "legal"')
              )
            )
        ),
      S.divider(),
      S.listItem()
        .title("Rebekah's Old Blogs")
        .icon(FaArchive)
        .child(
          documentStore
            .listenQuery(`count(*[_type == 'socialBlog'])`)
            .pipe(
              map(count =>
                S.documentTypeList('socialBlog')
                  .title(`Social Blogs (${count})`)
                  .filter('_type == "socialBlog"')
              )
            )
        ),
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
