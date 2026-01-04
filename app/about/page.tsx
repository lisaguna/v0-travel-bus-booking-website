import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Target, Award } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <Image src="/about-hero-travel-bus.jpg" alt="About LYFLY" fill className="object-cover brightness-[0.4]" />
          <div className="relative z-10 text-center text-white max-w-3xl px-4">
            <h1 className="text-5xl font-extrabold mb-4 text-balance">About LYFLY</h1>
            <p className="text-xl text-white/90 text-pretty">
              Connecting destinations and creating memorable journeys since day one
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 max-w-5xl">
          {/* Mission Statement */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
              At LYFLY, we believe travel should be accessible, comfortable, and stress-free. Our mission is to provide
              reliable bus booking services that connect people to their destinations with safety, comfort, and
              affordability at the core of everything we do.
            </p>
          </section>

          {/* Core Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center border-primary/10">
                <CardContent className="p-6">
                  <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Safety First</h3>
                  <p className="text-sm text-muted-foreground">Your security and wellbeing are our top priorities.</p>
                </CardContent>
              </Card>
              <Card className="text-center border-primary/10">
                <CardContent className="p-6">
                  <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Customer Focus</h3>
                  <p className="text-sm text-muted-foreground">We put travelers at the heart of every decision.</p>
                </CardContent>
              </Card>
              <Card className="text-center border-primary/10">
                <CardContent className="p-6">
                  <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Reliability</h3>
                  <p className="text-sm text-muted-foreground">On-time departures and transparent communication.</p>
                </CardContent>
              </Card>
              <Card className="text-center border-primary/10">
                <CardContent className="p-6">
                  <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Excellence</h3>
                  <p className="text-sm text-muted-foreground">Continuous improvement in service quality.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Stats */}
          <section className="bg-primary/5 border border-primary/10 rounded-2xl p-12 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Cities Connected</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Daily Trips</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">2M+</div>
                <div className="text-sm text-muted-foreground">Happy Travelers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.8</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
