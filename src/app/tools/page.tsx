"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const tools = [
  {
    id: "validator-setup",
    name: "Validator Setup Guide",
    description: "Step-by-step guide to set up your validator node",
    category: "Setup",
    status: "Available",
    difficulty: "Intermediate"
  },
  {
    id: "key-management",
    name: "Key Management Tool",
    description: "Secure key generation and management utilities",
    category: "Security",
    status: "Available",
    difficulty: "Advanced"
  },
  {
    id: "monitoring-scripts",
    name: "Monitoring Scripts",
    description: "Automated monitoring and alerting scripts",
    category: "Monitoring",
    status: "Available",
    difficulty: "Beginner"
  },
  {
    id: "upgrade-helper",
    name: "Network Upgrade Helper",
    description: "Automated network upgrade preparation tool",
    category: "Maintenance",
    status: "Beta",
    difficulty: "Intermediate"
  },
  {
    id: "performance-analyzer",
    name: "Performance Analyzer",
    description: "Analyze validator performance and optimization tips",
    category: "Analytics",
    status: "Available",
    difficulty: "Intermediate"
  },
  {
    id: "backup-tool",
    name: "Backup & Recovery Tool",
    description: "Automated backup and recovery solutions",
    category: "Security",
    status: "Available",
    difficulty: "Beginner"
  },
  {
    id: "network-scanner",
    name: "Network Scanner",
    description: "Scan and analyze network health and peers",
    category: "Diagnostics",
    status: "Coming Soon",
    difficulty: "Advanced"
  },
  {
    id: "reward-calculator",
    name: "Reward Calculator",
    description: "Calculate staking rewards and commission earnings",
    category: "Analytics",
    status: "Available",
    difficulty: "Beginner"
  }
]

const categories = ["All", "Setup", "Security", "Monitoring", "Maintenance", "Analytics", "Diagnostics"]

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")

  const filteredTools = selectedCategory === "All" 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory)

  const getStatusBadge = (status: string) => {
    const variants = {
      "Available": "bg-green-500/10 text-green-400 border-green-500/20",
      "Beta": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      "Coming Soon": "bg-blue-500/10 text-blue-400 border-blue-500/20"
    }

    return (
      <Badge 
        variant="outline" 
        className={variants[status as keyof typeof variants] || "bg-gray-500/10 text-gray-400 border-gray-500/20"}
      >
        {status}
      </Badge>
    )
  }

  const getDifficultyBadge = (difficulty: string) => {
    const variants = {
      "Beginner": "bg-green-500/10 text-green-400 border-green-500/20",
      "Intermediate": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      "Advanced": "bg-red-500/10 text-red-400 border-red-500/20"
    }

    return (
      <Badge 
        variant="outline" 
        className={variants[difficulty as keyof typeof variants] || "bg-gray-500/10 text-gray-400 border-gray-500/20"}
      >
        {difficulty}
      </Badge>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
          Validator Tools
        </h1>
        <p className="text-muted-foreground">
          Essential tools and utilities for blockchain validator operations
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-card/50 border-border">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">{tools.length}</div>
            <div className="text-sm text-muted-foreground">Total Tools</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-400">
              {tools.filter(t => t.status === "Available").length}
            </div>
            <div className="text-sm text-muted-foreground">Available</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400">
              {tools.filter(t => t.status === "Beta").length}
            </div>
            <div className="text-sm text-muted-foreground">Beta</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">
              {tools.filter(t => t.status === "Coming Soon").length}
            </div>
            <div className="text-sm text-muted-foreground">Coming Soon</div>
          </CardContent>
        </Card>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                : "bg-card/50 text-muted-foreground hover:text-foreground hover:bg-accent border border-border"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTools.map((tool) => (
          <Card key={tool.id} className="bg-card/50 border-border hover:bg-card/70 transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg text-foreground">{tool.name}</CardTitle>
                  <Badge variant="secondary" className="bg-purple-500/10 text-purple-300 border-purple-500/20">
                    {tool.category}
                  </Badge>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  {getStatusBadge(tool.status)}
                  {getDifficultyBadge(tool.difficulty)}
                </div>
              </div>
              <CardDescription className="text-muted-foreground">
                {tool.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <button 
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    tool.status === "Available" || tool.status === "Beta"
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : "bg-gray-600 text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={tool.status === "Coming Soon"}
                >
                  {tool.status === "Coming Soon" ? "Coming Soon" : "Use Tool"}
                </button>
                <button className="px-4 py-2 border border-border bg-background hover:bg-accent text-foreground rounded-md text-sm font-medium transition-colors">
                  Docs
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 border-purple-500/20">
        <CardHeader>
          <CardTitle className="text-purple-400">Quick Actions</CardTitle>
          <CardDescription>
            Common validator operations and utilities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 bg-card/50 border border-border rounded-lg hover:bg-card/70 transition-colors text-left">
              <div className="font-semibold text-foreground mb-1">Check Node Status</div>
              <div className="text-sm text-muted-foreground">Verify your validator node health</div>
            </button>
            <button className="p-4 bg-card/50 border border-border rounded-lg hover:bg-card/70 transition-colors text-left">
              <div className="font-semibold text-foreground mb-1">Update Commission</div>
              <div className="text-sm text-muted-foreground">Modify validator commission rate</div>
            </button>
            <button className="p-4 bg-card/50 border border-border rounded-lg hover:bg-card/70 transition-colors text-left">
              <div className="font-semibold text-foreground mb-1">Generate Keys</div>
              <div className="text-sm text-muted-foreground">Create new validator keys securely</div>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
