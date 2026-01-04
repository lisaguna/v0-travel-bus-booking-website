import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

const faqs = [
  {
    question: "How do I book a bus ticket on LYFLY?",
    answer:
      "Simply enter your source, destination, and travel date on our homepage. Browse available buses, select your preferred seat, fill in passenger details, and complete the payment. You'll receive your ticket via email instantly.",
  },
  {
    question: "Can I cancel or modify my booking?",
    answer:
      "Yes, you can cancel or modify your booking from the 'My Bookings' section. Cancellations made 24 hours before departure are eligible for a full refund. Modifications are subject to seat availability.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit/debit cards (Visa, Mastercard, AMEX) and UPI payments through Google Pay, PhonePe, and Paytm. All transactions are secured with SSL encryption.",
  },
  {
    question: "How early should I arrive at the boarding point?",
    answer:
      "We recommend arriving at the boarding point at least 15-20 minutes before the scheduled departure time. This ensures a smooth boarding process and allows time for any last-minute checks.",
  },
  {
    question: "What if my bus is delayed or cancelled?",
    answer:
      "In case of delays, we'll notify you via SMS and email. If a bus is cancelled, you'll receive a full refund or can reschedule to another available bus at no extra cost.",
  },
  {
    question: "Can I choose my seat while booking?",
    answer:
      "Our interactive seat selection feature allows you to view the bus layout and choose your preferred seat. You can select seats for all passengers in your booking.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes, we take data security seriously. All personal information is encrypted and stored securely. We comply with industry-standard security protocols and never share your data with third parties without consent.",
  },
  {
    question: "Do you offer student or senior citizen discounts?",
    answer:
      "Yes, we offer special discounts for students and senior citizens. Simply verify your eligibility during checkout to avail these offers. Valid ID proof may be required during travel.",
  },
  {
    question: "What amenities are available on the buses?",
    answer:
      "Amenities vary by bus type. AC buses include air conditioning, charging ports, and comfortable seating. Sleeper buses offer reclining berths. Most buses have onboard restrooms and water facilities.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our customer support team via email at support@lyfly.com, call our toll-free number 1800-123-4567, or use the contact form on our Contact Us page. We're available 24/7 to assist you.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">Find answers to common questions about booking and travel</p>
        </div>

        <Card className="shadow-lg border-primary/10">
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:text-primary">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <div className="mt-12 text-center bg-muted/50 border border-primary/10 rounded-xl p-8">
          <h2 className="text-xl font-bold mb-2">Still have questions?</h2>
          <p className="text-muted-foreground mb-4">
            Can't find the answer you're looking for? Please reach out to us.
          </p>
          <a href="/contact" className="text-primary font-semibold hover:underline">
            Contact Support →
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
