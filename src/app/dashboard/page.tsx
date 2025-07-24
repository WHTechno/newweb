"use client"

import React, { useEffect, useState } from "react"
import InfoCard from "@/components/InfoCard"
import NodeTable from "@/components/NodeTable"
import PerformanceChart from "@/components/PerformanceChart"
import { fetchValidatorData, ValidatorData } from "@/lib/api"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardPage() {
  const [data, setData] = useState<ValidatorData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true)
        const response = await fetchValidatorData()
        setData(response)
        setError(null)
      } catch (err) {
        setError("Failed to load validator data. Please try again later.")
        console.error("Error fetching data:", err)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="space-y-2">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-96" />
        </div>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="bg-card/50">
              <CardHeader className="pb-2">
                <Skeleton className="h-4 w-24" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-16" />
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="space-y-4">
          <Skeleton className="h-6 w-32" />
          <div className="rounded-md border">
            <div className="p-4 space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="bg-red-500/10 border-red-500/20">
          <CardHeader>
            <CardTitle className="text-red-400">Error Loading Data</CardTitle>
            <CardDescription className="text-red-300">
              {error}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
            >
              Retry
            </button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-muted-foreground">No data available</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
          Validator Dashboard
        </h1>
        <p className="text-muted-foreground">
          Monitor your validator performance across multiple blockchain networks
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <InfoCard
          title="Total Uptime"
          value={data.summary.uptime}
          subtitle="Last 30 days"
          trend="up"
        />
        <InfoCard
          title="Voting Power"
          value={data.summary.votingPower.toLocaleString()}
          subtitle="Current delegation"
          trend="up"
        />
        <InfoCard
          title="Delegators"
          value={data.summary.delegators}
          subtitle="Active delegators"
          trend="neutral"
        />
        <InfoCard
          title="Total Staked"
          value={data.summary.totalStaked}
          subtitle={`${data.summary.commission} commission`}
          trend="up"
        />
      </div>

      {/* Status Overview */}
      <Card className="bg-card/50 border-border">
        <CardHeader>
          <CardTitle className="text-purple-400">Validator Status</CardTitle>
          <CardDescription>
            Current status across all networks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${
              data.summary.status === 'active' 
                ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                : data.summary.status === 'jailed'
                ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                : 'bg-red-500/10 text-red-400 border border-red-500/20'
            }`}>
              {data.summary.status.toUpperCase()}
            </div>
            <span className="text-muted-foreground">
              Commission: {data.summary.commission}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Node Details Table */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Validator Nodes</h2>
          <p className="text-muted-foreground">
            Detailed information about your validators across different networks
          </p>
        </div>
        <NodeTable nodes={data.nodes} />
      </div>

      {/* Performance Chart */}
      <div className="space-y-4">
        <PerformanceChart 
          data={data.performance} 
          title="Performance Metrics (Last 24 Hours)"
        />
      </div>
    </div>
  )
}
