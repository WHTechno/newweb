"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"

const mainNavItems = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
]

const serviceItems = [
  { name: "Networks", href: "/networks" },
  { name: "Guides", href: "/guides" },
  { name: "Tools", href: "/tools" },
  { name: "Snapshots", href: "/snapshots" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  const isServiceActive = serviceItems.some(item => pathname === item.href)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 transform transition-transform duration-300 hover:scale-105">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 shadow-lg"></div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              ChainView
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-105 hover:shadow-md",
                  pathname === item.href
                    ? "bg-purple-500/10 text-purple-400 shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-105 hover:shadow-md flex items-center space-x-1",
                  isServiceActive
                    ? "bg-purple-500/10 text-purple-400 shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span>Services</span>
                <span className={cn(
                  "transition-transform duration-300",
                  servicesOpen ? "rotate-180" : ""
                )}>▾</span>
              </button>
              
              {/* Dropdown Menu */}
              <div className={cn(
                "absolute top-full left-0 mt-1 w-48 bg-background/95 backdrop-blur border border-border rounded-md shadow-xl transition-all duration-300 transform origin-top",
                servicesOpen 
                  ? "opacity-100 scale-100 translate-y-0" 
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              )}>
                <div className="py-2">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "block px-4 py-2 text-sm transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:translate-x-1",
                        pathname === item.href
                          ? "bg-purple-500/10 text-purple-400 border-r-2 border-purple-400"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-300 hover:scale-110"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:translate-x-1",
                    pathname === item.href
                      ? "bg-purple-500/10 text-purple-400"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services Section */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 flex items-center justify-between",
                    isServiceActive
                      ? "bg-purple-500/10 text-purple-400"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  <span>Services</span>
                  <span className={cn(
                    "transition-transform duration-300",
                    mobileServicesOpen ? "rotate-180" : ""
                  )}>▾</span>
                </button>
                
                {mobileServicesOpen && (
                  <div className="ml-4 mt-1 space-y-1 animate-fade-in">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "block px-3 py-2 rounded-md text-sm transition-all duration-300 hover:translate-x-1",
                          pathname === item.href
                            ? "bg-purple-500/10 text-purple-400 border-l-2 border-purple-400"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
