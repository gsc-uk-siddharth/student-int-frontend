import Layout from "../components/Layout";
import LoadingScreen from "../components/LoadingScreen";
import React from "react";

import "../styles/globals.css";
import Script from "next/script";
import gid from "../googleTrackingId";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      {/* {!loading ? ( */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gid}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gid}', {
      page_path: window.location.pathname,
      });
      `,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* ) : ( */}
      {/* // <LoadingScreen /> */}
      {/* console.log("Siddo") */}
      {/* )} */}
      <Script src="https://accounts.google.com/gsi/client" async defer></Script>
    </>
  );
}

export default MyApp;
