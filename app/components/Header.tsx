import { ShoppingBag, User } from "lucide-react";
import { Button } from "./Button";

export const Header = () => {
  return (
    <header className="flex w-full items-center py-4">
      <h1 className="inline-flex items-center gap-2 text-lg font-bold">
        ⚡<span>Dev Journey</span>
      </h1>
      <input
        type="text"
        className="nav ml-auto flex items-center gap-4 border rounded-xl px-6 py-2"
        placeholder="Search about a topic..."
      />
      <div className="nav ml-auto flex items-center gap-4">
        <Button variant="ghost" className="nav-items">
          <ShoppingBag />
        </Button>
        <Button variant="ghost" className="nav-items">
          <User />
        </Button>
      </div>
    </header>
  );
};
