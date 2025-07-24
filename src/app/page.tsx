"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function HomePage() {
  const heroAnimation = useScrollAnimation(0.1)
  const servicesAnimation = useScrollAnimation(0.1)
  const featuresAnimation = useScrollAnimation(0.1)
  const networksAnimation = useScrollAnimation(0.1)
  const statsAnimation = useScrollAnimation(0.1)
  const whyChooseAnimation = useScrollAnimation(0.1)
  const updatesAnimation = useScrollAnimation(0.1)
  const ctaAnimation = useScrollAnimation(0.1)
  return (
    <div className="container mx-auto px-4 py-8 space-y-20">
      {/* Enhanced Hero Section */}
      <div 
        ref={heroAnimation.ref}
        className={`flex flex-col items-center text-center space-y-10 mb-24 scroll-fade-in-up ${heroAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="space-y-8 animate-float">
          <h1 className="text-6xl md:text-8xl font-bold cosmic-gradient-text leading-tight">
            Cosmic Validator Hub
          </h1>
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Navigate the vast cosmos of blockchain validation
            </p>
            <p className="text-lg md:text-xl text-muted-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Monitor your PoS validator nodes, explore network performance, and stay synchronized with real-time statistics across the blockchain universe.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-8 mt-12">
          <Link 
            href="/dashboard"
            className="btn-cosmic group inline-flex items-center justify-center rounded-xl px-12 py-5 text-xl font-semibold text-white transition-all duration-300 hover-lift animate-glow"
          >
            <span className="group-hover:translate-x-2 transition-transform duration-300">Launch Dashboard</span>
          </Link>
          <Link 
            href="/networks"
            className="group inline-flex items-center justify-center rounded-xl border-2 border-purple-500/40 glass px-12 py-5 text-xl font-semibold transition-all duration-300 hover-lift hover:border-purple-400 hover:bg-purple-500/10 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            <span className="group-hover:translate-x-2 transition-transform duration-300">Explore Cosmos</span>
          </Link>
        </div>
      </div>

      {/* Featured Services Section */}
      <div 
        ref={servicesAnimation.ref}
        className={`mb-20 scroll-fade-in ${servicesAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 cosmic-gradient-text">Featured Services</h2>
          <p className="text-muted-foreground text-lg">Discover the power of our cosmic validation platform</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="glass-dark border-purple-500/20 card-3d group hover:border-purple-400/40 transition-all duration-500 animate-cosmic-drift scroll-fade-in-up scroll-stagger-1">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 rounded-full cosmic-gradient mx-auto mb-4 flex items-center justify-center animate-pulse">
                <div className="w-8 h-8 rounded-full bg-white/20"></div>
              </div>
              <CardTitle className="text-purple-400 text-xl group-hover:text-purple-300 transition-colors duration-300 text-center">Network Monitoring</CardTitle>
              <CardDescription className="text-muted-foreground/80 leading-relaxed text-center">
                Real-time blockchain network surveillance across the cosmos
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link href="/networks" className="text-purple-400 hover:text-purple-300 text-sm font-medium group-hover:underline transition-all duration-300">
                Explore Networks →
              </Link>
            </CardContent>
          </Card>

          <Card className="glass-dark border-blue-500/20 card-3d group hover:border-blue-400/40 transition-all duration-500 animate-cosmic-drift scroll-fade-in-up scroll-stagger-2">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-700/20 mx-auto mb-4 flex items-center justify-center animate-pulse">
                <div className="w-8 h-8 rounded-full bg-blue-400/30"></div>
              </div>
              <CardTitle className="text-blue-400 text-xl group-hover:text-blue-300 transition-colors duration-300 text-center">Expert Guides</CardTitle>
              <CardDescription className="text-muted-foreground/80 leading-relaxed text-center">
                Navigate validation with comprehensive tutorials and wisdom
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link href="/guides" className="text-blue-400 hover:text-blue-300 text-sm font-medium group-hover:underline transition-all duration-300">
                Access Guides →
              </Link>
            </CardContent>
          </Card>

          <Card className="glass-dark border-green-500/20 card-3d group hover:border-green-400/40 transition-all duration-500 animate-cosmic-drift scroll-fade-in-up scroll-stagger-3">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-green-700/20 mx-auto mb-4 flex items-center justify-center animate-pulse">
                <div className="w-8 h-8 rounded-full bg-green-400/30"></div>
              </div>
              <CardTitle className="text-green-400 text-xl group-hover:text-green-300 transition-colors duration-300 text-center">Validator Tools</CardTitle>
              <CardDescription className="text-muted-foreground/80 leading-relaxed text-center">
                Essential utilities for cosmic validator operations
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link href="/tools" className="text-green-400 hover:text-green-300 text-sm font-medium group-hover:underline transition-all duration-300">
                Launch Tools →
              </Link>
            </CardContent>
          </Card>

          <Card className="glass-dark border-yellow-500/20 card-3d group hover:border-yellow-400/40 transition-all duration-500 animate-cosmic-drift scroll-fade-in-up scroll-stagger-4">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-700/20 mx-auto mb-4 flex items-center justify-center animate-pulse">
                <div className="w-8 h-8 rounded-full bg-yellow-400/30"></div>
              </div>
              <CardTitle className="text-yellow-400 text-xl group-hover:text-yellow-300 transition-colors duration-300 text-center">Quick Snapshots</CardTitle>
              <CardDescription className="text-muted-foreground/80 leading-relaxed text-center">
                Instant node synchronization across blockchain networks
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link href="/snapshots" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium group-hover:underline transition-all duration-300">
                Get Snapshots →
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Enhanced Features Grid */}
      <div 
        ref={featuresAnimation.ref}
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 scroll-fade-in ${featuresAnimation.isVisible ? 'visible' : ''}`}
      >
        <Card className="glass border-purple-500/20 card-3d group hover:border-purple-400/40 transition-all duration-300 hover-glow">
          <CardHeader className="pb-4">
            <CardTitle className="text-purple-400 text-xl group-hover:text-purple-300 transition-colors duration-300">Real-time Monitoring</CardTitle>
            <CardDescription className="text-muted-foreground/80 leading-relaxed">
              Track validator uptime, voting power, and delegation status in real-time with advanced monitoring capabilities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300 animate-pulse">99.9%</div>
            <p className="text-sm text-muted-foreground">Average uptime across all networks</p>
          </CardContent>
        </Card>

        <Card className="glass border-blue-500/20 card-3d group hover:border-blue-400/40 transition-all duration-300 hover-glow">
          <CardHeader className="pb-4">
            <CardTitle className="text-blue-400 text-xl group-hover:text-blue-300 transition-colors duration-300">Multi-Network Support</CardTitle>
            <CardDescription className="text-muted-foreground/80 leading-relaxed">
              Monitor validators across multiple blockchain networks and testnets with unified dashboard experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300 animate-pulse">25+</div>
            <p className="text-sm text-muted-foreground">Supported networks and growing</p>
          </CardContent>
        </Card>

        <Card className="glass border-yellow-500/20 card-3d group hover:border-yellow-400/40 transition-all duration-300 hover-glow">
          <CardHeader className="pb-4">
            <CardTitle className="text-yellow-400 text-xl group-hover:text-yellow-300 transition-colors duration-300">Advanced Analytics</CardTitle>
            <CardDescription className="text-muted-foreground/80 leading-relaxed">
              Comprehensive performance charts and historical data analysis with predictive insights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300 animate-pulse">24/7</div>
            <p className="text-sm text-muted-foreground">Continuous data collection</p>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Supported Networks Section */}
      <div 
        ref={networksAnimation.ref}
        className={`mb-20 scroll-fade-in ${networksAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 cosmic-gradient-text">Cosmic Network Support</h2>
          <p className="text-muted-foreground text-lg">Monitor validators across leading blockchain networks in the cosmos</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { name: "Cosmos Hub", symbol: "ATOM", color: "from-blue-500 to-blue-700", textColor: "text-blue-400" },
            { name: "Osmosis", symbol: "OSMO", color: "from-purple-500 to-purple-700", textColor: "text-purple-400" },
            { name: "Juno", symbol: "JUNO", color: "from-orange-500 to-orange-700", textColor: "text-orange-400" },
            { name: "Akash", symbol: "AKT", color: "from-green-500 to-green-700", textColor: "text-green-400" },
            { name: "Secret", symbol: "SCRT", color: "from-red-500 to-red-700", textColor: "text-red-400" },
            { name: "Kava", symbol: "KAVA", color: "from-yellow-500 to-yellow-700", textColor: "text-yellow-400" }
          ].map((network, index) => (
            <Card key={network.name} className="glass hover:glass-dark transition-all duration-300 card-3d-subtle hover-lift group" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${network.color} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse`}>
                  <span className="text-white font-bold text-lg">{network.symbol.slice(0, 2)}</span>
                </div>
                <div className="font-semibold text-foreground mb-2 group-hover:text-white transition-colors duration-300">{network.name}</div>
                <Badge variant="outline" className={`${network.textColor} border-current/20 bg-current/10`}>
                  {network.symbol}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div 
        ref={statsAnimation.ref}
        className={`milky-way-gradient rounded-2xl p-12 border border-purple-500/20 mb-20 scroll-fade-in-up ${statsAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 cosmic-gradient-text">Cosmic Network Overview</h2>
          <p className="text-muted-foreground text-lg">Current statistics across all monitored networks in the universe</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="text-5xl font-bold text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300 animate-pulse">2,847</div>
            <div className="text-muted-foreground font-medium">Active Validators</div>
          </div>
          <div className="text-center group">
            <div className="text-5xl font-bold text-green-400 mb-3 group-hover:scale-110 transition-transform duration-300 animate-pulse">99.2%</div>
            <div className="text-muted-foreground font-medium">Network Uptime</div>
          </div>
          <div className="text-center group">
            <div className="text-5xl font-bold text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300 animate-pulse">127.8M</div>
            <div className="text-muted-foreground font-medium">Total Staked</div>
          </div>
          <div className="text-center group">
            <div className="text-5xl font-bold text-yellow-400 mb-3 group-hover:scale-110 transition-transform duration-300 animate-pulse">24,891</div>
            <div className="text-muted-foreground font-medium">Delegators</div>
          </div>
        </div>
      </div>

      {/* Enhanced Why Choose Section */}
      <div 
        ref={whyChooseAnimation.ref}
        className={`mb-20 scroll-fade-in ${whyChooseAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 cosmic-gradient-text">Why Choose Cosmic Validator Hub?</h2>
          <p className="text-muted-foreground text-lg">Everything you need to navigate the blockchain cosmos</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 rounded-full cosmic-gradient flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 rounded-full bg-white/30 animate-pulse"></div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3 text-lg group-hover:text-purple-300 transition-colors duration-300">Comprehensive Monitoring</h3>
                <p className="text-muted-foreground leading-relaxed">Track all your validators from a single cosmic dashboard with real-time updates, alerts, and deep space analytics.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-green-700/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 rounded-full bg-green-400/40 animate-pulse"></div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3 text-lg group-hover:text-green-300 transition-colors duration-300">Network Snapshots</h3>
                <p className="text-muted-foreground leading-relaxed">Quick node synchronization with daily updated blockchain snapshots across the cosmic network.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-700/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 rounded-full bg-blue-400/40 animate-pulse"></div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3 text-lg group-hover:text-blue-300 transition-colors duration-300">Validator Tools</h3>
                <p className="text-muted-foreground leading-relaxed">Essential cosmic tools for setup, security, monitoring, and maintenance operations across the universe.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-700/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 rounded-full bg-yellow-400/40 animate-pulse"></div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3 text-lg group-hover:text-yellow-300 transition-colors duration-300">Expert Guides</h3>
                <p className="text-muted-foreground leading-relaxed">Step-by-step cosmic tutorials and best practices from validator experts across the galaxy.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500/20 to-red-700/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 rounded-full bg-red-400/40 animate-pulse"></div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3 text-lg group-hover:text-red-300 transition-colors duration-300">Performance Analytics</h3>
                <p className="text-muted-foreground leading-relaxed">Detailed cosmic charts and metrics to optimize your validator performance across space and time.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 rounded-full cosmic-gradient flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 rounded-full bg-white/30 animate-pulse"></div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3 text-lg group-hover:text-purple-300 transition-colors duration-300">Multi-Network Support</h3>
                <p className="text-muted-foreground leading-relaxed">Manage validators across multiple cosmic blockchain networks and explore new frontiers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Latest Updates Section */}
      <div 
        ref={updatesAnimation.ref}
        className={`mb-20 scroll-fade-in ${updatesAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 cosmic-gradient-text">Cosmic Updates</h2>
          <p className="text-muted-foreground text-lg">Stay informed about network upgrades and cosmic announcements</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="glass-dark border-blue-500/20 hover-lift group">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                  Network Update
                </Badge>
                <span className="text-xs text-muted-foreground">2 days ago</span>
              </div>
              <CardTitle className="text-lg group-hover:text-blue-300 transition-colors duration-300">Cosmos Hub v19 Upgrade</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                The Cosmos Hub network has successfully upgraded to v19 with enhanced cosmic features and stellar improvements.
              </p>
              <Link href="/guides" className="text-blue-400 hover:text-blue-300 text-sm font-medium group-hover:underline transition-all duration-300">
                Read cosmic guide →
              </Link>
            </CardContent>
          </Card>

          <Card className="glass-dark border-green-500/20 hover-lift group">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">
                  New Feature
                </Badge>
                <span className="text-xs text-muted-foreground">1 week ago</span>
              </div>
              <CardTitle className="text-lg group-hover:text-green-300 transition-colors duration-300">Enhanced Cosmic Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                New real-time cosmic alerts and performance metrics have been added to the stellar dashboard.
              </p>
              <Link href="/dashboard" className="text-green-400 hover:text-green-300 text-sm font-medium group-hover:underline transition-all duration-300">
                Explore dashboard →
              </Link>
            </CardContent>
          </Card>

          <Card className="glass-dark border-purple-500/20 hover-lift group">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                  Tool Release
                </Badge>
                <span className="text-xs text-muted-foreground">2 weeks ago</span>
              </div>
              <CardTitle className="text-lg group-hover:text-purple-300 transition-colors duration-300">Cosmic Backup Tool v3.0</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Updated backup and recovery tool with automated cosmic scheduling and interstellar storage support.
              </p>
              <Link href="/tools" className="text-purple-400 hover:text-purple-300 text-sm font-medium group-hover:underline transition-all duration-300">
                Launch tools →
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Enhanced Call to Action Section */}
      <div 
        ref={ctaAnimation.ref}
        className={`nebula-gradient rounded-2xl p-12 border border-purple-500/20 text-center scroll-fade-in-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
      >
        <h2 className="text-4xl font-bold mb-6 cosmic-gradient-text">Ready to Explore the Cosmos?</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
          Join thousands of cosmic validators who trust our platform for their blockchain operations. 
          Begin your journey through the universe with our comprehensive guides and stellar tools.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link 
            href="/guides"
            className="btn-cosmic inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover-lift"
          >
            Start Cosmic Journey
          </Link>
          <Link 
            href="/tools"
            className="inline-flex items-center justify-center rounded-xl border-2 border-purple-400/40 glass px-8 py-4 text-lg font-semibold transition-all duration-300 hover-lift hover:border-purple-300 hover:bg-purple-500/10"
          >
            Explore Stellar Tools
          </Link>
        </div>
      </div>
    </div>
  )
}
