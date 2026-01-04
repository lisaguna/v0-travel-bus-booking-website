import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Users } from "lucide-react"
import Link from "next/link"

export interface Bus {
  id: string
  name: string
  type: string
  departureTime: string
  arrivalTime: string
  duration: string
  price: number
  rating: number
  reviews: number
  availableSeats: number
  source: string
  destination: string
}

interface BusCardProps {
  bus: Bus
}

export function BusCard({ bus }: BusCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Bus Info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold">{bus.name}</h3>
              <Badge variant="secondary">{bus.type}</Badge>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="font-medium text-foreground">{bus.rating}</span>
                <span>({bus.reviews} reviews)</span>
              </div>
            </div>

            <div className="flex items-center justify-between max-w-sm">
              <div className="text-center md:text-left">
                <div className="text-lg font-bold">{bus.departureTime}</div>
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {bus.source}
                </div>
              </div>

              <div className="flex flex-col items-center gap-1 px-4">
                <div className="text-xs text-muted-foreground font-medium">{bus.duration}</div>
                <div className="h-px w-16 bg-border relative">
                  <div className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-primary" />
                </div>
              </div>

              <div className="text-center md:text-right">
                <div className="text-lg font-bold">{bus.arrivalTime}</div>
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {bus.destination}
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & Booking */}
          <div className="flex flex-col justify-between items-end border-l pl-6 md:w-48">
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">₹{bus.price}</div>
              <div className="text-xs text-muted-foreground">per seat</div>
            </div>

            <div className="w-full space-y-3">
              <div className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
                <Users className="h-3 w-3" />
                <span>{bus.availableSeats} seats left</span>
              </div>
              <Link href={`/booking/${bus.id}`} className="w-full">
                <Button className="w-full">Select Seat</Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
