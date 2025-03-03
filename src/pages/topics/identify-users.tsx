import { Navbar } from "@/components/Navbar";
import { useAuth } from "@/hooks/useAuth";
import { useAppDispatch } from "@/store/hooks";
import { authenticate, signout } from "@/store/slices/authSlice";
import { useRouter } from "next/router";

export default function Page() {
  const { username } = useAuth();
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="max-w-2xl mx-auto">
          <article className="prose lg:prose-xl">
            <h1 className="text-4xl font-bold mb-4">How to identify users</h1>
            <p className="mb-8">
              {`Utilize LogRocket's identify method with the username and any
              available user trait information.`}
            </p>
            <div className="mt-8">
              <button
                disabled={!!username}
                onClick={() => dispatch(authenticate())}
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                  username ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Sign in
              </button>

              <button
                disabled={!username}
                onClick={() => {
                  dispatch(signout());
                  router.reload();
                }}
                className={`ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                  !username ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Sign out
              </button>
              {username && (
                <div className="mt-4">You authenticated as {username}</div>
              )}
            </div>
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">useAuth.ts</h2>
              <pre className="bg-gray-100 p-4 rounded">
                <code className="text-gray-800">
                  {`...
LogRocketSdk.identify(identifier, {
  email: email,
  ...
});
...`}
                </code>
              </pre>
            </section>
            <p className="mt-8">
              See Documentation for more information{" "}
              <a
                className="text-blue-600 hover:underline"
                target="_blank"
                href="https://docs.logrocket.com/reference/identify"
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
