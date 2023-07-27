import { useEffect } from "react";
import {
  getCspInitialProps,
  provideComponents,
} from "@next-safe/middleware/dist/document";
import Document, { Html, Main, Head, NextScript } from "next/document";
import { nonce } from "./../middleware";

function MyDocument(props) {
  const { Head } = provideComponents(props);
  return (
    <Html>
      <Head nonce={nonce}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
          nonce={nonce}
        />
       

        

      </Head>
      <body>
        <Main />
        <NextScript nonce={nonce} />
      </body>
    </Html>
  );
}

export async function getInitialProps(ctx) {
  const initialProps = await getCspInitialProps({ ctx });
  return initialProps;
}

console.log("document exicuted");

export default MyDocument;
