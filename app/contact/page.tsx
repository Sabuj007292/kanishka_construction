import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
       <Header />
      <section className="bg-accent from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Get In <span className="text-cyan-400">Touch</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto text-pretty">
            Ready to start your construction project? Contact our expert team for a consultation and free quote.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0 bg-white">
            <CardHeader className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                <Send className="h-6 w-6" />
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">First Name *</label>
                    <Input placeholder="John" className="border-slate-300 focus:border-cyan-500 focus:ring-cyan-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name *</label>
                    <Input placeholder="Doe" className="border-slate-300 focus:border-cyan-500 focus:ring-cyan-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                  <Input
                    type="email"
                    placeholder="john.doe@example.com"
                    className="border-slate-300 focus:border-cyan-500 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="border-slate-300 focus:border-cyan-500 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Project Type</label>
                  <select className="w-full px-3 py-2 border border-slate-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none">
                    <option value="">Select a service</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="renovation">Renovation & Remodeling</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Project Details *</label>
                  <Textarea
                    placeholder="Please describe your project requirements, timeline, and any specific details..."
                    rows={5}
                    className="border-slate-300 focus:border-cyan-500 focus:ring-cyan-500"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold py-3 text-lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              <Card className="shadow-lg border-l-4 border-l-cyan-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Our Location</h3>
                      <p className="text-slate-600">
                        123 Construction Avenue
                        <br />
                        Building District, BD 12345
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-l-4 border-l-amber-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Phone Numbers</h3>
                      <p className="text-slate-600">
                        Main Office: +1 (555) 123-4567
                        <br />
                        Emergency: +1 (555) 987-6543
                        <br />
                        Fax: +1 (555) 123-4568
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-l-4 border-l-emerald-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Email Addresses</h3>
                      <p className="text-slate-600">
                        General: info@xyzconstruction.com
                        <br />
                        Projects: projects@xyzconstruction.com
                        <br />
                        Support: support@xyzconstruction.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Business Hours</h3>
                      <p className="text-slate-600">
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <Card className="shadow-lg">
              <CardContent className="p-0">
                <div className="bg-slate-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p className="font-semibold">Interactive Map</p>
                    <p className="text-sm">Location: 123 Construction Avenue</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your construction project. Our experts are ready to help bring your
            vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8">
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 font-semibold px-8 bg-transparent"
            >
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}