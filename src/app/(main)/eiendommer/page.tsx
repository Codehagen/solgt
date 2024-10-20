import { Suspense } from "react";
import { DataTable } from "@/components/eiendommer/eiendommer-table/data-table";
import { columns } from "@/components/eiendommer/eiendommer-table/columns";
import { Property } from "@/components/eiendommer/data/schema";
import { Skeleton } from "@/components/ui/skeleton";

async function getProperties(): Promise<Property[]> {
  // In a real application, this would be an API call
  const res = await import("@/components/eiendommer/data/properties.json");
  return res.default;
}

function TableSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-8 w-[250px]" />
        <Skeleton className="h-8 w-[100px]" />
        <Skeleton className="h-8 w-[100px]" />
      </div>
      <div className="rounded-md border">
        <Skeleton className="h-[480px]" />
      </div>
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-[200px]" />
        <Skeleton className="h-8 w-[120px]" />
      </div>
    </div>
  );
}

export default async function EiendommerPage() {
  const properties = await getProperties();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-2">Eiendommer Oversikt</h1>
      <p className="text-gray-600 mb-6">
        Her finner du en oversikt over alle våre eiendommer, inkludert detaljer
        om adresse, pris, og status.
      </p>
      <Suspense fallback={<TableSkeleton />}>
        <DataTable columns={columns} data={properties} />
      </Suspense>
    </div>
  );
}
