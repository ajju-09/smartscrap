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
import { TrendingUp } from "lucide-react";
import {ScrollAnimation} from "./animation";

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
    { name: "generated", value: 62, fill: "var(--color-generated)" },
    { name: "collected", value: 13.6, fill: "var(--color-collected)" },
    { name: "recycle", value: 11.2, fill: "var(--color-recycle)" }
  ]

const chartConfig = {
  garbage: {
    label: "Garbage",
  },
  mobilePhone: {
    label: "Mobile Phone",
    color: "hsl(var(--chart-1))",
  },
  laptops: {
    label: "Laptops & Computers",
    color: "hsl(var(--chart-2))",
  },
  batteries: {
    label: "Batteries",
    color: "hsl(var(--chart-3))",
  },
  television: {
    label: "Televisions & Monitors",
    color: "hsl(var(--chart-4))",
  },
  printers: {
    label: "Printers & Scanners",
    color: "hsl(var(--chart-5))",
  },
};

const chart2Config = {
    visitors: {
      label: "Visitors",
    },
    generated: {
      label: "Generated",
      color: "hsl(var(--chart-1))",
    },
    collected: {
      label: "Collected",
      color: "hsl(var(--chart-2))",
    },
    recycle: {
      label: "Recycle",
      color: "hsl(var(--chart-3))",
    }
  } 

const Charts = () => {
  const totalGarbage = useMemo(() => {
    const total = chartData.reduce((acc, curr) => acc + curr.value, 0);
    return total / chartData.length;
  }, []);

  return (
    
    <section className=" min-h-screen px-4 py-3 flex items-center justify-center ">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl w-full items-center mt-10">
        {/* left pie chart */}
        <ScrollAnimation>
        <div className="flex justify-center md:order-1 order-2 ">
          <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
              <CardTitle className="text-lg font-bold">
                Globally E-Waste Collection
              </CardTitle>
              <CardDescription className="text-gray-800 font-bold">
                Per Year Data
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px]"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={60}
                    strokeWidth={5}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="fill-foreground text-3xl font-bold"
                              >
                                {totalGarbage.toLocaleString()}%
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 24}
                                className="fill-muted-foreground text-gray-800"
                              >
                                Garbage Collected
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 font-medium leading-none">
                Showing total garbage collected annually<br /> across the world.
              </div>
            </CardFooter>
          </Card>
        </div>
        </ScrollAnimation>
        
        <ScrollAnimation>
        <div className="relative w-full flex items-center justify-center max-w-4xl md:order-2 order-1">
          <div className="absolute inset-0 z-0 bg-[#29bf12] blur-2xl">
          </div>
          <h1 className=" relative z-10  flex justify-center items-center font-bold md:font-extrabold text-3xl md:text-4xl animate-bounce text-[#abff4f]">Globally E-Waste Data</h1>    
        </div>
        </ScrollAnimation>
                 


        {/* right pie chart */}
        <ScrollAnimation>
        <div className="flex justify-center order-3">
          <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
              <CardTitle className="text-lg font-bold">Globally E-Waste Recycle</CardTitle>
              <CardDescription className="text-gray-800 font-bold">Per Year Data</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
              <ChartContainer
                config={chart2Config}
                className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
              >
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                  <Pie
                    data={chart2Data}
                    dataKey="value"
                    label
                    nameKey="name"
                  />
                </PieChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 font-medium leading-none">
                This values are in Million tons of garbage.
              </div>
            </CardFooter>
          </Card>
        </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Charts;
