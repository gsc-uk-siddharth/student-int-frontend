import Layout from "../components/Layout";
import LoadingScreen from "../components/LoadingScreen";
// import { InjectScriptElement as InjectDriftScript } from "../drift/drift";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

import "../styles/globals.css";
import Script from "next/script";
import gid from "../googleTrackingId";
import Head from "next/head";

import { ReactComponent as CompanyIcon } from "../public/static/crown.svg";

import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // useEffect(() => {
  //   const handleRouteChangeCompleted = (url) => {
  //     let driftElement = document.getElementsByClassName(
  //       "drift-frame-controller"
  //     );
  //     if (driftElement[0]) {
  //       window.drift.on("ready", function (data) {
  //         window.drift.page();
  //       });
  //     }
  //   };

  //   router.events.on("routeChangeComplete", handleRouteChangeCompleted);

  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChangeCompleted);
  //   };
  // }, [router]);

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
      <Head>
        <title>Student Integration</title>
      </Head>
      <Layout>
        {/* <InjectDriftScript /> */}
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
