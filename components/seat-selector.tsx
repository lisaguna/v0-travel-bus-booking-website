"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Armchair } from "lucide-react"

interface SeatSelectorProps {
  onSeatSelect: (seats: string[]) => void
}

export function SeatSelector({ onSeatSelect }: SeatSelectorProps) {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])

  const rows = 10
  const seatsPerRow = 4 // 2 on each side of the aisle

  const toggleSeat = (seatId: string) => {
    const isSelected = selectedSeats.includes(seatId)
    const newSelection = isSelected ? selectedSeats.filter((s) => s !== seatId) : [...selectedSeats, seatId]
    setSelectedSeats(newSelection)
    onSeatSelect(newSelection)
  }

  // Mocking some booked seats
  const isBooked = (seatId: string) => ["A1", "B3", "C2", "D5", "A8"].includes(seatId)

  return (
    <div className="bg-card border rounded-xl p-8 shadow-sm">
      <div className="flex justify-center gap-8 mb-8 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-muted border rounded" />
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-primary rounded" />
          <span>Selected</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-destructive/20 border-destructive/30 rounded" />
          <span>Booked</span>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative border-4 border-muted rounded-t-3xl p-6 pt-12 min-w-[240px]">
          {/* Driver Seat Area */}
          <div className="absolute top-4 right-6">
            <div className="h-8 w-8 bg-muted rounded flex items-center justify-center">
              <Armchair className="h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          {/* Seats Grid */}
          <div className="space-y-4">
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <div key={rowIndex} className="flex gap-4">
                {/* Left Side */}
                <div className="flex gap-2">
                  {["A", "B"].map((col) => {
                    const id = `${col}${rowIndex + 1}`
                    const booked = isBooked(id)
                    const selected = selectedSeats.includes(id)

                    return (
                      <button
                        key={id}
                        disabled={booked}
                        onClick={() => toggleSeat(id)}
                        className={cn(
                          "h-8 w-8 rounded transition-all flex items-center justify-center text-[10px] font-bold border",
                          booked
                            ? "bg-destructive/10 border-destructive/20 text-destructive/40 cursor-not-allowed"
                            : selected
                              ? "bg-primary border-primary text-primary-foreground"
                              : "bg-muted hover:bg-primary/20 hover:border-primary/30 text-muted-foreground",
                        )}
                      >
                        {id}
                      </button>
                    )
                  })}
                </div>

                {/* Aisle */}
                <div className="w-8" />

                {/* Right Side */}
                <div className="flex gap-2">
                  {["C", "D"].map((col) => {
                    const id = `${col}${rowIndex + 1}`
                    const booked = isBooked(id)
                    const selected = selectedSeats.includes(id)

                    return (
                      <button
                        key={id}
                        disabled={booked}
                        onClick={() => toggleSeat(id)}
                        className={cn(
                          "h-8 w-8 rounded transition-all flex items-center justify-center text-[10px] font-bold border",
                          booked
                            ? "bg-destructive/10 border-destructive/20 text-destructive/40 cursor-not-allowed"
                            : selected
                              ? "bg-primary border-primary text-primary-foreground"
                              : "bg-muted hover:bg-primary/20 hover:border-primary/30 text-muted-foreground",
                        )}
                      >
                        {id}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
