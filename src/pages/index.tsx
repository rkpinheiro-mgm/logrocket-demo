import { Navbar } from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar disableBack />
      <div
        className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
      >
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="text-4xl font-bold">@mgmresorts/client-log-rocket</h1>
          <h2 className="text-2xl font-semibold">About this project</h2>
          <ul className="list-disc pl-5">
            <li className="mb-2">
              <Link
                href="/topics/integrate"
                className="text-blue-500 hover:underline"
              >
                How to integrate
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/topics/connect-redux"
                className="text-blue-500 hover:underline"
              >
                How to connect with Redux
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/topics/identify-users"
                className="text-blue-500 hover:underline"
              >
                How to identify users
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/topics/capture-events-exceptions"
                className="text-blue-500 hover:underline"
              >
                How to capture event & exception
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/topics/mask-data"
                className="text-blue-500 hover:underline"
              >
                How to mask data
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="https://app.logrocket.com/mgmri-non-prod/dbx-room-booking-non-prod"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                How to watch session and create dashboard
              </Link>
            </li>
          </ul>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
      </div>
    </>
  );
}
