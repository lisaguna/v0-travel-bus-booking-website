import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BusSearchForm } from "@/components/bus-search-form"
import { PopularRoutes } from "@/components/popular-routes"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Shield, Clock, BadgePercent, Star } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center text-center px-4 overflow-hidden">
          <Image
            src="/luxury-travel-bus-on-scenic-highway.jpg"
            alt="Hero Background"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 text-balance">
              Your Journey, Our Priority
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
              Book luxury and comfortable bus tickets with LYFLY. Experience the best travel across the country.
            </p>
            <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
              Get Started
            </Button>
          </div>
        </section>

        {/* Search Form */}
        <div className="px-4">
          <BusSearchForm />
        </div>

        {/* Popular Routes */}
        <PopularRoutes />

        {/* Features Section */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">Why Choose LYFLY?</h2>
              <p className="text-muted-foreground mt-2">We provide the best service for our travelers</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card p-6 rounded-xl border flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Safe & Secure</h3>
                <p className="text-sm text-muted-foreground">Your safety and data security are our top priorities.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Punctual Service</h3>
                <p className="text-sm text-muted-foreground">We value your time and ensure buses run on schedule.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BadgePercent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Best Prices</h3>
                <p className="text-sm text-muted-foreground">Get the most competitive rates and exclusive offers.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Top Rated</h3>
                <p className="text-sm text-muted-foreground">Thousands of satisfied travelers rate us 4.8/5.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">What Travelers Say</h2>
            <p className="text-muted-foreground mt-2">Real reviews from our community</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card p-6 rounded-xl border shadow-sm">
                <div className="flex gap-1 mb-4 text-primary">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic mb-4">
                  "The booking process was seamless and the bus was extremely comfortable. Highly recommend LYFLY for
                  inter-city travel!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-bold text-primary">
                    JD
                  </div>
                  <div>
                    <div className="text-sm font-semibold">John Doe</div>
                    <div className="text-xs text-muted-foreground">Verified Traveler</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
