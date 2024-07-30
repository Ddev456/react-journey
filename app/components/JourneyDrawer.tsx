import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Badge } from "./ui/badge";

export function JourneyDrawer({
  name,
  categories,
  journeyType,
  children,
}: {
  name: string;
  categories: string[];
  journeyType: { name: string; icon: React.ReactNode };
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>{children}</DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
            <DialogDescription>
              <Badge>{categories.join(", ")}</Badge>
            </DialogDescription>
            <div className="p-4 flex items-center">
              {journeyType.icon}
              <span className="ml-2">{journeyType.name}</span>
            </div>
          </DialogHeader>
          <JourneyDrawerForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{name}</DrawerTitle>
          <DrawerDescription>
            <Badge>{categories.join(", ")}</Badge>
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 flex items-center">
          {journeyType.icon}
          <span className="ml-2">{journeyType.name}</span>
        </div>
        <JourneyDrawerForm className="px-4" />
      </DrawerContent>
    </Drawer>
  );
}

interface JourneyDrawerProps extends React.ComponentPropsWithoutRef<"form"> {}

function JourneyDrawerForm({ className }: JourneyDrawerProps) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue="shadcn@example.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@shadcn" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  );
}
