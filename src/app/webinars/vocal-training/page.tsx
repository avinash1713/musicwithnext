import React from "react";
import Link from "next/link";

function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-28 sm:py-36">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-pink-600/20 blur-[150px]" />

        <div className="relative mx-auto max-w-6xl text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300 backdrop-blur-md">
            🎤 Vocal Training Course
          </span>

          <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Find Your{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Voice
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg">
            Develop your voice, improve your vocal technique, and build the
            confidence to perform. Learn professional singing techniques with
            structured lessons designed for every level.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#course"
              className="rounded-xl bg-white px-7 py-3 font-semibold text-black transition hover:bg-neutral-200"
            >
              Start Learning
            </Link>

            <Link
              href="/courses"
              className="rounded-xl border border-white/20 bg-white/5 px-7 py-3 font-medium text-white transition hover:bg-white/10"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section id="course" className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            {/* Visual */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-pink-500/20 via-black to-purple-500/20 p-1">
              <div className="flex aspect-video items-center justify-center rounded-[1.4rem] bg-neutral-950">
                <span className="text-8xl">🎤</span>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
                About The Course
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Build a stronger, more confident voice
              </h2>

              <p className="mt-5 leading-7 text-neutral-400">
                This vocal training course focuses on the foundations of good
                singing, from breathing and pitch control to vocal expression
                and performance. Whether you're a complete beginner or an
                experienced singer, you'll learn techniques to help you sing
                with greater control and confidence.
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  ["25+", "Lessons"],
                  ["15+", "Exercises"],
                  ["All", "Skill Levels"],
                  ["Lifetime", "Access"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    <p className="text-xl font-bold text-white">{value}</p>
                    <p className="mt-1 text-sm text-neutral-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="bg-neutral-950 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
              Course Curriculum
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              What You&apos;ll Learn
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
              Develop the essential skills you need to become a stronger and
              more expressive vocalist.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🫁",
                title: "Breathing Techniques",
                description:
                  "Learn proper breathing techniques and develop better breath control while singing.",
              },
              {
                icon: "🎵",
                title: "Pitch Control",
                description:
                  "Improve your pitch accuracy and learn how to consistently hit the right notes.",
              },
              {
                icon: "🎤",
                title: "Vocal Technique",
                description:
                  "Develop healthy vocal habits and learn techniques for better tone and control.",
              },
              {
                icon: "🔥",
                title: "Vocal Warmups",
                description:
                  "Use effective warm-up exercises to prepare your voice before singing.",
              },
              {
                icon: "🎶",
                title: "Range Development",
                description:
                  "Gradually expand your vocal range while maintaining control and vocal health.",
              },
              {
                icon: "🎭",
                title: "Performance Skills",
                description:
                  "Build confidence and learn how to express emotion while performing.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-black p-6 transition duration-300 hover:-translate-y-1 hover:border-pink-500/40"
              >
                <div className="text-3xl">{item.icon}</div>

                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 sm:p-12">
            <div className="grid gap-8 md:grid-cols-[180px_1fr] md:items-center">
              <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-6xl">
                🎤
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
                  Your Instructor
                </p>

                <h2 className="mt-2 text-3xl font-bold">Elena Briggs</h2>

                <p className="mt-1 text-neutral-500">
                  Professional Vocal Coach
                </p>

                <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
                  Learn from an experienced vocal coach who focuses on
                  developing healthy vocal technique, confidence, musical
                  expression, and performance skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Includes */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            What&apos;s Included
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "25+ structured vocal lessons",
              "Breathing and warm-up exercises",
              "Pitch and vocal range training",
              "Performance techniques",
              "Practice exercises",
              "Lifetime access to course material",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-500/20 text-pink-400">
                  ✓
                </span>

                <span className="text-sm text-neutral-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-5xl">
            Your voice has a story.
          </h2>

          <p className="mt-5 text-neutral-400">
            Start developing your voice and discover what you are capable of.
          </p>

          <Link
            href="/courses"
            className="mt-8 inline-flex rounded-xl bg-white px-7 py-3 font-semibold text-black transition hover:bg-neutral-200"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Page;
