"use client";

import React, { useMemo } from "react";
import { Label, Pie, PieChart } from "recharts";
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

import { ScrollAnimation } from "./animation";

const chartData = [
  { name: "Mobile Phone", value: 20, fill: "var(--color-mobilePhone)" },
  { name: "Laptops & Computers", value: 22, fill: "var(--color-laptops)" },
  { name: "Batteries", value: 15, fill: "var(--color-batteries)" },
  {
    name: "Televisions & Monitors",
    value: 25,
    fill: "var(--color-television)",
  },
  { name: "Printers & Scanners", value: 12, fill: "var(--color-printers)" },
];

const chart2Data = [
  { name: "Generated", value: 62, fill: "var(--color-generated)" },
  { name: "Collected", value: 13.6, fill: "var(--color-collected)" },
  { name: "Recycle", value: 11.2, fill: "var(--color-recycle)" },
];

const chartConfig = {
  mobilePhone: { label: "Mobile Phone", color: "hsl(var(--chart-1))" },
  laptops: { label: "Laptops & Computers", color: "hsl(var(--chart-2))" },
  batteries: { label: "Batteries", color: "hsl(var(--chart-3))" },
  television: { label: "Televisions & Monitors", color: "hsl(var(--chart-4))" },
  printers: { label: "Printers & Scanners", color: "hsl(var(--chart-5))" },
};

const chart2Config = {
  generated: { label: "Generated", color: "hsl(var(--chart-1))" },
  collected: { label: "Collected", color: "hsl(var(--chart-2))" },
  recycle: { label: "Recycle", color: "hsl(var(--chart-3))" },
};

const Charts = () => {
  const totalGarbage = useMemo(() => {
    const total = chartData.reduce((acc, curr) => acc + curr.value, 0);
    return total / chartData.length;
  }, []);

  return (
    <section className="min-h-screen px-4 py-10 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl w-full items-center">
        {/* Left Chart */}
        <ScrollAnimation>
          <div className="flex justify-center order-2 md:order-1">
            <Card className="flex flex-col w-full max-w-xs md:max-w-sm">
              <CardHeader className="items-center pb-0">
                <CardTitle className="text-lg font-bold">
                  Globally E-Waste Collection
                </CardTitle>
                <CardDescription className="text-gray-800 font-bold">
                  Per Year Data
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-0">
                <ChartContainer
                  config={chartConfig}
                  className="mx-auto aspect-square max-h-[250px]"
                >
                  <PieChart>
                    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                    <Pie
                      data={chartData}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={60}
                      strokeWidth={5}
                    >
                      <Label
                        content={({ viewBox }) => {
                          if (viewBox?.cx && viewBox?.cy) {
                            return (
                              <>
                                <text
                                  x={viewBox.cx}
                                  y={viewBox.cy}
                                  textAnchor="middle"
                                  dominantBaseline="middle"
                                  className="fill-foreground text-3xl font-bold"
                                >
                                  {totalGarbage.toFixed(1)}%
                                </text>
                                <text
                                  x={viewBox.cx}
                                  y={viewBox.cy + 24}
                                  textAnchor="middle"
                                  className="fill-muted-foreground text-sm text-gray-800"
                                >
                                  Garbage Collected
                                </text>
                              </>
                            );
                          }
                          return null;
                        }}
                      />
                    </Pie>
                  </PieChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="text-sm text-center font-medium">
                Showing total garbage collected annually across the world.
              </CardFooter>
            </Card>
          </div>
        </ScrollAnimation>

        {/* Center Text */}
        <ScrollAnimation>
          <div className="relative w-full flex items-center justify-center order-1 md:order-2">
            <div className="absolute inset-0 z-0 bg-[#29bf12] blur-2xl"></div>
            <h1 className="relative z-10 text-center font-extrabold text-3xl md:text-4xl animate-bounce text-[#abff4f]">
              Globally E-Waste Data
            </h1>
          </div>
        </ScrollAnimation>

        {/* Right Chart */}
        <ScrollAnimation>
          <div className="flex justify-center order-3">
            <Card className="flex flex-col w-full max-w-xs md:max-w-sm">
              <CardHeader className="items-center pb-0">
                <CardTitle className="text-lg font-bold">
                  Globally E-Waste Recycle
                </CardTitle>
                <CardDescription className="text-gray-800 font-bold">
                  Per Year Data
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-0">
                <ChartContainer
                  config={chart2Config}
                  className="mx-auto aspect-square max-h-[250px] pb-0"
                >
                  <PieChart>
                    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                    <Pie
                      data={chart2Data}
                      dataKey="value"
                      nameKey="name"
                      label
                    />
                  </PieChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="text-sm text-center font-medium">
                These values are in million tons of garbage.
              </CardFooter>
            </Card>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Charts;
