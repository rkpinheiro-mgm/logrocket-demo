import { Navbar } from "@/components/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="max-w-2xl mx-auto">
          <article className="prose lg:prose-xl">
            <h1 className="text-4xl font-bold mb-4">How to integrate</h1>
            <p className="mb-8">
              {`Ensure that LogRocket is initialized at the start of your
              application's runtime.`}
            </p>
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">_app.tsx</h2>
              <pre className="bg-gray-100 p-4 rounded">
                <code className="text-gray-800">
                  {`import { initializeLogrocket } from "@/monitoring/logrocket";
import type { AppProps } from "next/app";
import { Provider } from 'react-redux';
import store from "@/store";
                
import "@/styles/globals.css";
                
initializeLogrocket(); // <<< here you go
              
export default function App({ Component, pageProps }: AppProps) {
...`}
                </code>
              </pre>
            </section>
            <p className="mt-8">
              Ensure that you provide the correct configuration for the
              application ID.
            </p>
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">logrocket.ts</h2>
              <pre className="bg-gray-100 p-4 rounded">
                <code className="text-gray-800">
                  {`export const initializeLogrocket = () => {
  LogRocketSdk.init({
    appId: LR_APP_ID,
    options: {
      debug: true,
      overrides: {
        release: LR_APP_VERSION,
      },
    },
  });
}`}
                </code>
              </pre>
            </section>
            <p className="mt-8">
              See Documentation for more information{" "}
              <a
                className="text-blue-600 hover:underline"
                target="_blank"
                href="https://docs.logrocket.com/docs/quickstart"
              >
                here
              </a>
              .
            </p>
          </article>
        </main>
      </div>
    </>
  );
}
