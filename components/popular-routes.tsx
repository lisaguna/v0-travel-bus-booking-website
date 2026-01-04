import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const routes = [
  { from: "Mumbai", to: "Pune", price: "₹450", image: "/images/mumbai-pune.jpg" },
  { from: "Delhi", to: "Jaipur", price: "₹550", image: "/images/delhi-jaipur.jpg" },
  { from: "Bangalore", to: "Chennai", price: "₹850", image: "/images/bangalore-chennai.jpg" },
  { from: "Hyderabad", to: "Vijayawada", price: "₹750", image: "/images/hyderabad-vijayawada.jpg" },
]

export function PopularRoutes() {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground">Popular Routes</h2>
        <p className="text-muted-foreground mt-2">Discover the most traveled paths at the best prices</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {routes.map((route, i) => (
          <Link key={i} href={`/search?source=${route.from}&destination=${route.to}`}>
            <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer border-none">
              <div className="relative h-40 w-full">
                <Image
                  src={route.image || "/placeholder.svg"}
                  alt={`${route.from} to ${route.to}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-md text-sm font-bold">
                  From {route.price}
                </div>
              </div>
              <CardContent className="p-4 bg-card">
                <div className="font-semibold text-lg">
                  {route.from} → {route.to}
                </div>
                <div className="text-sm text-muted-foreground mt-1">Multiple buses daily</div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
