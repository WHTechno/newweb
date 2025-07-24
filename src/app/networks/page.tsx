"use client"

import React, { useEffect, useState } from "react"
import NetworkCard from "@/components/NetworkCard"
import { fetchNetworkData, Network } from "@/lib/api"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

export default function NetworksPage() {
  const [networks, setNetworks] = useState<Network[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadNetworks() {
      try {
        setLoading(true)
        const data = await fetchNetworkData()
        setNetworks(data)
        setError(null)
      } catch (err) {
        setError("Failed to load network data. Please try again later.")
        console.error("Error fetching networks:", err)
      } finally {
        setLoading(false)
      }
    }
    loadNetworks()
  }, [])


  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="space-y-2">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-96" />
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="bg-card/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Skeleton className="h-6 w-32" />
                  <div className="flex space-x-2">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                </div>
                <Skeleton className="h-3 w-48" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Skeleton className="h-3 w-16 mb-1" />
                    <Skeleton className="h-5 w-12" />
                  </div>
                  <div>
                    <Skeleton className="h-3 w-20 mb-1" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                </div>
                <Skeleton className="h-8 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="bg-red-500/10 border-red-500/20">
          <CardHeader>
            <CardTitle className="text-red-400">Error Loading Networks</CardTitle>
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

  const mainnets = networks.filter(n => n.type === 'mainnet')
  const testnets = networks.filter(n => n.type === 'testnet')

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
          Blockchain Networks
        </h1>
        <p className="text-muted-foreground">
          Explore and monitor blockchain networks across mainnet and testnet environments
        </p>
      </div>

      {/* Network Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-card/50 border-border">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">{networks.length}</div>
            <div className="text-sm text-muted-foreground">Total Networks</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">{mainnets.length}</div>
            <div className="text-sm text-muted-foreground">Mainnets</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400">{testnets.length}</div>
            <div className="text-sm text-muted-foreground">Testnets</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-400">
              {networks.filter(n => n.status === 'active').length}
            </div>
            <div className="text-sm text-muted-foreground">Active</div>
          </CardContent>
        </Card>
      </div>

      {/* Networks Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 bg-card/50">
          <TabsTrigger value="all" className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400">
            All Networks
          </TabsTrigger>
          <TabsTrigger value="mainnet" className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400">
            Mainnet
          </TabsTrigger>
          <TabsTrigger value="testnet" className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400">
            Testnet
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {networks.map((network) => (
              <NetworkCard key={network.id} network={network} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mainnet" className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mainnets.map((network) => (
              <NetworkCard key={network.id} network={network} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="testnet" className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testnets.map((network) => (
              <NetworkCard key={network.id} network={network} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
