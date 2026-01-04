"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, MapPin, Bus, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function BusSearchForm() {
  const router = useRouter()
  const [source, setSource] = useState("")
  const [destination, setDestination] = useState("")
  const [date, setDate] = useState("")
  const [busType, setBusType] = useState("all")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const query = new URLSearchParams({
      source,
      destination,
      date,
      type: busType,
    }).toString()
    router.push(`/search?${query}`)
  }

  return (
    <Card className="w-full max-w-5xl mx-auto -mt-12 relative z-10 shadow-xl border-primary/10">
      <CardContent className="p-6">
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          <div className="space-y-2">
            <Label htmlFor="source" className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              From
            </Label>
            <Input
              id="source"
              placeholder="Source City"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="destination" className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              To
            </Label>
            <Input
              id="destination"
              placeholder="Destination City"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date" className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              Date
            </Label>
            <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type" className="flex items-center gap-2">
              <Bus className="h-4 w-4 text-primary" />
              Bus Type
            </Label>
            <Select value={busType} onValueChange={setBusType}>
              <SelectTrigger id="type">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="ac">AC</SelectItem>
                <SelectItem value="non-ac">Non-AC</SelectItem>
                <SelectItem value="sleeper">Sleeper</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full h-10 gap-2">
            <Search className="h-4 w-4" />
            Search Buses
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
