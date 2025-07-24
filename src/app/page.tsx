import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center space-y-8 mb-20">
        <div className="space-y-6 animate-float">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent leading-tight">
            Blockchain Validator Dashboard
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Monitor your blockchain PoS validator nodes, view network performance, and stay updated with real-time node statistics across multiple networks.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <Link 
            href="/dashboard"
            className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 px-10 py-4 text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 animate-glow"
          >
            <span className="group-hover:translate-x-1 transition-transform duration-300">View Dashboard</span>
          </Link>
          <Link 
            href="/networks"
            className="group inline-flex items-center justify-center rounded-lg border border-purple-500/30 bg-background/50 backdrop-blur px-10 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-purple-500/10 hover:border-purple-400 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 glass"
          >
            <span className="group-hover:translate-x-1 transition-transform duration-300">Explore Networks</span>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <Card className="glass border-purple-500/20 card-3d group hover:border-purple-400/40 transition-all duration-300">
          <CardHeader className="pb-4">
            <CardTitle className="text-purple-400 text-xl group-hover:text-purple-300 transition-colors duration-300">Real-time Monitoring</CardTitle>
            <CardDescription className="text-muted-foreground/80 leading-relaxed">
              Track validator uptime, voting power, and delegation status in real-time with advanced monitoring capabilities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
            <p className="text-sm text-muted-foreground">Average uptime across all networks</p>
          </CardContent>
        </Card>

        <Card className="glass border-purple-500/20 card-3d group hover:border-purple-400/40 transition-all duration-300">
          <CardHeader className="pb-4">
            <CardTitle className="text-purple-400 text-xl group-hover:text-purple-300 transition-colors duration-300">Multi-Network Support</CardTitle>
            <CardDescription className="text-muted-foreground/80 leading-relaxed">
              Monitor validators across multiple blockchain networks and testnets with unified dashboard experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
            <p className="text-sm text-muted-foreground">Supported networks and growing</p>
          </CardContent>
        </Card>

        <Card className="glass border-purple-500/20 card-3d group hover:border-purple-400/40 transition-all duration-300">
          <CardHeader className="pb-4">
            <CardTitle className="text-purple-400 text-xl group-hover:text-purple-300 transition-colors duration-300">Advanced Analytics</CardTitle>
            <CardDescription className="text-muted-foreground/80 leading-relaxed">
              Comprehensive performance charts and historical data analysis with predictive insights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
            <p className="text-sm text-muted-foreground">Continuous data collection</p>
          </CardContent>
        </Card>
      </div>

      {/* Supported Networks Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Supported Networks</h2>
          <p className="text-muted-foreground">Monitor validators across leading blockchain networks</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { name: "Cosmos Hub", symbol: "ATOM", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
            { name: "Osmosis", symbol: "OSMO", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
            { name: "Juno", symbol: "JUNO", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
            { name: "Akash", symbol: "AKT", color: "bg-green-500/10 text-green-400 border-green-500/20" },
            { name: "Secret", symbol: "SCRT", color: "bg-red-500/10 text-red-400 border-red-500/20" },
            { name: "Kava", symbol: "KAVA", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" }
          ].map((network) => (
            <Card key={network.name} className="bg-card/30 border-border hover:bg-card/50 transition-colors">
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{network.symbol.slice(0, 2)}</span>
                </div>
                <div className="font-semibold text-sm text-foreground">{network.name}</div>
                <Badge variant="outline" className={`text-xs mt-1 ${network.color}`}>
                  {network.symbol}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 rounded-lg p-8 border border-purple-500/20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Network Overview</h2>
          <p className="text-muted-foreground">Current statistics across all monitored networks</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">1,234</div>
            <div className="text-sm text-muted-foreground">Active Validators</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">98.7%</div>
            <div className="text-sm text-muted-foreground">Network Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">45.2M</div>
            <div className="text-sm text-muted-foreground">Total Staked</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">8,567</div>
            <div className="text-sm text-muted-foreground">Delegators</div>
          </div>
        </div>
      </div>

      {/* Why Choose ChainView Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Why Choose ChainView?</h2>
          <p className="text-muted-foreground">Everything you need to manage your validator operations</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-3 h-3 rounded-full bg-purple-400"></div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Comprehensive Monitoring</h3>
                <p className="text-muted-foreground text-sm">Track all your validators from a single dashboard with real-time updates and alerts.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Network Snapshots</h3>
                <p className="text-muted-foreground text-sm">Quick node synchronization with daily updated blockchain snapshots.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-3 h-3 rounded-full bg-blue-400"></div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Validator Tools</h3>
                <p className="text-muted-foreground text-sm">Essential tools for setup, security, monitoring, and maintenance operations.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Expert Guides</h3>
                <p className="text-muted-foreground text-sm">Step-by-step tutorials and best practices from validator experts.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Performance Analytics</h3>
                <p className="text-muted-foreground text-sm">Detailed charts and metrics to optimize your validator performance.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-3 h-3 rounded-full bg-purple-400"></div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Multi-Network Support</h3>
                <p className="text-muted-foreground text-sm">Manage validators across multiple Cosmos ecosystem networks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Updates Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Latest Updates</h2>
          <p className="text-muted-foreground">Stay informed about network upgrades and important announcements</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card/50 border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                  Network Update
                </Badge>
                <span className="text-xs text-muted-foreground">2 days ago</span>
              </div>
              <CardTitle className="text-lg">Cosmos Hub v18 Upgrade</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                The Cosmos Hub network has successfully upgraded to v18 with new features and improvements.
              </p>
              <Link href="/guides" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                Read upgrade guide →
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">
                  New Feature
                </Badge>
                <span className="text-xs text-muted-foreground">1 week ago</span>
              </div>
              <CardTitle className="text-lg">Enhanced Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                New real-time alerts and performance metrics have been added to the dashboard.
              </p>
              <Link href="/dashboard" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                Explore dashboard →
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                  Tool Release
                </Badge>
                <span className="text-xs text-muted-foreground">2 weeks ago</span>
              </div>
              <CardTitle className="text-lg">Backup Tool v2.0</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Updated backup and recovery tool with automated scheduling and cloud storage support.
              </p>
              <Link href="/tools" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                View tools →
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-8 border border-purple-500/20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Validating?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join thousands of validators who trust ChainView for their blockchain operations. 
          Get started with our comprehensive guides and tools.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/guides"
            className="inline-flex items-center justify-center rounded-md bg-purple-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-purple-700"
          >
            Start with Guides
          </Link>
          <Link 
            href="/tools"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Explore Tools
          </Link>
        </div>
      </div>
    </div>
  )
}
