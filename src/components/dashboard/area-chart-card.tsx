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

const chartData = [
  { month: "Jan", salgspris: 4200000, takst: 4000000 },
  { month: "Feb", salgspris: 4300000, takst: 4100000 },
  { month: "Mar", salgspris: 4500000, takst: 4200000 },
  { month: "Apr", salgspris: 4400000, takst: 4300000 },
  { month: "Mai", salgspris: 4600000, takst: 4400000 },
  { month: "Jun", salgspris: 4800000, takst: 4500000 },
];

const chartConfig = {
  salgspris: {
    label: "Salgspris",
    color: "hsl(var(--chart-1))",
  },
  takst: {
    label: "Takst",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function AreaChartCard() {
  const latestMonth = chartData[chartData.length - 1];
  const priceDifference = latestMonth.salgspris - latestMonth.takst;
  const percentageDifference = (
    (priceDifference / latestMonth.takst) *
    100
  ).toFixed(1);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Markedstrender</CardTitle>
        <CardDescription>
          Sammenligning av salgspriser og takst de siste 6 månedene
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
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
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillSalgspris" x1="0" y1="0" x2="0" y2="1">
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
              <linearGradient id="fillTakst" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-takst)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-takst)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="takst"
              type="natural"
              fill="url(#fillTakst)"
              fillOpacity={0.4}
              stroke="var(--color-takst)"
              stackId="a"
            />
            <Area
              dataKey="salgspris"
              type="natural"
              fill="url(#fillSalgspris)"
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
              Salgspriser ligger {percentageDifference}% over takst denne
              måneden <TrendingUp className="h-4 w-4" />
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
