"use client";

import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

export const projects = [
  {
    title: "Mastering Guitar Basics",
    description:
      "Learn essential guitar techniques, chords, strumming patterns, and practice routines with our expert guitar instructors.",
    link: "/webinars/guitar-basics",
  },
  {
    title: "Vocal Training & Performance",
    description:
      "Discover professional vocal techniques, breathing exercises, pitch control, and performance tips to strengthen your voice.",
    link: "/webinars/vocal-training",
  },
  {
    title: "Music Production Essentials",
    description:
      "Explore the fundamentals of music production, recording, mixing, and digital audio using modern production tools.",
    link: "/webinars/music-production",
  },
  // {
  //   title: "Piano Masterclass",
  //   description:
  //     "Improve your piano skills with practical techniques covering chords, scales, improvisation, and expressive playing.",
  //   link: "/webinars/piano-masterclass",
  // },
  // {
  //   title: "Understanding Music Theory",
  //   description:
  //     "Build a strong foundation in music theory and learn how scales, chords, rhythm, harmony, and melody work together.",
  //   link: "/webinars/music-theory",
  // },
  // {
  //   title: "Songwriting & Composition",
  //   description:
  //     "Learn how to transform your ideas into complete songs by exploring melody, lyrics, chord progressions, structure, and creativity.",
  //   link: "/webinars/songwriting",
  // },
];

function UpcomingWebinar() {
  return (
    <section className="w-full bg-gray-950 px-6 py-20">
      {/* Header */}
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-base font-semibold uppercase tracking-wide text-teal-500">
          FEATURED WEBINARS
        </h2>

        <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">
          Enhance Your Musical Journey
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
          Join our upcoming live sessions and learn from experienced musicians,
          instructors, and industry professionals.
        </p>
      </div>

      {/* Webinar Cards */}
      <div className="mx-auto mt-10 max-w-5xl px-4 sm:px-6">
        <HoverEffect items={projects} />
      </div>

      {/* View All Button */}
      <div className="mt-12 text-center">
        <Link
          href="/webinars"
          className="
            inline-flex
            items-center
            justify-center
            rounded-xl
            border
            border-white/20
            bg-white/5
            px-6
            py-3
            text-sm
            font-medium
            text-white
            shadow-lg
            shadow-black/20
            backdrop-blur-sm
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-white/10
            hover:shadow-xl
            active:translate-y-0
          "
        >
          View All Webinars
        </Link>
      </div>
    </section>
  );
}

export default UpcomingWebinar;
