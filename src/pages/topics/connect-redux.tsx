import { Navbar } from "@/components/Navbar";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  decrement,
  increment,
  reset,
  selectValue,
} from "@/store/slices/exampleSlice";

export default function Page() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectValue);

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="max-w-2xl mx-auto">
          <article className="prose lg:prose-xl">
            <h1 className="text-4xl font-bold mb-4">
              How to connect with Redux
            </h1>
            <p className="mb-8">
              Integrate LogRocket middleware for enhanced monitoring and
              debugging capabilities.
            </p>
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">store.ts</h2>
              <pre className="bg-gray-100 p-4 rounded">
                <code className="text-gray-800">
                  {`import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./slices/exampleSlice";
import { createLogRocketMiddleware } from "@/monitoring/logrocket";

const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(createLogRocketMiddleware()), // <<< here you go
});

...`}
                </code>
              </pre>
            </section>
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Counter Example</h2>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => dispatch(decrement())}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  -
                </button>
                <span className="text-xl">{count}</span>
                <button
                  onClick={() => dispatch(increment())}
                  className="px-4 py-2 bg-green-500 text-white rounded"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(reset())}
                  className="px-4 py-2 bg-gray-500 text-white rounded"
                >
                  Reset
                </button>
              </div>
            </section>
            <p className="mt-8">
              See Documentation for more information{" "}
              <a
                className="text-blue-600 hover:underline"
                target="_blank"
                href="https://docs.logrocket.com/reference/redux-middleware-1"
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
