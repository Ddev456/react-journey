import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "btn-primary",
        ghost: "hover:bg-slate-100 hover:text-slate-800",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonVariants extends VariantProps<typeof buttonVariants> {}

export const Button = ({
  className,
  children,
  ...props
}: { className: string; children: React.ReactNode } & ButtonVariants) => {
  const mergedClasses = twMerge(buttonVariants(props), className);

  return (
    <button className={mergedClasses} {...props}>
      {children}
    </button>
  );
};
