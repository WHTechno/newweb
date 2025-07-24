"use client"

import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const guides = [
  {
    id: "validator-setup",
    title: "Setting Up Your First Validator",
    description: "Complete guide to setting up and running a blockchain validator node",
    category: "Setup",
    difficulty: "Beginner",
    readTime: "15 min",
    tags: ["validator", "setup", "node"],
    content: {
      overview: "Learn how to set up your first validator node from scratch",
      steps: [
        "Server requirements and preparation",
        "Installing blockchain software",
        "Configuring validator settings",
        "Creating validator keys",
        "Submitting validator transaction",
        "Monitoring and maintenance"
      ]
    }
  },
  {
    id: "security-best-practices",
    title: "Validator Security Best Practices",
    description: "Essential security measures to protect your validator and funds",
    category: "Security",
    difficulty: "Intermediate",
    readTime: "20 min",
    tags: ["security", "keys", "backup"],
    content: {
      overview: "Comprehensive security guide for validator operators",
      steps: [
        "Key management and storage",
        "Server hardening techniques",
        "Network security configuration",
        "Backup and recovery procedures",
        "Monitoring for threats",
        "Incident response planning"
      ]
    }
  },
  {
    id: "monitoring-alerting",
    title: "Monitoring and Alerting Setup",
    description: "Set up comprehensive monitoring and alerting for your validator",
    category: "Monitoring",
    difficulty: "Intermediate",
    readTime: "25 min",
    tags: ["monitoring", "alerts", "uptime"],
    content: {
      overview: "Build a robust monitoring system for your validator infrastructure",
      steps: [
        "Installing monitoring tools",
        "Configuring metrics collection",
        "Setting up alerting rules",
        "Creating dashboards",
        "Mobile notifications setup",
        "Performance optimization"
      ]
    }
  },
  {
    id: "network-upgrades",
    title: "Handling Network Upgrades",
    description: "Step-by-step process for network upgrades and governance",
    category: "Maintenance",
    difficulty: "Advanced",
    readTime: "18 min",
    tags: ["upgrades", "governance", "voting"],
    content: {
      overview: "Navigate network upgrades and governance participation",
      steps: [
        "Understanding governance proposals",
        "Voting on proposals",
        "Preparing for upgrades",
        "Executing upgrade procedures",
        "Post-upgrade validation",
        "Troubleshooting issues"
      ]
    }
  },
  {
    id: "troubleshooting",
    title: "Common Issues and Troubleshooting",
    description: "Diagnose and fix common validator problems",
    category: "Troubleshooting",
    difficulty: "Intermediate",
    readTime: "30 min",
    tags: ["troubleshooting", "debugging", "issues"],
    content: {
      overview: "Comprehensive troubleshooting guide for validator operators",
      steps: [
        "Node synchronization issues",
        "Validator jailing problems",
        "Performance optimization",
        "Network connectivity issues",
        "Key and signing problems",
        "Recovery procedures"
      ]
    }
  },
  {
    id: "commission-management",
    title: "Commission and Delegation Management",
    description: "Optimize your validator's commission and attract delegators",
    category: "Business",
    difficulty: "Beginner",
    readTime: "12 min",
    tags: ["commission", "delegation", "rewards"],
    content: {
      overview: "Learn how to manage commission rates and grow your delegation",
      steps: [
        "Understanding commission mechanics",
        "Setting optimal commission rates",
        "Communicating with delegators",
        "Building validator reputation",
        "Marketing your validator",
        "Community engagement"
      ]
    }
  }
]

const categories = ["All", "Setup", "Security", "Monitoring", "Maintenance", "Troubleshooting", "Business"]
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"]

