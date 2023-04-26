// import { getSettings } from "@/lib/sanity/client";
import "./tailwind.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

// import { urlForImage } from "@/lib/sanity/image";

// export async function sharedMetaData(params) {
//   // const settings = await getSettings();

//   return {
//     // metadataBase: new URL(settings.url),
//     title: {
//       default:
//         settings?.title ||
//         "Stablo Pro - Blog Template for Next.js & Sanity CMS",
//       template: "%s | Stablo"
//     },
//     description:
//       settings?.description ||
//       "Pro version of Stablo, popular open-source next.js and sanity blog template",
//     keywords: ["Next.js", "Sanity", "Tailwind CSS"],
//     authors: [{ name: "Surjith" }],
//     canonical: settings?.url,
//     openGraph: {
//       images: [
//         {
//           url:
//             urlForImage(settings?.openGraphImage)?.src ||
//             "/img/opengraph.jpg",
//           width: 800,
//           height: 600
//         }
//       ]
//     },
//     twitter: {
//       title: settings?.title || "Stablo Template",
//       card: "summary_large_image"
//     },
//     robots: {
//       index: true,
//       follow: true
//     }
//   };
// }

// export async function generateMetadata({ params }) {
//   return await sharedMetaData(params);
// }

export default async function Layout({ children, params }) {
  // const settings = await getSettings();

  return (
    <>
      {/* <Navbar {...settings} /> */}
      <Navbar />

      <div>{children}</div>

      <Footer />
    </>
  );
}

export const revalidate = 86400;
