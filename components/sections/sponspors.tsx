import Image from "next/image";

const sponsors = [
  {
    name: "Wedding Organizer Co",
    logo: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=400&h=200&fit=crop",
  },
  {
    name: "Luxury Venues",
    logo: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=200&fit=crop",
  },
  {
    name: "Catering Excellence",
    logo: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=200&fit=crop",
  },
  {
    name: "Catering",
    logo: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=200&fit=crop",
  },
  {
    name: "Photography",
    logo: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=200&fit=crop",
  },
  {
    name: "Chacha Make up Artist",
    logo: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=200&fit=crop",
  },
];

export function SponsorsSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Official Sponsors
        </h2>
        <div className="flex overflow-hidden space-x-12">
          <div className="flex space-x-12 animate-marquee">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={400}
                  height={300}
                  className="h-24 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
