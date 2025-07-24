import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Network } from "@/lib/api"
import { cn } from "@/lib/utils"

interface NetworkCardProps {
  network: Network
  className?: string
}

export default function NetworkCard({ network, className }: NetworkCardProps) {
  const getStatusBadge = (status: Network['status']) => {
    return status === 'active' 
      ? "bg-green-500/10 text-green-400 border-green-500/20"
      : "bg-red-500/10 text-red-400 border-red-500/20"
  }

  const getTypeBadge = (type: Network['type']) => {
    return type === 'mainnet'
      ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
      : "bg-blue-500/10 text-blue-400 border-blue-500/20"
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num)
  }

  return (
    <Card className={cn("bg-card/50 border-border hover:bg-card/70 transition-colors duration-200", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-foreground">
            {network.name}
          </CardTitle>
          <div className="flex gap-2">
            <Badge variant="outline" className={getTypeBadge(network.type)}>
              {network.type}
            </Badge>
            <Badge variant="outline" className={getStatusBadge(network.status)}>
              {network.status}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Validators</p>
            <p className="text-lg font-semibold text-purple-400">
              {formatNumber(network.validators)}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Block Height</p>
            <p className="text-lg font-semibold text-blue-400">
              {formatNumber(network.blockHeight)}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Total Staked</p>
            <p className="text-sm font-medium text-green-400">
              {network.totalStaked}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Block Time</p>
            <p className="text-sm font-medium text-yellow-400">
              {network.blockTime}
            </p>
          </div>
        </div>

        <div className="pt-2 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Network ID:</span>
            <span className="text-xs font-mono text-muted-foreground">{network.id}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
