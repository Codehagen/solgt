import { columns } from "./columns";
import { DataTable } from "./data-table";

async function getProperties() {
  // Fetch data from your API here.
  // This is just example data
  return [
    {
      id: "1",
      address: "Kongens gate 1",
      city: "Oslo",
      price: 5000000,
      pricePerSqm: 100000,
      sqm: 50,
      yield: 4.5,
      isBargain: true,
    },
    {
      id: "2",
      address: "Dronningens gate 2",
      city: "Bergen",
      price: 4000000,
      pricePerSqm: 80000,
      sqm: 50,
      yield: 3.8,
      isBargain: false,
    },
    // Add more properties here...
  ];
}

export default async function EiendommerPage() {
  const data = await getProperties();

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-4">Eiendommer</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
