"use client";

import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
  {
    id: 1,
    name: "Elena Briggs",
    designation: "Vocal Coach",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Marcus Reid",
    designation: "Guitar Instructor",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Julia Zhang",
    designation: "Piano Teacher",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Andre Gomez",
    designation: "Drumming Expert",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
  },
];

function Instructors() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24">
      {/* Content */}
      <div className="mx-auto flex min-h-[32rem] w-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Meet Our Instructors
        </h2>

        {/* Description */}
        <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base md:text-lg">
          Discover the talented professionals who will guide your musical
          journey, help you develop your skills, and inspire you to reach your
          full potential.
        </p>

        {/* Instructor Avatars */}
        <div className="mt-12 flex w-full items-center justify-center">
          <AnimatedTooltip items={instructors} />
        </div>
      </div>
    </section>
  );
}

export default Instructors;
