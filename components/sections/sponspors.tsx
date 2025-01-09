import Image from "next/image";
import { motion } from "framer-motion";

import {
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  Logo8,
  Logo9,
  Logo10,
} from "../logos";

const sponsors = [
  { logo: Logo1, name: "Sponsor 1" },
  { logo: Logo2, name: "Sponsor 2" },
  { logo: Logo3, name: "Sponsor 3" },
  { logo: Logo4, name: "Sponsor 4" },
  { logo: Logo5, name: "Sponsor 5" },
  { logo: Logo6, name: "Sponsor 6" },
  { logo: Logo7, name: "Sponsor 7" },
  { logo: Logo8, name: "Sponsor 8" },
  { logo: Logo9, name: "Sponsor 9" },
  { logo: Logo10, name: "Sponsor 10" },
];

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "tween" }}
        className="max-w-7xl mx-auto px-6"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          Official Sponsors
        </h2>
        <div className="flex overflow-hidden space-x-12">
          <div className="flex space-x-12 animate-marquee">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div
                key={index}
                className="flex-shrink-0 justify-between items-center"
              >
                {/* <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={200}
                  height={200}
                  className="h-24 object-contain"
                /> */}
                <figure className=" h-20">{sponsor.logo}</figure>
                <p className="text-center mt-2">{sponsor.name}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
