"use client";

import { TrendingUp, TrendingDown, BarChart3, PieChart } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart as RePieChart,
  Line,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const priceData = [
  { date: "2023-01", salgspris: 4000000, takst: 3800000 },
  { date: "2023-04", salgspris: 4200000, takst: 4000000 },
  { date: "2023-07", salgspris: 4400000, takst: 4100000 },
  { date: "2023-10", salgspris: 4500000, takst: 4200000 },
  { date: "2024-01", salgspris: 4600000, takst: 4300000 },
  { date: "2024-04", salgspris: 4800000, takst: 4400000 },
];

const projectedData = [
  { date: "2024-04", salgspris: 4800000, takst: 4400000 },
  { date: "2024-07", salgspris: 5000000, takst: 4600000 },
  { date: "2024-10", salgspris: 5200000, takst: 4800000 },
  { date: "2025-01", salgspris: 5400000, takst: 5000000 },
];

const combinedData = [...priceData, ...projectedData.slice(1)];

const salesData = [
  { month: "Jan", listed: 150, sold: 120 },
  { month: "Feb", listed: 180, sold: 150 },
  { month: "Mar", listed: 220, sold: 180 },
  { month: "Apr", listed: 250, sold: 220 },
  { month: "Mai", listed: 280, sold: 250 },
  { month: "Jun", listed: 300, sold: 280 },
];

const propertyTypeData = [
  { name: "Leilighet", value: 45 },
  { name: "Enebolig", value: 30 },
  { name: "Rekkehus", value: 15 },
  { name: "Tomannsbolig", value: 10 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const priceChartConfig: ChartConfig = {
  salgspris: {
    label: "Salgspris",
    color: "hsl(var(--chart-1))",
  },
  takst: {
    label: "Takst",
    color: "hsl(var(--chart-2))",
  },
};

const salesChartConfig: ChartConfig = {
  listed: {
    label: "Lagt ut",
    color: "hsl(var(--chart-3))",
  },
  sold: {
    label: "Solgt",
    color: "hsl(var(--chart-4))",
  },
};

const propertyTypeChartConfig: ChartConfig = {
  value: {
    label: "Antall",
    color: "hsl(var(--chart-4))",
  },
};

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("nb-NO", {
    style: "currency",
    currency: "NOK",
  }).format(value);
}

export function MarketInsights() {
  const latestMonth = priceData[priceData.length - 1];
  const priceDifference = latestMonth.salgspris - latestMonth.takst;
  const percentageDifference = (
    (priceDifference / latestMonth.takst) *
    100
  ).toFixed(1);
  const averageSalgspris =
    priceData.reduce((sum, item) => sum + item.salgspris, 0) / priceData.length;
  const growthPercentage = (
    (latestMonth.salgspris / priceData[0].salgspris - 1) *
    100
  ).toFixed(1);

  const totalListedLastMonth = salesData[salesData.length - 1].listed;
  const totalSoldLastMonth = salesData[salesData.length - 1].sold;
  const salesRatio = (
    (totalSoldLastMonth / totalListedLastMonth) *
    100
  ).toFixed(1);

  return (
    <div className="grid gap-6">
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Salgsvolum</CardTitle>
            <CardDescription>
              Antall boliger lagt ut og solgt per måned
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ChartContainer config={salesChartConfig}>
                <BarChart
                  data={salesData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                  />
                  <YAxis axisLine={false} tickLine={false} />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dashed" />}
                  />
                  <Bar
                    dataKey="listed"
                    fill="var(--color-listed)"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="sold"
                    fill="var(--color-sold)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            </ResponsiveContainer>
          </CardContent>
          <CardFooter>
            <div className="grid w-full gap-4 text-sm">
              <div className="flex items-center justify-between">
                <p className="font-medium">Salgsratio siste måned</p>
                <span className="font-bold">{salesRatio}%</span>
              </div>
              <p className="text-muted-foreground">
                {totalSoldLastMonth} av {totalListedLastMonth} eiendommer ble
                solgt forrige måned
              </p>
            </div>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Boligtyper</CardTitle>
            <CardDescription>Fordeling av solgte boligtyper</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ChartContainer config={propertyTypeChartConfig}>
                <RePieChart>
                  <Pie
                    data={propertyTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {propertyTypeData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </RePieChart>
              </ChartContainer>
            </ResponsiveContainer>
          </CardContent>
          <CardFooter>
            <div className="grid w-full gap-4 text-sm">
              <div className="flex items-center justify-between">
                <p className="font-medium">Mest solgte boligtype</p>
                <span className="font-bold">{propertyTypeData[0].name}</span>
              </div>
              <p className="text-muted-foreground">
                {propertyTypeData[0].name} utgjør {propertyTypeData[0].value}%
                av alle solgte boliger
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Prisutvikling</CardTitle>
          <TrendIcon
            trend={{
              value: parseFloat(growthPercentage),
              isPositive: parseFloat(growthPercentage) > 0,
            }}
          />
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <ChartContainer config={priceChartConfig}>
              <AreaChart
                data={combinedData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient
                    id="colorSalgspris"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="var(--color-salgspris)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-salgspris)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => new Date(value).getFullYear()}
                  tick={{ fontSize: 12 }}
                />
                <YAxis
                  tickFormatter={(value) => `${value / 1000000}M`}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12 }}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("nb-NO", {
                          month: "long",
                          year: "numeric",
                        });
                      }}
                      valueFormatter={(value) => formatCurrency(value)}
                    />
                  }
                />
                <Area
                  type="monotone"
                  dataKey="salgspris"
                  stroke="var(--color-salgspris)"
                  fillOpacity={0.4}
                  fill="url(#colorSalgspris)"
                  dot={{ fill: "var(--color-salgspris)", r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="takst"
                  stroke="var(--color-takst)"
                  dot={{ fill: "var(--color-takst)", r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="salgspris"
                  data={projectedData}
                  stroke="var(--color-salgspris)"
                  strokeDasharray="5 5"
                  dot={false}
                  activeDot={false}
                />
                <ReferenceLine
                  y={averageSalgspris}
                  stroke="hsl(var(--muted-foreground))"
                  strokeDasharray="3 3"
                  strokeWidth={1}
                  label={{
                    value: "Gjennomsnittlig salgspris",
                    position: "insideBottomLeft",
                    fill: "hsl(var(--foreground))",
                  }}
                />
              </AreaChart>
            </ChartContainer>
          </ResponsiveContainer>
        </CardContent>
        <CardFooter>
          <div className="grid w-full gap-4 text-sm md:grid-cols-3">
            <div className="space-y-2">
              <p className="font-medium">Prisvekst</p>
              <p className="text-muted-foreground">
                Økt salgspris med {growthPercentage}% siden{" "}
                {new Date(priceData[0].date).getFullYear()}
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-medium">Gjennomsnittlig salgspris</p>
              <p className="text-muted-foreground">
                {formatCurrency(latestMonth.salgspris)}
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-medium">Stipulert salgspris om 1 år</p>
              <p className="text-muted-foreground">
                {formatCurrency(
                  projectedData[projectedData.length - 1].salgspris
                )}
              </p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

function TrendIcon({
  trend,
}: {
  trend: { value: number; isPositive: boolean };
}) {
  const colorClass = trend.isPositive ? "text-green-500" : "text-red-500";

  return (
    <div className={`flex items-center gap-1 ${colorClass}`}>
      {trend.isPositive ? (
        <TrendingUp className="h-5 w-5" />
      ) : (
        <TrendingDown className="h-5 w-5" />
      )}
      <span className="text-sm font-medium">{trend.value}%</span>
    </div>
  );
}