export default function GuidesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")

  const filteredGuides = guides.filter(guide => {
    const categoryMatch = selectedCategory === "All" || guide.category === selectedCategory
    const difficultyMatch = selectedDifficulty === "All" || guide.difficulty === selectedDifficulty
    return categoryMatch && difficultyMatch
  })

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

  const getCategoryBadge = (category: string) => {
    return (
      <Badge variant="secondary" className="bg-purple-500/10 text-purple-300 border-purple-500/20">
        {category}
      </Badge>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
          Validator Guides
        </h1>
        <p className="text-muted-foreground">
          Comprehensive guides and tutorials for blockchain validator operations
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-card/50 border-border">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">{guides.length}</div>
            <div className="text-sm text-muted-foreground">Total Guides</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-400">
              {guides.filter(g => g.difficulty === "Beginner").length}
            </div>
            <div className="text-sm text-muted-foreground">Beginner</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400">
              {guides.filter(g => g.difficulty === "Intermediate").length}
            </div>
            <div className="text-sm text-muted-foreground">Intermediate</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-400">
              {guides.filter(g => g.difficulty === "Advanced").length}
            </div>
            <div className="text-sm text-muted-foreground">Advanced</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Filter by Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                    : "bg-card/50 text-muted-foreground hover:text-foreground hover:bg-accent border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Filter by Difficulty</h3>
          <div className="flex flex-wrap gap-2">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  selectedDifficulty === difficulty
                    ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                    : "bg-card/50 text-muted-foreground hover:text-foreground hover:bg-accent border border-border"
                }`}
              >
                {difficulty}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {filteredGuides.map((guide) => (
          <Card key={guide.id} className="bg-card/50 border-border hover:bg-card/70 transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-lg text-foreground">{guide.title}</CardTitle>
                  <div className="flex items-center space-x-2">
                    {getCategoryBadge(guide.category)}
                    {getDifficultyBadge(guide.difficulty)}
                    <Badge variant="outline" className="text-xs">
                      {guide.readTime}
                    </Badge>
                  </div>
                </div>
              </div>
              <CardDescription className="text-muted-foreground">
                {guide.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-1">
                {guide.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs bg-muted/50">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="content" className="border-border">
                  <AccordionTrigger className="text-sm font-medium text-purple-400 hover:text-purple-300">
                    View Guide Content
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{guide.content.overview}</p>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Steps Covered:</h4>
                      <ul className="space-y-1">
                        {guide.content.steps.map((step, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-purple-400 mr-2">{index + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="flex space-x-2 pt-2">
                <button className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm font-medium transition-colors">
                  Read Guide
                </button>
                <button className="px-4 py-2 border border-border bg-background hover:bg-accent text-foreground rounded-md text-sm font-medium transition-colors">
                  Bookmark
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Start */}
      <Card className="bg-gradient-to-r from-green-900/20 to-green-800/20 border-green-500/20">
        <CardHeader>
          <CardTitle className="text-green-400">Quick Start for New Validators</CardTitle>
          <CardDescription>
            Essential guides to get started with validator operations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 bg-card/50 border border-border rounded-lg hover:bg-card/70 transition-colors text-left">
              <div className="font-semibold text-foreground mb-1">1. Validator Setup</div>
              <div className="text-sm text-muted-foreground">Set up your first validator node</div>
            </button>
            <button className="p-4 bg-card/50 border border-border rounded-lg hover:bg-card/70 transition-colors text-left">
              <div className="font-semibold text-foreground mb-1">2. Security Guide</div>
              <div className="text-sm text-muted-foreground">Secure your validator infrastructure</div>
            </button>
            <button className="p-4 bg-card/50 border border-border rounded-lg hover:bg-card/70 transition-colors text-left">
              <div className="font-semibold text-foreground mb-1">3. Monitoring Setup</div>
              <div className="text-sm text-muted-foreground">Monitor your validator performance</div>
            </button>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card className="bg-card/50 border-border">
        <CardHeader>
          <CardTitle className="text-purple-400">Frequently Asked Questions</CardTitle>
          <CardDescription>
            Common questions about validator operations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1" className="border-border">
              <AccordionTrigger className="text-left">
                What are the minimum requirements to run a validator?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Minimum requirements vary by network, but generally include: dedicated server with 4+ CPU cores, 
                8GB+ RAM, 500GB+ SSD storage, reliable internet connection, and sufficient tokens for staking.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2" className="border-border">
              <AccordionTrigger className="text-left">
                How do I avoid getting jailed as a validator?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Maintain high uptime (99%+), keep your node synchronized, participate in governance, 
                avoid double signing, and ensure your server has adequate resources and monitoring.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3" className="border-border">
              <AccordionTrigger className="text-left">
                What commission rate should I set?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Commission rates typically range from 0-20%. Consider your costs, services provided, 
                and competitive landscape. Many successful validators start with 5-10% commission.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}
