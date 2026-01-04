"use client"

import { cn } from "@/lib/utils"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SeatSelector } from "@/components/seat-selector"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Bus, Clock, MapPin, CreditCard, Wallet, CheckCircle2 } from "lucide-react"

export default function BookingPage({ params }: { params: { id: string } }) {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])
  const [step, setStep] = useState(1) // 1: Seats, 2: Details, 3: Payment, 4: Confirmation

  const ticketPrice = 1200
  const totalAmount = selectedSeats.length * ticketPrice

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
        {/* Progress Stepper */}
        <div className="flex items-center justify-center mb-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center">
              <div
                className={cn(
                  "h-10 w-10 rounded-full flex items-center justify-center font-bold transition-colors",
                  step >= i ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
                )}
              >
                {step > i ? <CheckCircle2 className="h-6 w-6" /> : i}
              </div>
              {i < 4 && <div className={cn("h-1 w-16 mx-2 transition-colors", step > i ? "bg-primary" : "bg-muted")} />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Select Your Seats</h2>
                <SeatSelector onSeatSelect={setSelectedSeats} />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Passenger Details</h2>
                <Card>
                  <CardContent className="p-6 space-y-6">
                    {selectedSeats.map((seat, i) => (
                      <div key={seat} className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">Seat {seat}</Badge>
                          <span className="text-sm font-semibold">Passenger {i + 1}</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Full Name</Label>
                            <Input placeholder="Enter name" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label>Age</Label>
                              <Input type="number" placeholder="Age" />
                            </div>
                            <div className="space-y-2">
                              <Label>Gender</Label>
                              <Input placeholder="M/F/O" />
                            </div>
                          </div>
                        </div>
                        {i < selectedSeats.length - 1 && <Separator />}
                      </div>
                    ))}
                    <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Email</Label>
                        <Input type="email" placeholder="email@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label>Mobile</Label>
                        <Input placeholder="+91 98765 43210" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Payment Method</h2>
                <Card>
                  <CardContent className="p-6">
                    <RadioGroup defaultValue="card" className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors">
                        <div className="flex items-center gap-4">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex items-center gap-3 cursor-pointer">
                            <CreditCard className="h-5 w-5 text-primary" />
                            <div>
                              <div className="font-semibold">Credit / Debit Card</div>
                              <div className="text-xs text-muted-foreground">Visa, Mastercard, AMEX</div>
                            </div>
                          </Label>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors">
                        <div className="flex items-center gap-4">
                          <RadioGroupItem value="upi" id="upi" />
                          <Label htmlFor="upi" className="flex items-center gap-3 cursor-pointer">
                            <Wallet className="h-5 w-5 text-primary" />
                            <div>
                              <div className="font-semibold">UPI Payment</div>
                              <div className="text-xs text-muted-foreground">Google Pay, PhonePe, Paytm</div>
                            </div>
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>

                    <div className="mt-8 space-y-4">
                      <div className="space-y-2">
                        <Label>Card Number</Label>
                        <Input placeholder="0000 0000 0000 0000" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Expiry Date</Label>
                          <Input placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label>CVV</Label>
                          <Input type="password" placeholder="***" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {step === 4 && (
              <div className="text-center py-12 space-y-6">
                <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-12 w-12 text-green-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Booking Confirmed!</h2>
                  <p className="text-muted-foreground mt-2">
                    Your tickets have been sent to your email. Happy Journey!
                  </p>
                </div>
                <Card className="max-w-md mx-auto">
                  <CardContent className="p-6 text-left space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Booking ID</span>
                      <span className="font-mono font-bold">LYFLY-847291</span>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <div className="font-bold">Mumbai → Goa</div>
                      <div className="text-sm text-muted-foreground">Dec 30, 2025 | 08:00 AM</div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Seats</span>
                      <span className="font-semibold">{selectedSeats.join(", ")}</span>
                    </div>
                  </CardContent>
                </Card>
                <div className="flex justify-center gap-4 pt-4">
                  <Button variant="outline">Download PDF</Button>
                  <Button onClick={() => (window.location.href = "/")}>Back to Home</Button>
                </div>
              </div>
            )}

            {step < 4 && (
              <div className="mt-8 flex justify-between">
                <Button variant="ghost" onClick={() => setStep(step - 1)} disabled={step === 1}>
                  Back
                </Button>
                <Button onClick={() => setStep(step + 1)} disabled={selectedSeats.length === 0} className="px-8">
                  {step === 3 ? "Pay Now" : "Continue"}
                </Button>
              </div>
            )}
          </div>

          {/* Booking Summary Sidebar */}
          <aside>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Trip Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <Bus className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-bold">Express Liner</div>
                    <div className="text-xs text-muted-foreground">AC Sleeper</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <div className="w-px h-8 bg-border" />
                      <div className="h-2 w-2 rounded-full border-2 border-primary bg-background" />
                    </div>
                    <div className="flex flex-col gap-4">
                      <div>
                        <div className="text-sm font-bold">08:00 AM</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> Mumbai
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-bold">04:00 PM</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> Goa
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Ticket Price (x{selectedSeats.length})</span>
                    <span>₹{totalAmount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Service Fee</span>
                    <span>₹50</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary">₹{selectedSeats.length > 0 ? totalAmount + 50 : 0}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted p-3 rounded-lg">
                    <Clock className="h-3.5 w-3.5" />
                    Seats held for 10:00 minutes
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}
