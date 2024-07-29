import type { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/Header";
import { Journey } from "~/components/Journey";
import { Navbar } from "~/components/Navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="px-4 m-auto flex h-full max-w-4xl flex-col">
      <Header />
      <div className="mb-4 mt-8 flex flex-1 gap-4 overflow-auto max-lg:flex-col">
        <Navbar />
        <Journey />
      </div>
    </main>
  );
}
