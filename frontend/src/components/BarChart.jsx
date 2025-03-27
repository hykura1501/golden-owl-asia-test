import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
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
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { getRandomColor } from "@/lib/color";

export default function BarChartLabel({ label, chartData, dataKey }) {
  const color = getRandomColor();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Label</CardTitle>
        <CardDescription>Revenue Data</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}}>
          <BarChart accessibilityLayer data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0  }} >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="monthYear"
              tickLine={false}
              fontSize={12}
              tickMargin={10}
              axisLine={false}
              minTickGap={0}
              tickFormatter={(value) => value}
              interval={0}
            />
            <YAxis type="number" hide tickCount={400} tick={{ fontSize: 14, width: 250 }} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey={dataKey} fill={color} radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={14}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">{label}</div>
      </CardFooter>
    </Card>
  );
}