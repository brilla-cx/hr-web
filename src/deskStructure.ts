import { FaArchive, FaBook, FaFeatherAlt, FaQuestion, FaQuoteLeft, FaThList, FaTools, FaUserAstronaut } from "react-icons/fa";

export const structure = (S) =>
    S.list()
        .title('Let\'s make some magic')
        .items([
            S.listItem()
                .title('Posts')
                .icon(FaFeatherAlt)
                .child(S.documentTypeList('post')),
            S.listItem()
                .title('Books')
                .icon(FaBook)
                .child(S.documentTypeList('book')),
            S.listItem()
                .title('Tools')
                .icon(FaTools)
                .child(S.documentTypeList('tool')),
            S.divider(),
            S.listItem()
                .title('Topics')
                .icon(FaThList)
                .child(S.documentTypeList('category')),
            S.listItem()
                .title('Authors')
                .icon(FaUserAstronaut)
                .child(S.documentTypeList('author')),
            S.divider(),
            S.listItem()
                .title('FAQs')
                .icon(FaQuestion)
                .child(S.documentTypeList('faq')),
            S.listItem()
                .title('Quotes')
                .icon(FaQuoteLeft)
                .child(S.documentTypeList('quote')),
            S.divider(),
            S.listItem()
                .title('Rebekah\'s Old Blogs')
                .icon(FaArchive)
                .child(S.documentTypeList('socialBlog'))
        ]);