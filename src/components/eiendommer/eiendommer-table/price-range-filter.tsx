"use client";

import { useState } from "react";
import { Column } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { priceRanges } from "../utils/filter-utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

interface PriceRangeFilterProps<TData, TValue> {
  column: Column<TData, TValue>;
}

export function PriceRangeFilter<TData, TValue>({
  column,
}: PriceRangeFilterProps<TData, TValue>) {
  // ... (rest of the component code)
}
