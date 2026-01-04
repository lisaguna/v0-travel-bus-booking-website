import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bus, Calendar, MapPin, Clock, Download, Star } from "lucide-react"

// Mock data for user bookings
const UPCOMING_BOOKINGS = [
  {
    id: "BK-847291",
    route: "Mumbai → Pune",
    date: "Dec 30, 2025",
    time: "08:00 AM",
    bus: "Express Liner",
    type: "AC Sleeper",
    seats: ["A1, A2"],
    status: "Confirmed",
    amount: "₹900",
  },
]

const PAST_BOOKINGS = [
  {
    id: "BK-736251",
    route: "Bangalore → Chennai",
    date: "Nov 15, 2025",
    time: "10:00 AM",
    bus: "Ocean Spray",
    type: "Luxury AC",
    seats: ["B4"],
    status: "Completed",
    amount: "₹1,250",
  },
]

export default function BookingsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">My Bookings</h1>
            <p className="text-muted-foreground">Manage your upcoming and past travel tickets</p>
          </div>
          <Button variant="outline" className="w-fit bg-transparent">
            <Download className="mr-2 h-4 w-4" />
            Export History
          </Button>
        </div>

        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2 bg-muted/50 p-1 border">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past Trips</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            {UPCOMING_BOOKINGS.map((booking) => (
              <Card
                key={booking.id}
                className="overflow-hidden border-primary/10 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardHeader className="bg-primary/5 pb-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200">
                        {booking.status}
                      </Badge>
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-tight">
                        ID: {booking.id}
                      </span>
                    </div>
                    <div className="text-lg font-bold text-primary">{booking.amount}</div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <div className="font-bold text-lg">{booking.route}</div>
                          <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" /> {booking.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" /> {booking.time}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 pt-2">
                        <div className="flex items-center gap-2 text-sm bg-muted/50 px-3 py-1.5 rounded-lg border">
                          <Bus className="h-4 w-4 text-primary" />
                          <span>
                            {booking.bus} ({booking.type})
                          </span>
                        </div>
                        <div className="text-sm font-medium">
                          Seats: <span className="text-primary">{booking.seats.join(", ")}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-3">
                      <Button className="w-full">View Ticket</Button>
                      <Button
                        variant="outline"
                        className="w-full text-destructive hover:bg-destructive/5 hover:text-destructive hover:border-destructive/20 bg-transparent"
                      >
                        Cancel Booking
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="past" className="space-y-4">
            {PAST_BOOKINGS.map((booking) => (
              <Card
                key={booking.id}
                className="opacity-80 grayscale-[0.5] hover:opacity-100 hover:grayscale-0 transition-all border-dashed"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{booking.status}</Badge>
                        <span className="text-xs font-mono text-muted-foreground">{booking.id}</span>
                      </div>
                      <div className="font-bold text-lg">{booking.route}</div>
                      <div className="text-sm text-muted-foreground">
                        {booking.date} • {booking.bus}
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-end gap-3">
                      <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        Rate Trip
                      </Button>
                      <Button variant="ghost" size="sm">
                        Download Receipt
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}
