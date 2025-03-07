import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const talkshows = [
  {
    title: "Modern Wedding Trends 2024",
    speaker: "Emma Thompson",
    date: "Day 1 - 10:00 AM",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=400&fit=crop",
  },
  {
    title: "Planning Your Dream Wedding",
    speaker: "Michael Chen",
    date: "Day 1 - 2:00 PM",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=400&fit=crop",
  },
  {
    title: "Decorating for the Perfect Wedding",
    speaker: "Sophia Lee",
    date: "Day 2 - 5:00 PM",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop",
  },
  {
    title: "Wedding Photography Tips",
    speaker: "Done Doe",
    date: "Day 2 - 7:00 PM",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop",
  },
  {
    title: "Wedding Photography Business",
    speaker: "Kano Kano",
    date: "Day 2 - 7:00 PM",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop",
  },
  {
    title: "Wedding Photography Tips",
    speaker: "James Kim",
    date: "Day 3 - 7:00 PM",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop",
  },
  {
    title: "Wedding Photography Business",
    speaker: "Jhone Doe",
    date: "Day 3 - 10:00 PM",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop",
  },
];

export function TalkshowsSection() {
  return (
    <section id="talkshows" className="py-20 px-6 min-h-[60vh] mx-auto">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Talkshows
        </h2>
        <Accordion type="single" collapsible>
          {talkshows.map((talk, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-xl font-semibold">
                {talk.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <Image
                    src={talk.image}
                    alt={talk.title}
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div className="space-y-4">
                    <p className="text-lg font-medium">{talk.speaker}</p>
                    <p className="text-gray-600">{talk.date}</p>
                    <Button>Buy Ticket</Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
