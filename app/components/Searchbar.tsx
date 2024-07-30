"use client";

import * as React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Search } from "lucide-react";
import { JourneyCategories, JourneyCategory } from "./Navbar";

export function Searchbar() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedStatus, setSelectedStatus] =
    React.useState<JourneyCategory | null>(null);

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="ml-auto max-w-[150px] justify-start"
          >
            {selectedStatus ? (
              <>{selectedStatus.name}</>
            ) : (
              <Search className="h-4 w-4" />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="ml-8 max-w-[150px] justify-start">
          {selectedStatus ? (
            <>{selectedStatus.name}</>
          ) : (
            <>
              <Search />
            </>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <DrawerDescription>
            <VisuallyHidden.Root></VisuallyHidden.Root>
          </DrawerDescription>
          <DrawerTitle>
            <VisuallyHidden.Root></VisuallyHidden.Root>
          </DrawerTitle>

          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function StatusList({
  setOpen,
  setSelectedStatus,
}: {
  setOpen: (open: boolean) => void;
  setSelectedStatus: (status: JourneyCategory | null) => void;
}) {
  return (
    <Command>
      <CommandInput placeholder="Filter status..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {JourneyCategories.map((status) => (
            <CommandItem
              key={status.name}
              value={status.name}
              onSelect={(value) => {
                setSelectedStatus(
                  JourneyCategories.find(
                    (priority) => priority.name === value
                  ) || null
                );
                setOpen(false);
              }}
            >
              {status.name}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
