"use client"

import React from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { PerformanceData } from "@/lib/api"

interface PerformanceChartProps {
  data: PerformanceData[]
  title?: string
}

export default function PerformanceChart({ data, title = "Network Performance" }: PerformanceChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No performance data available.
      </div>
    )
  }

  const chartConfig = {
    uptime: {
      label: "Uptime (%)",
      color: "#a855f7"
    },
    votingPower: {
      label: "Voting Power",
      color: "#3b82f6"
    },
    delegators: {
      label: "Delegators",
      color: "#10b981"
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <div className="rounded-lg border border-border bg-card/50 p-4">
        <ChartContainer config={chartConfig} className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="hsl(var(--border))" 
                opacity={0.3}
              />
              <XAxis
                dataKey="time"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                yAxisId="uptime"
                orientation="left"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                domain={[95, 100]}
              />
              <YAxis
                yAxisId="power"
                orientation="right"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border border-border bg-background p-3 shadow-lg">
                        <p className="font-semibold text-foreground mb-2">{`Time: ${label}`}</p>
                        {payload.map((entry, index) => (
                          <p key={index} style={{ color: entry.color }} className="text-sm">
                            {entry.name}: {
                              entry.dataKey === 'uptime' 
                                ? `${entry.value}%`
                                : entry.dataKey === 'votingPower'
                                ? `${(Number(entry.value) / 1000000).toFixed(2)}M`
                                : entry.value
                            }
                          </p>
                        ))}
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Legend 
                wrapperStyle={{ paddingTop: '20px' }}
                iconType="line"
              />
              <Line
                yAxisId="uptime"
                type="monotone"
                dataKey="uptime"
                stroke={chartConfig.uptime.color}
                strokeWidth={2}
                dot={{ fill: chartConfig.uptime.color, strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: chartConfig.uptime.color, strokeWidth: 2 }}
                name="Uptime (%)"
              />
              <Line
                yAxisId="power"
                type="monotone"
                dataKey="votingPower"
                stroke={chartConfig.votingPower.color}
                strokeWidth={2}
                dot={{ fill: chartConfig.votingPower.color, strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: chartConfig.votingPower.color, strokeWidth: 2 }}
                name="Voting Power"
              />
              <Line
                yAxisId="power"
                type="monotone"
                dataKey="delegators"
                stroke={chartConfig.delegators.color}
                strokeWidth={2}
                dot={{ fill: chartConfig.delegators.color, strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: chartConfig.delegators.color, strokeWidth: 2 }}
                name="Delegators"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  )
}
