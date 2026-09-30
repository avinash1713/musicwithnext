import React from "react";
import Link from "next/link";

function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-28 sm:py-36">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[150px]" />

        <div className="relative mx-auto max-w-6xl text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300 backdrop-blur-md">
            🎧 Music Production Course
          </span>

          <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Create Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Sound
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg">
            Learn how to turn your musical ideas into professional-sounding
            tracks. Master recording, beat making, arrangement, mixing, and the
            fundamentals of modern music production.
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
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/20 via-black to-purple-500/20 p-1">
              <div className="flex aspect-video items-center justify-center rounded-[1.4rem] bg-neutral-950">
                <span className="text-8xl">🎧</span>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                About The Course
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Turn your ideas into complete tracks
              </h2>

              <p className="mt-5 leading-7 text-neutral-400">
                Learn the complete music production workflow, from creating your
                first beat to arranging, recording, mixing, and exporting a
                finished track. This course is designed for beginners and
                aspiring producers who want to understand how modern music is
                created.
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  ["30+", "Lessons"],
                  ["10+", "Projects"],
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

      {/* What You'll Learn */}
      <section className="bg-neutral-950 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Course Curriculum
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Learn Music Production
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
              Develop the technical and creative skills needed to produce your
              own music.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🎹",
                title: "Beat Making",
                description:
                  "Learn how to create drum patterns, beats, grooves, and musical foundations for your tracks.",
              },
              {
                icon: "🎙️",
                title: "Recording",
                description:
                  "Understand microphones, recording techniques, audio levels, and how to capture clean recordings.",
              },
              {
                icon: "🎼",
                title: "Arrangement",
                description:
                  "Learn how to structure your songs using intros, verses, choruses, bridges, and transitions.",
              },
              {
                icon: "🎛️",
                title: "Mixing",
                description:
                  "Understand EQ, compression, reverb, delay, panning, and other essential mixing techniques.",
              },
              {
                icon: "🔊",
                title: "Sound Design",
                description:
                  "Explore synthesizers, samples, effects, and sound manipulation to create unique sounds.",
              },
              {
                icon: "💿",
                title: "Final Production",
                description:
                  "Learn how to prepare, export, and polish your finished track for sharing and release.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-black p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40"
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

      {/* Software Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Production Tools
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Learn the tools behind the music
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
              Build practical production skills that can be applied across
              modern digital audio workstations.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              "Ableton Live",
              "FL Studio",
              "Logic Pro",
              "Pro Tools",
              "Audio Plugins",
              "MIDI",
            ].map((tool) => (
              <div
                key={tool}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-medium text-neutral-300 transition hover:border-cyan-500/40 hover:bg-white/[0.06]"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 sm:p-12">
            <div className="grid gap-8 md:grid-cols-[180px_1fr] md:items-center">
              <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 text-6xl">
                🎧
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Your Instructor
                </p>

                <h2 className="mt-2 text-3xl font-bold">Daniel Carter</h2>

                <p className="mt-1 text-neutral-500">
                  Music Producer & Audio Engineer
                </p>

                <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
                  Learn from an experienced producer and audio engineer who
                  focuses on practical production techniques, creative
                  workflows, and helping students develop their own sound.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Includes */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            What&apos;s Included
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "30+ structured production lessons",
              "Hands-on music production projects",
              "Beat-making exercises",
              "Recording and mixing tutorials",
              "Sound design fundamentals",
              "Lifetime access to course material",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
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
            Ready to create your own music?
          </h2>

          <p className="mt-5 text-neutral-400">
            Start producing, experiment with sound, and turn your musical ideas
            into finished tracks.
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
