"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { Logo } from "./logo"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <a href="/#services" className="text-foreground hover:text-accent transition-colors">
              Services
            </a>
            <a href="/#portfolio" className="text-foreground hover:text-accent transition-colors">
              Portfolio
            </a>
            <Link href="/about" className="text-foreground hover:text-accent transition-colors">
              About
            </Link>
            <a href="/contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>(+91) 78238 16184</span>
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Free Consultation</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <a href="/#services" className="text-foreground hover:text-accent transition-colors">
                Services
              </a>
              <a href="/#portfolio" className="text-foreground hover:text-accent transition-colors">
                Portfolio
              </a>
              <Link href="/about" className="text-foreground hover:text-accent transition-colors">
                About
              </Link>
              <a href="/contact" className="text-foreground hover:text-accent transition-colors">
                Contact
              </a>
              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <Phone className="h-4 w-4" />
                  <span>(+91) 78238 16184</span>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Free Consultation
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
