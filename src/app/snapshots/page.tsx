"use client"

import React, { useEffect, useState } from "react"
import { fetchSnapshotData } from "@/lib/api"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Snapshot {
  network: string
  height: number
  size: string
  date: string
  downloadUrl: string
}

export default function SnapshotsPage() {
  const [snapshots, setSnapshots] = useState<Snapshot[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadSnapshots() {
      try {
        setLoading(true)
        const data = await fetchSnapshotData()
        setSnapshots(data.snapshots)
        setError(null)
      } catch (err) {
        setError("Failed to load snapshot data. Please try again later.")
        console.error("Error fetching snapshots:", err)
      } finally {
        setLoading(false)
      }
    }
    loadSnapshots()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="space-y-2">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-96" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} className="bg-card/50">
              <CardHeader>
                <Skeleton className="h-4 w-24" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-16" />
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="rounded-md border">
          <div className="p-4 space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-12 w-full" />
            ))}
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
            <CardTitle className="text-red-400">Error Loading Snapshots</CardTitle>
            <CardDescription className="text-red-300">
              {error}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors duration-200"
            >
              Retry
            </button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const getTotalSize = () => {
    return snapshots.reduce((total, snapshot) => {
      const size = parseFloat(snapshot.size.replace(' GB', ''))
      return total + size
    }, 0).toFixed(1)
  }

  const getLatestSnapshot = () => {
    if (snapshots.length === 0) return null
    return snapshots.reduce((latest, current) => 
      new Date(current.date) > new Date(latest.date) ? current : latest
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
          Network Snapshots
        </h1>
        <p className="text-muted-foreground">
          Download blockchain snapshots for quick node synchronization
        </p>
      </div>

      {/* Snapshot Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card/50 border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-purple-400">
              Available Snapshots
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {snapshots.length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Networks covered
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-green-400">
              Total Size
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {getTotalSize()} GB
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Combined download size
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-blue-400">
              Latest Update
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {getLatestSnapshot()?.date || 'N/A'}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Most recent snapshot
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Info Section */}
      <Card className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 border-purple-500/20">
        <CardHeader>
          <CardTitle className="text-purple-400">About Snapshots</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-muted-foreground text-sm">
            Snapshots are compressed blockchain data files that allow you to quickly sync your node without downloading the entire blockchain from genesis.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-foreground mb-2">Benefits:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Faster node synchronization</li>
                <li>• Reduced bandwidth usage</li>
                <li>• Daily updates available</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Usage:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Stop your node before applying</li>
                <li>• Extract to your data directory</li>
                <li>• Restart node to continue sync</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Snapshots Table */}
      <Card className="bg-card/50 border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Available Snapshots</CardTitle>
          <CardDescription>
            Download the latest blockchain snapshots for supported networks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-border">
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-muted/50">
                  <TableHead className="text-muted-foreground">Network</TableHead>
                  <TableHead className="text-muted-foreground">Block Height</TableHead>
                  <TableHead className="text-muted-foreground">Size</TableHead>
                  <TableHead className="text-muted-foreground">Date</TableHead>
                  <TableHead className="text-muted-foreground">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {snapshots.map((snapshot, index) => (
                  <TableRow key={index} className="border-border hover:bg-muted/50 transition-colors duration-200">
                    <TableCell className="font-medium text-foreground">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-500 to-purple-700"></div>
                        <span>{snapshot.network}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-muted-foreground">
                      {snapshot.height.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                        {snapshot.size}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {snapshot.date}
                    </TableCell>
                    <TableCell>
                      <button 
                        onClick={() => {
                          // In a real app, this would trigger the download
                          alert(`Downloading ${snapshot.network} snapshot...`)
                        }}
                        className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded text-sm font-medium transition-colors duration-200"
                      >
                        Download
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Instructions */}
      <Card className="bg-card/50 border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Installation Instructions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted/20 rounded-lg p-4 font-mono text-sm">
            <div className="text-muted-foreground mb-2"># Stop your node</div>
            <div className="text-foreground">sudo systemctl stop [your-node-service]</div>
            
            <div className="text-muted-foreground mb-2 mt-4"># Download and extract snapshot</div>
            <div className="text-foreground">wget [snapshot-url]</div>
            <div className="text-foreground">tar -xzf snapshot.tar.gz -C ~/.node/data/</div>
            
            <div className="text-muted-foreground mb-2 mt-4"># Restart your node</div>
            <div className="text-foreground">sudo systemctl start [your-node-service]</div>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p className="font-medium text-yellow-400 mb-2">⚠️ Important Notes:</p>
            <ul className="space-y-1 ml-4">
              <li>• Always backup your validator keys before applying snapshots</li>
              <li>• Ensure you have enough disk space before downloading</li>
              <li>• Snapshots are updated daily at 00:00 UTC</li>
              <li>• Verify checksums when available for data integrity</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
