import { ReactSvg } from "@/assets/icons/React.icon";
import { JourneyCard } from "./JourneyCard";
import { AstroSvg } from "@/assets/icons/Astro.icon";
import { TypescriptSvg } from "@/assets/icons/Typescript.icon";
import { DockerSvg } from "@/assets/icons/Docker.icon";
import { TailwindSvg } from "@/assets/icons/Tailwind.icon";
import { GitSvg } from "@/assets/icons/Git.icon";
import { useSearchParams } from "@remix-run/react";
import { JourneyDrawer } from "./JourneyDrawer";

const JourneyList = [
  {
    id: 1,
    journeyType: {
      name: "React",
      icon: <ReactSvg size={40} />,
    },
    name: "useState",
    categories: ["hooks", "state"],
  },
  {
    id: 2,
    journeyType: {
      name: "React",
      icon: <ReactSvg size={40} />,
    },
    name: "useEffect",
    categories: ["hooks", "lifecycle"],
  },
  {
    id: 3,
    journeyType: {
      name: "React",
      icon: <ReactSvg size={40} />,
    },
    name: "useContext",
    categories: ["hooks", "state-manager"],
  },
  {
    id: 4,
    journeyType: {
      name: "Astro",
      icon: <AstroSvg size={40} />,
    },
    name: "Islands",
    categories: ["patterns"],
  },
  /* Add 10 more journeys on webdev topic */
  {
    id: 5,
    journeyType: {
      name: "Typescript",
      icon: <TypescriptSvg size={40} />,
    },
    name: "Generics",
    categories: ["server", "patterns"],
  },
  {
    id: 6,
    journeyType: {
      name: "Tailwind",
      icon: <TailwindSvg size={40} />,
    },
    name: "Configuration",
    categories: ["css", "configuration"],
  },
  {
    id: 7,
    journeyType: {
      name: "Docker",
      icon: <DockerSvg size={40} />,
    },
    name: "Dockerfile",
    categories: ["server", "containers"],
  },
  {
    id: 8,
    journeyType: {
      name: "Git",
      icon: <GitSvg size={40} />,
    },
    name: "Gitignore",
    categories: ["configuration"],
  },
  {
    id: 9,
    journeyType: {
      name: "React",
      icon: <ReactSvg size={40} />,
    },
    name: "useState",
    categories: ["hooks", "state"],
  },
  {
    id: 10,
    journeyType: {
      name: "React",
      icon: <ReactSvg size={40} />,
    },
    name: "useEffect",
    categories: ["hooks", "lifecycle"],
  },
  {
    id: 11,
    journeyType: {
      name: "React",
      icon: <ReactSvg size={40} />,
    },
    name: "useContext",
    categories: ["hooks", "state-manager"],
  },
  {
    id: 12,
    journeyType: {
      name: "Astro",
      icon: <AstroSvg size={40} />,
    },
    name: "Islands",
    categories: ["patterns"],
  },
  /* Add 10 more journeys on webdev topic */
  {
    id: 13,
    journeyType: {
      name: "Typescript",
      icon: <TypescriptSvg size={40} />,
    },
    name: "Generics",
    categories: ["server", "patterns"],
  },
  {
    id: 14,
    journeyType: {
      name: "Tailwind",
      icon: <TailwindSvg size={40} />,
    },
    name: "Configuration",
    categories: ["css", "configuration"],
  },
  {
    id: 15,
    journeyType: {
      name: "Docker",
      icon: <DockerSvg size={40} />,
    },
    name: "Dockerfile",
    categories: ["server", "containers"],
  },
  {
    id: 16,
    journeyType: {
      name: "Git",
      icon: <GitSvg size={40} />,
    },
    name: "Gitignore",
    categories: ["configuration"],
  },
  {
    id: 17,
    journeyType: {
      name: "React",
      icon: <ReactSvg size={40} />,
    },
    name: "useState",
    categories: ["hooks", "state"],
  },
  {
    id: 18,
    journeyType: {
      name: "React",
      icon: <ReactSvg size={40} />,
    },
    name: "useEffect",
    categories: ["hooks", "lifecycle"],
  },
  {
    id: 19,
    journeyType: {
      name: "React",
      icon: <ReactSvg size={40} />,
    },
    name: "useContext",
    categories: ["hooks", "state-manager"],
  },
  {
    id: 20,
    journeyType: {
      name: "Astro",
      icon: <AstroSvg size={40} />,
    },
    name: "Islands",
    categories: ["patterns"],
  },
  /* Add 10 more journeys on webdev topic */
  {
    id: 21,
    journeyType: {
      name: "Typescript",
      icon: <TypescriptSvg size={40} />,
    },
    name: "Generics",
    categories: ["server", "patterns"],
  },
  {
    id: 22,
    journeyType: {
      name: "Tailwind",
      icon: <TailwindSvg size={40} />,
    },
    name: "Configuration",
    categories: ["css", "configuration"],
  },
  {
    id: 23,
    journeyType: {
      name: "Docker",
      icon: <DockerSvg size={40} />,
    },
    name: "Dockerfile",
    categories: ["server", "containers"],
  },
  {
    id: 24,
    journeyType: {
      name: "Git",
      icon: <GitSvg size={40} />,
    },
    name: "Gitignore",
    categories: ["configuration"],
  },
];

export const Journey = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("filter");
  const journeyListFilteredByUrlSearch = JourneyList.filter((journey) =>
    query
      ? journey.categories.includes(query) ||
        journey.name.toLowerCase().includes(query.toLowerCase())
      : true
  );
  return (
    <div className="size-full overflow-auto max-h-[40rem]">
      <div className="grid h-fit w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {journeyListFilteredByUrlSearch.map((journey) => (
          <JourneyDrawer key={journey.id} {...journey}>
            <JourneyCard {...journey} />
          </JourneyDrawer>
        ))}
      </div>
    </div>
  );
};
