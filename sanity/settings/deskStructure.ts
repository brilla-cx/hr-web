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
import Iframe from "sanity-plugin-iframe-pane";
import { SEOPane } from "sanity-plugin-seo-pane";

import { SITE_URL } from "../../lib/constants";

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

/*
The getPreviewUrl function is responsible for generating the preview URL based on the current
document. This URL is used for the preview pane in the Sanity Studio.

We're determining the base URL based on the current environment, and then using that base URL
to generate the full URL for the preview. The preview URL depends on whether the document
has a slug and whether it's a post. If the document has a slug, it uses that slug in the URL,
and if the document is a post, it sets the type query parameter to "gists". If the document
doesn't have a slug, it just uses the base URL followed by "/api/draft".

The absoluteURL variable holds the base URL, which changes based on the current environment
(development, production, or a Vercel preview deployment). In development, it uses localhost.
In production, it uses the SITE_URL constant. In a Vercel preview deployment, it uses the
VERCEL_URL environment variable.

If the document has a slug, we use that slug to generate the URL for the preview. The type
query parameter is set to "gists" if the document is a post, and to the document's type otherwise.
If the document doesn't have a slug, we just use the base URL followed by "/api/draft".
*/
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

/*
The "defaultDocumentNode" function is responsible for defining the views for each document type in the Sanity Studio.
It is an exported constant that takes the built-in Sanity "S" object and the schemaType as parameters.
The "S" object contains functions for defining the document and its views. The "schemaType" parameter
is the type of the current document.

This function is defining the views for each document type in Sanity Studio. For document types that are
listed in the previewTypes array, it creates a document with three views: a form view for editing the document,
a preview view using an iframe, and an SEO view which displays Yoast SEO analysis. For other document types,
it only creates a document with a form view. The preview and SEO views are set up to use the preview URL
of the current document, which is generated using the getPreviewUrl function.

The previewTypes array contains the document types that should have a preview pane in the Sanity Studio.

If the current document's type is in the previewTypes array, it creates a document with three views:
- A form view for editing the document.
- A preview view using the "Iframe" component from the "sanity-plugin-iframe-pane" plugin. The "url" option
  is set to the preview URL of the current document, which is generated using the getPreviewUrl function.
- An SEO view using the "SEOPane" component from the "sanity-plugin-seo-pane" plugin. The "keywords" and "synonyms"
  options are set to the corresponding fields in the document's SEO data, and the "url" option is set to
  the preview URL of the current document, just like in the preview view.

If the current document's type is not in the previewTypes array, it creates a document with only a form view.
*/
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
      S.view
        .component(SEOPane)
        .options({
          keywords: `seo.keywords`,
          synonyms: `seo.synonyms`,
          url: (doc) => getPreviewUrl(doc),
        })
        .title("SEO"),
    ]);
  }

  return S.document().views([S.view.form()]);
};
