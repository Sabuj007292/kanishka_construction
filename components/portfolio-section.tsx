import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Modern Family Home",
    category: "Residential",
    image: "/modern-family-home-exterior-with-large-windows-and.jpg",
    description: "A stunning 3,500 sq ft contemporary home featuring open-concept living and sustainable materials.",
  },
  {
    title: "Downtown Office Complex",
    category: "Commercial",
    image: "/modern-office-building-downtown-with-glass-facade.jpg",
    description: "15-story commercial office building with state-of-the-art facilities and LEED certification.",
  },
  {
    title: "Historic Home Renovation",
    category: "Renovation",
    image: "/beautifully-renovated-historic-home-with-modern-am.jpg",
    description: "Complete restoration of a 1920s Victorian home while preserving its historic character.",
  },
  {
    title: "Luxury Kitchen Remodel",
    category: "Residential",
    image: "/luxury-modern-kitchen-with-marble-countertops-and-.jpg",
    description: "High-end kitchen renovation featuring custom cabinetry and premium appliances.",
  },
  {
    title: "Retail Shopping Center",
    category: "Commercial",
    image: "/modern-retail-shopping-center-with-multiple-storef.jpg",
    description: "50,000 sq ft retail complex with 12 individual storefronts and modern amenities.",
  },
  {
    title: "Custom Pool House",
    category: "Residential",
    image: "/elegant-pool-house-with-outdoor-living-space-and-m.jpg",
    description: "Luxury pool house with outdoor kitchen, changing rooms, and entertainment area.",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            See examples of our past projects to get a sense of our work and craftsmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group border-border hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Button size="sm" className="bg-background text-foreground hover:bg-card">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
