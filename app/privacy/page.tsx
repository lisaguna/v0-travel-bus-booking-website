import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: December 27, 2025</p>

        <Card className="shadow-lg border-primary/10">
          <CardContent className="p-8 space-y-6 prose prose-neutral max-w-none">
            <section>
              <h2 className="text-2xl font-bold mb-3">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect personal information you provide when booking tickets, including your name, email address,
                phone number, and payment information. We also collect usage data such as IP address, browser type, and
                pages visited to improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information is used to process bookings, send confirmation emails, provide customer support, and
                improve our platform. We may send you promotional emails about special offers, but you can opt out at
                any time. We never sell your personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">3. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your personal information. All payment
                transactions are encrypted using SSL technology. Access to your data is restricted to authorized
                personnel only. Despite our efforts, no system is completely secure, and we cannot guarantee absolute
                security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">4. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We share your booking information with bus operators to facilitate your travel. Payment information is
                processed by third-party payment gateways. We may share data with law enforcement if required by law or
                to protect our rights and safety.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">5. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies to enhance your browsing experience, remember your preferences, and analyze site traffic.
                You can disable cookies in your browser settings, but this may affect functionality. We use analytics
                tools to understand user behavior and improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, correct, or delete your personal information. You can update your details
                in your account settings or contact us for assistance. You may opt out of marketing communications at
                any time. For data deletion requests, contact support@lyfly.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">7. Changes to Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal
                requirements. The updated policy will be posted on this page with a new effective date. We encourage you
                to review this policy regularly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">8. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy or how we handle your data, please contact us at
                support@lyfly.com or call 1800-123-4567. We're committed to addressing your privacy concerns promptly.
              </p>
            </section>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
