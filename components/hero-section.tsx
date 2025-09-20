import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-background to-card py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight text-balance">
                Welcome to <span className="text-accent">Kanishka</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground text-pretty">
                Where quality craftsmanship meets innovative design
              </p>
            </div>

            <p className="text-lg text-foreground leading-relaxed text-pretty">
              Whether you're looking to construct your dream home, renovate an existing space, or build a commercial
              property, we're here to turn your ideas into reality.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-foreground">Clear communication throughout the project</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-foreground">High-quality materials and craftsmanship</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-foreground">On-time delivery within budget</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                View Our Work
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square lg:aspect-[4/3] rounded-lg overflow-hidden bg-card">
              <img
                src="/modern-construction-site-with-workers-building-a-h.jpg"
                alt="XYZ Construction team working on a modern home construction project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
