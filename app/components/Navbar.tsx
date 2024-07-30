import { Link } from "@remix-run/react";

export const JourneyCategories = [
  {
    name: "All",
    filter: "",
  },
  {
    name: "Components",
    filter: "components",
  },
  {
    name: "Hooks",
    filter: "hooks",
  },
  {
    name: "State Manager",
    filter: "state-manager",
  },
  {
    name: "Favorites",
    filter: "favorites",
  },
];

export type JourneyCategory = {
  name: string;
  filter: string;
};

export const Navbar = () => {
  return (
    <nav className="flex w-full flex-wrap gap-4 lg:max-w-[200px] lg:flex-col">
      <Link className="rounded-md px-2 py-1 capitalize" to="/?filter=favorites">
        ✨Favorites
      </Link>
      <Link
        className=" rounded-md px-2 py-1 capitalize transition-colors hover:bg-orange-100"
        to="/?filter="
      >
        All
      </Link>
      <Link
        className=" rounded-md px-2 py-1 capitalize transition-colors hover:bg-orange-100"
        to="/?filter=components"
      >
        components
      </Link>
      <Link
        className=" rounded-md px-2 py-1 capitalize transition-colors hover:bg-orange-100"
        to="/?filter=hooks"
      >
        hooks
      </Link>
      <Link
        className=" rounded-md px-2 py-1 capitalize transition-colors hover:bg-orange-100"
        to="/?filter=state-manager"
      >
        state-manager
      </Link>
      <Link
        className=" rounded-md px-2 py-1 capitalize transition-colors hover:bg-orange-100"
        to="/?filter=server"
      >
        server
      </Link>
      <Link
        className=" rounded-md px-2 py-1 capitalize transition-colors hover:bg-orange-100"
        to="/?filter=patterns"
      >
        patterns
      </Link>
    </nav>
  );
};
