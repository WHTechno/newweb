import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface InfoCardProps {
  title: string
  value: string | number
  subtitle?: string
  trend?: "up" | "down" | "neutral"
  className?: string
}

export default function InfoCard({ 
  title, 
  value, 
  subtitle, 
  trend = "neutral",
  className 
}: InfoCardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "text-green-400"
      case "down":
        return "text-red-400"
      default:
        return "text-muted-foreground"
    }
  }

  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return "↗"
      case "down":
        return "↘"
      default:
        return ""
    }
  }

  return (
    <Card className={cn("bg-card/50 border-border hover:bg-card/70 transition-colors", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-purple-400">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline space-x-2">
          <div className="text-2xl font-bold text-foreground">
            {value}
          </div>
          {trend !== "neutral" && (
            <span className={cn("text-sm font-medium", getTrendColor())}>
              {getTrendIcon()}
            </span>
          )}
        </div>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-1">
            {subtitle}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
