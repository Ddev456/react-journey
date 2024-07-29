import { cn } from "~/lib/utils";

export const Badge = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-violet-600/10 px-2 py-1 text-xs font-medium text-violet-600",
        className
      )}
      {...props}
    />
  );
};
