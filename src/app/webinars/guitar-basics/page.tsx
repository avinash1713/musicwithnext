import React from "react";
import Link from "next/link";

function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-32">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[140px]" />

        <div className="relative mx-auto max-w-6xl text-center">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300 backdrop-blur-sm">
            🎸 Guitar Course
          </span>

          <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Master the{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Guitar
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg">
            Learn guitar from the ground up with structured lessons designed for
            beginners and aspiring musicians. Build your technique, confidence,
            and musical creativity step by step.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#course"
              className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-neutral-200"
            >
              Start Learning
            </Link>

            <Link
              href="/courses"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
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
            {/* Course Image */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/20 via-black to-orange-500/20 p-1">
              <div className="flex aspect-video items-center justify-center rounded-[1.4rem] bg-neutral-950">
                <span className="text-8xl">🎸</span>
              </div>
            </div>

            {/* Course Details */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
                About The Course
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Everything you need to become a better guitarist
              </h2>

              <p className="mt-5 leading-7 text-neutral-400">
                Whether you're picking up a guitar for the first time or looking
                to improve your existing skills, this course will help you
                develop a strong foundation in guitar playing.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  ["20+", "Lessons"],
                  ["10+", "Songs"],
                  ["Beginner", "Level"],
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

      {/* What You Will Learn */}
      <section className="bg-neutral-950 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
              What You&apos;ll Learn
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Build your guitar skills
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
              Follow a structured learning path covering the essential skills
              every guitarist needs.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Guitar Basics",
                description:
                  "Learn how to hold the guitar, tune the strings, and understand the instrument.",
                icon: "🎸",
              },
              {
                title: "Chords",
                description:
                  "Master essential chords and learn how to switch between them smoothly.",
                icon: "🎵",
              },
              {
                title: "Strumming",
                description:
                  "Develop rhythm and learn popular strumming patterns used in real songs.",
                icon: "🥁",
              },
              {
                title: "Scales",
                description:
                  "Understand basic scales and use them to improve your playing.",
                icon: "🎼",
              },
              {
                title: "Songs",
                description:
                  "Put your skills into practice by learning songs from different styles.",
                icon: "🎤",
              },
              {
                title: "Improvisation",
                description:
                  "Learn how to experiment with melodies and develop your own sound.",
                icon: "✨",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-black p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-500/40"
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
              <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-6xl">
                🎸
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
                  Your Instructor
                </p>

                <h2 className="mt-2 text-3xl font-bold">Marcus Reid</h2>

                <p className="mt-1 text-neutral-500">
                  Professional Guitar Instructor
                </p>

                <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
                  Learn from an experienced guitarist who focuses on practical
                  techniques, musical understanding, and helping students
                  develop their own unique style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-5xl">
            Ready to start your guitar journey?
          </h2>

          <p className="mt-5 text-neutral-400">
            Pick up your guitar, start learning, and turn your musical ideas
            into reality.
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
