"use client";

import Link from "next/link";
import { Book } from "./book";

type Chapter = {
  id: number;
  title: string;
  subtitle: string;
  href: string;
  color: string;
};

const chapters: Chapter[] = [
  {
    id: 1,
    title: "Book One",
    subtitle: "Mindset",
    href: "/culture/mindset",
    color: "#CEE5F2",
  },
  {
    id: 2,
    title: "Book Two",
    subtitle: "Speed",
    href: "/culture/speed",
    color: "#ACCBE1",
  },
  {
    id: 3,
    title: "Book Three",
    subtitle: "Tools",
    href: "/culture/tools",
    color: "#7C98B3",
  },
  {
    id: 4,
    title: "Book Four",
    subtitle: "Launch",
    href: "/culture/launch",
    color: "#637081",
  },
  {
    id: 5,
    title: "Book Five",
    subtitle: "Learn",
    href: "/culture/learn",
    color: "#536B78",
  },
];

export const Culture = () => {
  return (
    <div className="container mx-auto px-6 pb-10 max-w-6xl relative">
      <header className="mb-12 flex justify-center">
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center gap-2 mb-2">
            <span className="text-4xl text-white tracking-tight font-gambetta">
              Culture Shift
            </span>
          </div>
          <span className="text-xs text-gray-400 mb-8 font-mono">
            bringing the bay to kl
          </span>
        </div>
      </header>

      {/* Introduction */}
      <section className="mb-12 max-w-3xl mx-auto text-center">
        <p className="text-sm text-gray-300 font-sans">
          They have the same 24 hours. The same keyboards. The same Stack Overflow. 
          The only difference between a developer in KL and one in SF? The belief that they can.
        </p>
      </section>

      {/* Chapters Grid */}
      <section className="mb-12 flex items-center justify-center">
        {chapters.map((chapter) => (
          <Link
            key={chapter.id}
            href={chapter.href}
            className="group relative mx-8"
          >
            <Book depth={10} color={chapter.color}>
              <div className="p-3 mb-2 grid gap-3">
                <h1 className="font-semibold text-left">
                  {chapter.subtitle}
                </h1>
              </div>
            </Book>
          </Link>
        ))}
      </section>



    </div>
  );
};