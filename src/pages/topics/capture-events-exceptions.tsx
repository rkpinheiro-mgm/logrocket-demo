import { Navbar } from "@/components/Navbar";
import { captureEvent, captureException } from "@/monitoring/logrocket";

export default function Page() {
  const handleThrowException = () => {
    try {
      throw new Error("This is a test exception");
    } catch (error) {
      captureException(error as Error, {});
      console.log("Error captured");
    }
  };

  const handleTrackActivity = () => {
    captureEvent("customActivity", {
      activity: "Activity 1",
    });
    console.log("event captured");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold">How to capture events</h1>
          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">
              Throw Exception Example
            </h2>
            <button
              onClick={handleThrowException}
              className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer"
            >
              Throw Exception
            </button>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Track activity</h2>
            <button
              onClick={handleTrackActivity}
              className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >
              Track Activity
            </button>
          </section>
          <p className="mt-8">
            See Documentation for more information{" "}
            <a
              className="text-blue-600 hover:underline"
              target="_blank"
              href="https://docs.logrocket.com/reference/track"
            >
              custom events
            </a>{" "}
            and
            <a
              className="text-blue-600 hover:underline"
              target="_blank"
              href="https://docs.logrocket.com/reference/capture-exception"
            >
              exceptions
            </a>
            .
          </p>
        </main>
      </div>
    </>
  );
}
