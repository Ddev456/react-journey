import { Link } from "@remix-run/react";

export const Navbar = () => {
  return (
    <nav className="flex w-full flex-wrap gap-4 lg:max-w-[200px] lg:flex-col">
      <Link
        className=" rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200"
        to="/?filter="
      >
        All
      </Link>
      <Link
        className=" rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200"
        to="/?filter=components"
      >
        components
      </Link>
      <Link
        className=" rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200"
        to="/?filter=hooks"
      >
        hooks
      </Link>
      <Link
        className=" rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200"
        to="/?filter=state-manager"
      >
        state-manager
      </Link>
      <Link
        className=" rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200"
        to="/?filter=server"
      >
        server
      </Link>
      <Link
        className=" rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200"
        to="/?filter=patterns"
      >
        patterns
      </Link>
    </nav>
  );
};
