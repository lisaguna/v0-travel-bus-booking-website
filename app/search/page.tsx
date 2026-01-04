"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BusCard, type Bus } from "@/components/bus-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { BusIcon, Filter, SlidersHorizontal } from "lucide-react"

// Mock data
const MOCK_BUSES: Bus[] = [
  {
    id: "1",
    name: "Express Liner",
    type: "AC Sleeper",
    departureTime: "08:00 AM",
    arrivalTime: "04:00 PM",
    duration: "8h 00m",
    price: 1250,
    rating: 4.5,
    reviews: 120,
    availableSeats: 12,
    source: "Mumbai",
    destination: "Goa",
  },
  {
    id: "2",
    name: "Luxury Travels",
    type: "AC Multi-Axle",
    departureTime: "10:30 AM",
    arrivalTime: "06:45 PM",
    duration: "8h 15m",
    price: 1800,
    rating: 4.8,
    reviews: 85,
    availableSeats: 5,
    source: "Mumbai",
    destination: "Goa",
  },
  {
    id: "3",
    name: "Blue Dart",
    type: "Non-AC Seater",
    departureTime: "06:00 AM",
    arrivalTime: "02:30 PM",
    duration: "8h 30m",
    price: 300,
    rating: 4.0,
    reviews: 210,
    availableSeats: 24,
    source: "Mumbai",
    destination: "Goa",
  },
  {
    id: "4",
    name: "Night Rider",
    type: "AC Sleeper",
    departureTime: "10:00 PM",
    arrivalTime: "06:00 AM",
    duration: "8h 00m",
    price: 550,
    rating: 4.6,
    reviews: 150,
    availableSeats: 8,
    source: "Mumbai",
    destination: "Goa",
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const source = searchParams.get("source") || "Mumbai"
  const destination = searchParams.get("destination") || "Goa"
  const date = searchParams.get("date") || "2025-12-30"

  const [filters, setFilters] = useState({
    ac: true,
    nonAc: true,
    sleeper: true,
    seater: true,
  })

  const filteredBuses = useMemo(() => {
    return MOCK_BUSES.filter((bus) => {
      const isAc = bus.type.toLowerCase().includes("ac") && !bus.type.toLowerCase().includes("non-ac")
      const isNonAc = bus.type.toLowerCase().includes("non-ac")
      const isSleeper = bus.type.toLowerCase().includes("sleeper")
      const isSeater = bus.type.toLowerCase().includes("seater") || bus.type.toLowerCase().includes("axle")

      if (!filters.ac && isAc) return false
      if (!filters.nonAc && isNonAc) return false
      if (!filters.sleeper && isSleeper) return false
      if (!filters.seater && isSeater) return false
      return true
    })
  }, [filters])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Search Context Bar */}
        <div className="bg-card border rounded-xl p-4 mb-8 flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <BusIcon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Route</div>
                <div className="text-sm font-bold">
                  {source} → {destination}
                </div>
              </div>
            </div>
            <Separator orientation="vertical" className="h-8 hidden sm:block" />
            <div className="flex flex-col">
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Date</div>
              <div className="text-sm font-bold">{date}</div>
            </div>
          </div>
          <div className="text-sm font-medium text-primary">{filteredBuses.length} buses found</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Filter className="h-4 w-4" /> Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold mb-3">Bus Type</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="ac"
                        checked={filters.ac}
                        onCheckedChange={(checked) => setFilters((f) => ({ ...f, ac: !!checked }))}
                      />
                      <Label htmlFor="ac">AC</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="nonAc"
                        checked={filters.nonAc}
                        onCheckedChange={(checked) => setFilters((f) => ({ ...f, nonAc: !!checked }))}
                      />
                      <Label htmlFor="nonAc">Non-AC</Label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-sm font-semibold mb-3">Coach Type</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="sleeper"
                        checked={filters.sleeper}
                        onCheckedChange={(checked) => setFilters((f) => ({ ...f, sleeper: !!checked }))}
                      />
                      <Label htmlFor="sleeper">Sleeper</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="seater"
                        checked={filters.seater}
                        onCheckedChange={(checked) => setFilters((f) => ({ ...f, seater: !!checked }))}
                      />
                      <Label htmlFor="seater">Seater</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/10">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                  <SlidersHorizontal className="h-4 w-4" />
                  Smart Sort
                </div>
                <p className="text-xs text-muted-foreground">
                  We automatically prioritize the highest-rated and fastest buses for your route.
                </p>
              </CardContent>
            </Card>
          </aside>

          {/* Search Results */}
          <section className="lg:col-span-3 space-y-4">
            {filteredBuses.length > 0 ? (
              filteredBuses.map((bus) => <BusCard key={bus.id} bus={bus} />)
            ) : (
              <div className="bg-card border rounded-xl p-12 text-center">
                <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-bold">No buses found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search criteria.</p>
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
