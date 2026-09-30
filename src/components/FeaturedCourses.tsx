"use client";
import React from "react";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured,
  );
  return (
    <div className="py-12 bg-gray-950">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>

      {/* Courses */}
      <div className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient
                className="
                  flex flex-col
                  w-full
                  rounded-[22px]
                  bg-white
                  dark:bg-zinc-900
                  overflow-hidden
                "
              >
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  {/* Course title */}
                  <h3 className="text-xl font-semibold text-black dark:text-neutral-100">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>

                  {/* Learn More */}
                  <Link
                    href={`/courses/${course.slug}`}
                    className="
                      mt-6
                      inline-flex items-center gap-2
                      rounded-lg
                      border border-black/10 dark:border-white/10
                      bg-black dark:bg-white
                      px-5 py-2.5
                      text-sm font-medium
                      text-white dark:text-black
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:shadow-lg
                      hover:shadow-black/20
                      dark:hover:shadow-white/10
                    "
                  >
                    Learn More
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link
          href="/courses"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 bg-white/5  text-sm font-medium text-white  backdrop-blur-sm  shadow-lg shadow-black/20  transition-all duration-300    hover:shadow-xl   hover:-translate-y-0.5  active:translate-y-0 "
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
