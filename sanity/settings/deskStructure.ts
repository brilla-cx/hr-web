/*
In this section of the deskStructure.js file, we are importing the necessary libraries
and components for the studio's structure and its appearance.

- The "react-icons/fa" and "react-icons/go" libraries provide Font Awesome icons and
  GitHub Octicons icons respectively to use in the Sanity Studio interface.
- The "DefaultDocumentNodeResolver" from "sanity/desk" is a built-in Sanity function
  that is used to define the different views for each document type in the Sanity Studio.
- "sanity-plugin-iframe-pane" is a Sanity plugin that allows you to embed an iframe
  as a pane in the Sanity Studio.
- "sanity-plugin-seo-pane" is a Sanity plugin that provides a pane for managing SEO data
  for a document.
- "SITE_URL" is a constant that contains the base URL for the website. It is imported
  from the "lib/constants" module.

We define the main list's title and the items within it. Each item represents a document
type in our Sanity schema, with a title and an icon. The child() function is used to
create a list of documents for each type. A divider() is used for visual separation
between different groups of items.
*/
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
import { SEOPane } from "sanity-plugin-seo-pane";

import { SITE_URL } from "../../lib/constants";

/*
The "structure" function defines the structure of the Sanity Studio. It is an exported
constant that takes the built-in Sanity "S" object as a parameter. The "S" object
contains functions for defining the studio structure.

The structure is a list with a title "Let's make some magic". This function takes an
array of items that will be displayed in the list. Each "listItem" represents a
different document type in the Sanity schema.

The "title" function sets the title of the list item, and the "icon" function sets
its icon. The "child" function is used to create the list of documents for that
document type. "divider" creates a visual separation between groups of list items.
*/
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
