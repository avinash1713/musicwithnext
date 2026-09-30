"use client";
import { cn } from "@/lib/utils";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "The lessons completely changed the way I understand music. I went from struggling with the basics to confidently playing songs I love.",
    name: "Aarav Sharma",
    title: "Guitar Student",
  },
  {
    quote:
      "The instructors are incredibly patient and encouraging. Every lesson feels engaging, and I can clearly see my progress week after week.",
    name: "Ananya Verma",
    title: "Piano Student",
  },
  {
    quote:
      "I always wanted to learn how to sing but never knew where to start. The personalized lessons helped me build confidence and improve my voice.",
    name: "Rohan Mehta",
    title: "Vocal Student",
  },
  {
    quote:
      "What I love most is that the lessons are tailored to my goals. I'm not just learning songs; I'm actually understanding music theory and technique.",
    name: "Priya Kapoor",
    title: "Music Theory Student",
  },
  {
    quote:
      "Learning music here has been an amazing journey. The supportive environment makes practicing enjoyable, and every lesson inspires me to keep improving.",
    name: "Kabir Singh",
    title: "Drums Student",
  },
];

function TestimonialCard() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 dark:bg-black ">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />

      <div className="relative z-10">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-7xl px-6 text-center">
          <h2 className=" text-3xl font-bold tracking-tight text-neutral-900 md:text-5xl dark:text-white">
            Hear Our Harmony
          </h2>

          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            Voices of Success from Our Music Community
          </p>
        </div>

        {/* Testimonials */}
        <div
          className="
          relative
          flex
          w-full
          flex-col
          items-center
          justify-center
          overflow-hidden
          bg-white
          antialiased
          dark:bg-black
          dark:bg-grid-white/[0.05]
        "
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}

export default TestimonialCard;
