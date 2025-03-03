import { Navbar } from "@/components/Navbar";

export default function Page() {
  const handleSubmit = () => {
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="max-w-2xl mx-auto">
          <article className="prose lg:prose-xl">
            <h1 className="text-4xl font-bold mb-4">How to mask data</h1>
            <p className="mb-8">
              Integrate LogRocket middleware for enhanced monitoring and
              debugging capabilities.
            </p>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="cardNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="1234 5678 9012 3456"
                  data-private
                />
              </div>
              <div>
                <label
                  htmlFor="cardName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name on Card
                </label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="John Doe"
                  data-private
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="expiryDate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="MM/YY"
                    data-private
                  />
                </div>
                <div>
                  <label
                    htmlFor="cvc"
                    className="block text-sm font-medium text-gray-700"
                  >
                    CVC
                  </label>
                  <input
                    type="text"
                    id="cvc"
                    name="cvc"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="123"
                    data-private
                  />
                </div>
              </div>
              <button
                type="button"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">component.tsx</h2>
              <pre className="bg-gray-100 p-4 rounded">
                <code className="text-gray-800">
                  {`...
 <input
    type="text"
    id="cardNumber"
    name="cardNumber"
    className="mt-1 block w-full"
    placeholder="1234 5678 9012 3456"
    data-private   <<< Add this attribute
  />

...`}
                </code>
              </pre>
            </section>
            <p className="mt-8">
              <b>data-private</b> attribute is used to mask the input field
              data.
            </p>
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">logrocket.ts</h2>
              <pre className="bg-gray-100 p-4 rounded">
                <code className="text-gray-800">
                  {`...
  options: {
      sanitizers: {
        sanitizers: {
          name: () => "**** ****", <<< Add this line
        },
        networkInclusions: ["api"],
      },

...`}
                </code>
              </pre>
            </section>
            <p className="mt-8">
              Check default sanitizers{" "}
              <a
                className=" text-blue-600 hover:underline"
                href="https://github.com/MGMResorts/client-tooling/blob/0670d56ba9827a1dc89cf2b501af659273bfd2cb/libraries/client-log-rocket/src/sanitizers/variations.ts"
                target="_blank"
              >
                here
              </a>
            </p>
            <p className="mt-8">
              See Documentation for more information{" "}
              <a
                className="text-blue-600 hover:underline"
                target="_blank"
                href="https://docs.logrocket.com/reference/dom"
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
