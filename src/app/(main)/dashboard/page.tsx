import { DashboardOverview } from "@/components/dashboard/dashboard-overview";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaGraph } from "@/components/charts/area-graph";
import { RadarChart } from "@/components/charts/Radar";
import { RecentSales } from "@/components/dashboard/recent-sales";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Hei, Velkommen tilbake 👋
        </h2>
        <div className="hidden items-center space-x-2 md:flex">
          <CalendarDateRangePicker />
          <Button>Last Ned</Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Oversikt</TabsTrigger>
          <TabsTrigger value="analytics" disabled>
            Markedet
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <DashboardOverview />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
            <div className="col-span-4">
              <AreaGraph />
            </div>
            <Card className="col-span-4 md:col-span-3">
              <CardHeader>
                <CardTitle>Nylig Vurderte Eiendommer</CardTitle>
                <CardDescription>
                  Klikk på en eiendom for å se detaljer.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentSales />
              </CardContent>
            </Card>
            <div className="col-span-4">
              <RadarChart />
            </div>
            <Card className="col-span-4 md:col-span-3">
              <CardHeader>
                <CardTitle>Markedsaktivitet</CardTitle>
                <CardDescription>
                  Oversikt over nylige transaksjoner.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentSales />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
