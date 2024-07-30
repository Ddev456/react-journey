import { cn } from "@/lib/utils";
import { Link } from "@remix-run/react";
import { buttonVariants } from "./ui/button";

export const JourneyCard = ({
  name,
  categories,
  journeyType,
}: {
  name: string;
  categories: string[];
  journeyType: { name: string; icon: JSX.Element };
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg border p-4 shadow transition-colors hover:border-orange-300 hover:bg-orange-100">
      <div className="flex w-full items-center gap-2">
        {journeyType.icon}
        <p className="text-base font-bold">{journeyType.name}</p>
      </div>
      <p className="line-clamp-1 w-full overflow-hidden text-ellipsis text-center text-lg font-extrabold">
        {name}
      </p>
      <div className="flex w-full items-center gap-2">
        {categories.map((category) => (
          <p
            key={category}
            className="line-clamp-1 text-start text-xs text-gray-400 "
          >
            {category}
          </p>
        ))}

        <a
          className="inline-flex items-center justify-center rounded-md px-3 py-1.5 ring-indigo-500 ring-offset-2 focus:outline-none focus:ring bg-orange-200 text-gray-950 hover:bg-orange-300 h-8 text-sm font-semibold ml-auto"
          href="https://react.dev/learn/writing-markup-with-jsx"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-book-open-text "
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            <path d="M6 8h2"></path>
            <path d="M6 12h2"></path>
            <path d="M16 8h2"></path>
            <path d="M16 12h2"></path>
          </svg>
        </a>
        <Link
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "inline-flex items-center justify-center rounded-md px-3 py-1.5 ring-indigo-500 ring-offset-2 focus:outline-none focus:ring bg-orange-200 text-gray-950 hover:bg-orange-300 h-8 text-sm font-semibold"
          )}
          to="/new"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-plus "
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 12h8"></path>
            <path d="M12 8v8"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};
