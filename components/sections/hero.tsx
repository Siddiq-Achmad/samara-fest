import React from "react";
import { Sparkles } from "@/components/sparkles";
import { SponsorsSection } from "./sponspors";

export function HeroSection() {
  return (
    <div className="relative flex h-screen items-center justify-center">
      <div className="min-h-screen w-screen overflow-hidden ">
        <div className="relative mt-40  h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#eb6344,transparent_90%)] before:opacity-100  after:absolute after:border-2 after:-left-1/2 after:top-1/2 after:aspect-[1/1.8] after:w-[200%] after:rounded-[50%] after:border-b after:border-[#7876c566] after:bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px] "></div>
          <Sparkles
            density={400}
            size={1.4}
            direction="top"
            className="absolute inset-x-0 top-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          />
        </div>
        <div className="mx-auto -mt-60  w-screen max-w-2xl relative z-10">
          <div className=" backdrop-blur-lg border border-gray-800 p-4  w-28 h-28 mx-auto grid place-content-center rounded-full">
            <div className=" w-12 h-12 translate-x-1 translate-y-1 mx-auto bg-zinc-700 rounded-lg before:absolute relative before:w-full before:h-full before:bg-zinc-800/50 before:rounded-lg before:-top-2 before:-left-2"></div>
          </div>
        </div>
        <article className=" pt-6 w-2/3 mx-auto block text-center z-10 relative ">
          <h1 className="text-center text-7xl  font-extrabold  py-3">
            Samara FEST
          </h1>
          <p className="text-xl font-light">
            The Most Prestigious Wedding Exhibition in the Region
          </p>
        </article>
        <SponsorsSection />
      </div>
    </div>
  );
}
