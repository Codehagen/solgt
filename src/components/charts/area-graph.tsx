"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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

export const description = "A stacked area chart";

const chartData = [
  { month: "January", salgspris: 4200000, prisantydning: 4000000 },
  { month: "February", salgspris: 4300000, prisantydning: 4100000 },
  { month: "March", salgspris: 4500000, prisantydning: 4200000 },
  { month: "April", salgspris: 4400000, prisantydning: 4300000 },
  { month: "May", salgspris: 4600000, prisantydning: 4400000 },
  { month: "June", salgspris: 4800000, prisantydning: 4500000 },
];

const chartConfig = {
  salgspris: {
    label: "Salgspris",
    color: "hsl(var(--chart-1))",
  },
  prisantydning: {
    label: "Prisantydning",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function AreaGraph() {
  const latestMonth = chartData[chartData.length - 1];
  const priceDifference = latestMonth.salgspris - latestMonth.prisantydning;
  const percentageDifference = (
    (priceDifference / latestMonth.prisantydning) *
    100
  ).toFixed(1);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Markedstrender</CardTitle>
        <CardDescription>
          Sammenligning av salgspriser og prisantydning de siste 6 månedene
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="prisantydning"
              type="natural"
              fill="var(--color-prisantydning)"
              fillOpacity={0.4}
              stroke="var(--color-prisantydning)"
              stackId="a"
            />
            <Area
              dataKey="salgspris"
              type="natural"
              fill="var(--color-salgspris)"
              fillOpacity={0.4}
              stroke="var(--color-salgspris)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Salgspriser ligger {percentageDifference}% over prisantydning
              denne måneden <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Januar - Juni 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
