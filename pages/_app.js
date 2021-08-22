import Head from "next/head";

import "../styles/globals.css";
import "boxicons/css/boxicons.min.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Rohit.Go</title>
        <meta name="description" content="Fashion E-commerce Landing Page" />
        <link rel="icon" href="/fashion.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
