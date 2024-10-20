"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { DataTableColumnHeader } from "./data-table-column-header";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Property = {
  id: string;
  address: string;
  city: string;
  price: number;
  pricePerSqm: number;
  sqm: number;
  yield: number;
  isBargain: boolean;
};

export const columns: ColumnDef<Property>[] = [
  {
    accessorKey: "address",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Adresse" />
    ),
  },
  {
    accessorKey: "city",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="By" />
    ),
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pris" />
    ),
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("nb-NO", {
        style: "currency",
        currency: "NOK",
      }).format(price);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "pricePerSqm",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pris/kvm" />
    ),
    cell: ({ row }) => {
      const pricePerSqm = parseFloat(row.getValue("pricePerSqm"));
      const formatted = new Intl.NumberFormat("nb-NO", {
        style: "currency",
        currency: "NOK",
      }).format(pricePerSqm);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "sqm",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Kvm" />
    ),
    cell: ({ row }) => {
      const sqm = parseFloat(row.getValue("sqm"));
      return <div className="text-right font-medium">{sqm} m²</div>;
    },
  },
  {
    accessorKey: "yield",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Yield" />
    ),
    cell: ({ row }) => {
      const yield_ = parseFloat(row.getValue("yield"));
      return <div className="text-right font-medium">{yield_.toFixed(2)}%</div>;
    },
  },
  {
    accessorKey: "isBargain",
    header: "Vurdering",
    cell: ({ row }) => {
      const isBargain = row.getValue("isBargain");
      return (
        <Badge variant={isBargain ? "default" : "destructive"}>
          {isBargain ? "Godt kjøp" : "Dårlig kjøp"}
        </Badge>
      );
    },
  },
];
