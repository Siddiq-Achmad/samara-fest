import { Calendar, MapPin, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-white min-h-[60vh]">
      <div className="max-w-4xl mx-auto text-center ">
        <h2 className="text-4xl font-bold mb-8">About The Event</h2>
        <p className="text-lg text-gray-600 mb-12">
          Join us at Samara Fest 2024, the most prestigious wedding exhibition
          in the region. Experience three days of inspiration, innovation, and
          celebration as we bring together the finest wedding vendors, exciting
          talkshows, and exclusive showcases.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Calendar className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold">3 Days Event</h3>
            <p className="text-gray-600">June 15-17, 2024</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold">Grand Venue</h3>
            <p className="text-gray-600">Luxury Convention Center</p>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold">100+ Vendors</h3>
            <p className="text-gray-600">Premium Selections</p>
          </div>
        </div>
      </div>
    </section>
  );
}
