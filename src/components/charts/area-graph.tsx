import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dynamic from "next/dynamic";

const AreaChart = dynamic(
  () => import("recharts").then((mod) => mod.AreaChart),
  { ssr: false }
);
const Area = dynamic(() => import("recharts").then((mod) => mod.Area), {
  ssr: false,
});
const XAxis = dynamic(() => import("recharts").then((mod) => mod.XAxis), {
  ssr: false,
});
const YAxis = dynamic(() => import("recharts").then((mod) => mod.YAxis), {
  ssr: false,
});
const Tooltip = dynamic(() => import("recharts").then((mod) => mod.Tooltip), {
  ssr: false,
});
const ResponsiveContainer = dynamic(
  () => import("recharts").then((mod) => mod.ResponsiveContainer),
  { ssr: false }
);

const data = [
  { name: "Jan", salgspris: 4200000, takst: 4000000 },
  { name: "Feb", salgspris: 4300000, takst: 4100000 },
  { name: "Mar", salgspris: 4500000, takst: 4200000 },
  { name: "Apr", salgspris: 4400000, takst: 4300000 },
  { name: "Mai", salgspris: 4600000, takst: 4400000 },
  { name: "Jun", salgspris: 4800000, takst: 4500000 },
];

export function AreaGraph() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Markedstrender</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="salgspris"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="takst"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
