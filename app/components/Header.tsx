import { AlarmClockCheck, User } from "lucide-react";
import { Button } from "./Button";
import { Searchbar } from "./Searchbar";

export const Header = () => {
  return (
    <header className="flex w-full items-center py-4">
      <h1 className="inline-flex items-center gap-2 text-lg font-bold">
        ⚡<span>Dev Journey</span>
      </h1>
      <Searchbar />
      <div className="nav ml-auto flex items-center gap-4">
        <Button variant="ghost" className="nav-items">
          <AlarmClockCheck />
        </Button>
        <Button variant="ghost" className="nav-items">
          <User />
        </Button>
      </div>
    </header>
  );
};
