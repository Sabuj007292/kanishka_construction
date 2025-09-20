import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Building2, Wrench, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description:
      "From custom homes to renovations, we bring your residential dreams to life with attention to every detail.",
    features: ["Custom Home Building", "Kitchen & Bathroom Remodeling", "Home Additions", "Interior Renovations"],
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "Professional commercial construction services for offices, retail spaces, and industrial facilities.",
    features: ["Office Buildings", "Retail Spaces", "Warehouses", "Restaurant Build-outs"],
  },
  {
    icon: Wrench,
    title: "Renovation & Remodeling",
    description: "Transform your existing space with our comprehensive renovation and remodeling services.",
    features: ["Complete Renovations", "Structural Modifications", "Modernization Projects", "Historic Restorations"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">Our Construction Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From residential construction to large-scale commercial builds, discover the full range of services we
            offer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
