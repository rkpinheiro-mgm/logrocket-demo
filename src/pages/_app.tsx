import { initializeLogrocket } from "@/monitoring/logrocket";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import { Provider } from "@/store/Provider";

initializeLogrocket();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}
