import Layout from "../components/Layout";
import LoadingScreen from "../components/LoadingScreen";
import React from "react";

import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      {/* {!loading ? ( */}
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
