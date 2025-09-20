import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MessageSquare, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-accent-foreground mb-4 text-balance">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto text-pretty">
            Tell us about your project and get a free consultation and project estimate today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="border-accent-foreground/20 bg-accent-foreground/10 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent-foreground/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-accent-foreground mb-2">Free Consultation</h3>
              <p className="text-accent-foreground/80 text-sm mb-4">
                Get expert advice and project estimates at no cost.
              </p>
              <Button className="w-full bg-background text-foreground hover:bg-card">
                Get Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-accent-foreground/20 bg-accent-foreground/10 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent-foreground/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-accent-foreground mb-2">Call Us Today</h3>
              <p className="text-accent-foreground/80 text-sm mb-4">Speak directly with our construction experts.</p>
              <Button className="w-full bg-background text-foreground hover:bg-card">
                (555) 123-4567
                <Phone className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-accent-foreground/20 bg-accent-foreground/10 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent-foreground/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-accent-foreground mb-2">Email Us</h3>
              <p className="text-accent-foreground/80 text-sm mb-4">Send us your project details and requirements.</p>
              <Button className="w-full bg-background text-foreground hover:bg-card">
                Send Email
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
