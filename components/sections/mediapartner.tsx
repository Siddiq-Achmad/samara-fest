import { cn } from "@/lib/utils";
import Marquee from "../core/marquee";
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
const firstRow = sponsors.slice(0, sponsors.length / 2);
const secondRow = sponsors.slice(sponsors.length / 2);

const SponsorCard = ({
  logo,
  name,
}: {
  logo: React.ReactNode;
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-col justify-between gap-2">
        <div className="flex w-full h-12 items-center justify-center">
          {logo}
        </div>
        <h6 className="text-sm font-light text-center">{name}</h6>
      </div>
    </figure>
  );
};

export function MediaPartnerSection() {
  return (
    <section className="py-16">
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((sp) => (
            <SponsorCard key={sp.name} {...sp} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((sp) => (
            <SponsorCard key={sp.name} {...sp} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
}
