"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Property } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { statuses } from "../data/data";
import { useCallback } from "react";

// Client-side components for formatting
const FormattedCurrency = ({ value }: { value: number }) => {
  const formatCurrency = useCallback((value: number) => {
    return new Intl.NumberFormat("no-NO", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  }, []);

  return <div>{formatCurrency(value)}</div>;
};

const FormattedPercentage = ({ value }: { value: number }) => {
  return <div>{value.toFixed(1)}%</div>;
};

export const columns: ColumnDef<Property>[] = [
  {
    accessorKey: "address",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Adresse" />
    ),
    cell: ({ row }) => <div>{row.getValue("address")}</div>,
  },
  {
    accessorKey: "city",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="By" />
    ),
    cell: ({ row }) => <div>{row.getValue("city")}</div>,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "matrikkel",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Matrikkel" />
    ),
    cell: ({ row }) => <div>{row.getValue("matrikkel")}</div>,
  },
  {
    accessorKey: "floor",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Etasje" />
    ),
    cell: ({ row }) => <div>{row.getValue("floor")}</div>,
  },
  {
    accessorKey: "bra",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="BRA-I" />
    ),
    cell: ({ row }) => <div>{row.getValue("bra")} m²</div>,
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pris" />
    ),
    cell: ({ row }) => <FormattedCurrency value={row.getValue("price")} />,
    filterFn: (row, id, value) => {
      const price = row.getValue(id) as number;
      const [min, max] = value as [number, number];
      if (min !== undefined && max !== undefined) {
        return price >= min && price <= max;
      } else if (min !== undefined) {
        return price >= min;
      } else if (max !== undefined) {
        return price <= max;
      }
      return true;
    },
  },
  {
    accessorKey: "yield",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Yield" />
    ),
    cell: ({ row }) => <FormattedPercentage value={row.getValue("yield")} />,
    filterFn: (row, id, value) => {
      const yieldValue = row.getValue(id) as number;
      const [min, max] = value as [number, number];
      if (min !== undefined && max !== undefined) {
        return yieldValue >= min && yieldValue <= max;
      } else if (min !== undefined) {
        return yieldValue >= min;
      } else if (max !== undefined) {
        return yieldValue <= max;
      }
      return true;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
