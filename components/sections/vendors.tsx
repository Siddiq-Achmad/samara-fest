import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";
import Image from "next/image";

const vendors = [
  {
    name: "Elegant Dresses",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=400&h=300&fit=crop",
  },
  {
    name: "Floral Paradise",
    category: "Decoration",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
  },
  {
    name: "Sweet Delights",
    category: "Cake & Bakery",
    image:
      "https://images.unsplash.com/photo-1560180474-e8563fd75bab?w=400&h=300&fit=crop",
  },
  {
    name: "Capture Moments",
    category: "Photography",
    image:
      "https://images.unsplash.com/photo-1502759683299-cdcd6974244f?w=400&h=300&fit=crop",
  },
];

export function VendorsSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Vendors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vendors.map((vendor, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger>
                <Card className="overflow-hidden">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">{vendor.name}</h3>
                    <p className="text-sm text-gray-600">{vendor.category}</p>
                  </div>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">{vendor.name}</h4>
                  <p className="text-sm text-gray-600">
                    Visit our booth to discover exclusive wedding packages and
                    special offers.
                  </p>
                  <Button variant="outline" size="sm">
                    Learn More <Heart className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
}
