import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-8">Last updated: December 27, 2025</p>

        <Card className="shadow-lg border-primary/10">
          <CardContent className="p-8 space-y-6 prose prose-neutral max-w-none">
            <section>
              <h2 className="text-2xl font-bold mb-3">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the LYFLY platform, you acknowledge that you have read, understood, and agree to
                be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not
                use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">2. Booking and Reservations</h2>
              <p className="text-muted-foreground leading-relaxed">
                All bookings made through LYFLY are subject to availability and confirmation. You must provide accurate
                personal information during the booking process. The booking is complete only after payment is
                successfully processed and you receive a confirmation email.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">3. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Payment must be made in full at the time of booking. We accept major credit/debit cards and UPI
                payments. All prices are listed in INR and include applicable taxes unless stated otherwise. LYFLY uses
                secure payment gateways to process transactions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">4. Cancellation and Refund Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cancellations made 24 hours or more before departure are eligible for a full refund. Cancellations made
                less than 24 hours before departure may incur a cancellation fee. Refunds are processed within 7-10
                business days. No-shows are not eligible for refunds.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">5. Passenger Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed">
                Passengers must arrive at the boarding point at least 15 minutes before departure. Valid identification
                must be presented when boarding. Passengers are responsible for their personal belongings. Prohibited
                items include weapons, illegal substances, and flammable materials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                LYFLY acts as an intermediary between passengers and bus operators. We are not liable for delays,
                cancellations, or incidents caused by circumstances beyond our control, including weather, road
                conditions, or operator decisions. Our liability is limited to the booking amount paid.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">7. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                LYFLY reserves the right to modify these Terms and Conditions at any time. Continued use of the platform
                after changes constitutes acceptance of the modified terms. Users will be notified of significant
                changes via email.
              </p>
            </section>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
