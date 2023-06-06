import Head from "next/head";

import Container from "@/components/container";

function ThankYouLayout({ children }) {
  return (
    <>
      <Head>
        <meta key="robots" name="robots" content="noindex,follow" />
        <meta key="googlebot" name="googlebot" content="noindex,follow" />
      </Head>
      <div className="bg-midnight">
        <Container
          large
          className="border-l border-r border-neutral-200 border-opacity-10">
          {children}
        </Container>
      </div>
    </>
  );
}

export default ThankYouLayout;
