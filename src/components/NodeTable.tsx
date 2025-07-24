"use client"

import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Node } from "@/lib/api"
import { cn } from "@/lib/utils"

interface NodeTableProps {
  nodes: Node[]
}

export default function NodeTable({ nodes }: NodeTableProps) {
  if (!nodes || nodes.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No node data available.
      </div>
    )
  }

  const getStatusBadge = (status: Node['status']) => {
    const variants = {
      active: "bg-green-500/10 text-green-400 border-green-500/20",
      jailed: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      tombstoned: "bg-red-500/10 text-red-400 border-red-500/20"
    }

    return (
      <Badge 
        variant="outline" 
        className={cn("capitalize", variants[status])}
      >
        {status}
      </Badge>
    )
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num)
  }

  return (
    <div className="rounded-md border border-border bg-card/50">
      <Table>
        <TableHeader>
          <TableRow className="border-border hover:bg-transparent">
            <TableHead className="text-purple-400 font-semibold">Validator</TableHead>
            <TableHead className="text-purple-400 font-semibold">Network</TableHead>
            <TableHead className="text-purple-400 font-semibold">Uptime</TableHead>
            <TableHead className="text-purple-400 font-semibold">Voting Power</TableHead>
            <TableHead className="text-purple-400 font-semibold">Delegators</TableHead>
            <TableHead className="text-purple-400 font-semibold">Commission</TableHead>
            <TableHead className="text-purple-400 font-semibold">Status</TableHead>
            <TableHead className="text-purple-400 font-semibold">Last Seen</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {nodes.map((node) => (
            <TableRow 
              key={node.id} 
              className="border-border hover:bg-accent/50 transition-colors"
            >
              <TableCell className="font-medium">
                <div>
                  <div className="font-semibold text-foreground">{node.name}</div>
                  <div className="text-xs text-muted-foreground font-mono">
                    {node.id.slice(0, 20)}...
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="secondary" className="bg-purple-500/10 text-purple-300 border-purple-500/20">
                  {node.network}
                </Badge>
              </TableCell>
              <TableCell>
                <span className={cn(
                  "font-semibold",
                  parseFloat(node.uptime) >= 99 ? "text-green-400" : 
                  parseFloat(node.uptime) >= 95 ? "text-yellow-400" : "text-red-400"
                )}>
                  {node.uptime}
                </span>
              </TableCell>
              <TableCell className="font-mono">
                {formatNumber(node.votingPower)}
              </TableCell>
              <TableCell className="font-mono">
                {formatNumber(node.delegators)}
              </TableCell>
              <TableCell>{node.commission}</TableCell>
              <TableCell>{getStatusBadge(node.status)}</TableCell>
              <TableCell className="text-muted-foreground">
                {node.lastSeen}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
