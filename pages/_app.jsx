// Ivan Urra - Full Stack Web Developer - Portfolio v1.0 - (c) 2022 - MIT LICENSE
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/app.scss";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as ga from "../lib/ga";

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
