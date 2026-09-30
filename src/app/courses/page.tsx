"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

import courseData from "@/data/music_courses.json";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function Page() {
  return (
    <main className="min-h-screen bg-black px-4 py-12 pt-32 sm:px-6">
      {/* Header */}
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Explore Our Courses
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          All Courses
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg">
          Learn from experienced instructors and develop your skills through
          carefully designed music courses for every level.
        </p>

        <div className="mt-5 text-sm text-neutral-500">
          {courseData.courses.length} courses available
        </div>
      </div>

      {/* Course Cards */}
      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap justify-center gap-4">
        {courseData.courses.map((course: Course) => (
          <CardContainer key={course.id} className="inter-var w-full sm:w-auto">
            <CardBody
              className="
                group/card
                relative
                h-auto
                w-full
                rounded-2xl
                border
                border-white/10
                bg-neutral-950
                p-6
                transition
                duration-300
                hover:border-white/20
                sm:w-[30rem]
              "
            >
              {/* Course Title */}
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
              >
                {course.title}
              </CardItem>

              {/* Description */}
              <CardItem
                as="p"
                translateZ="60"
                className="mt-2 max-w-sm text-sm leading-6 text-neutral-400"
              >
                {course.description}
              </CardItem>

              {/* Course Image */}
              <CardItem translateZ="100" className="mt-5 w-full">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src={course.image}
                    height={1000}
                    width={1000}
                    className="
                      h-60
                      w-full
                      object-cover
                      transition
                      duration-500
                      group-hover/card:scale-105
                      group-hover/card:shadow-xl
                    "
                    alt={course.title}
                  />
                </div>
              </CardItem>

              {/* Course Info */}
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-500">Instructor</p>

                  <p className="mt-1 text-sm font-medium text-neutral-300">
                    {course.instructor}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-neutral-500">Price</p>

                  <p className="mt-1 text-lg font-bold text-white">
                    ₹{course.price}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex items-center justify-between">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={`/courses/${course.slug}`}
                  className="
                    rounded-xl
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-neutral-300
                    transition
                    hover:text-white
                  "
                >
                  View Course →
                </CardItem>

                <CardItem
                  translateZ={20}
                  as={Link}
                  href={`/courses/${course.slug}/signup`}
                  className="
                    rounded-xl
                    bg-white
                    px-5
                    py-2.5
                    text-xs
                    font-bold
                    text-black
                    transition
                    hover:bg-neutral-200
                  "
                >
                  Enroll Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </main>
  );
}

export default Page;
