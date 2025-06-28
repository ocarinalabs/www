'use client';

import { EngravedString } from '@/components/ui/interactive-string';
import { Logo } from '@/components/ui/logo';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative">
      <EngravedString text="sidekick" />
      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center space-y-6">
        <header className="flex flex-col items-center space-y-2">
          <div className="flex items-center">
            <Logo className="h-10 w-10" />
            <h1 className="ml-3 text-5xl font-heming font-light text-gray-300">
              sidekick
            </h1>
          </div>
          <h2 className="text-xl font-heming font-light text-gray-400">
            you need a sidekick now
          </h2>
        </header>
        <nav className="flex justify-center space-x-8">
          <Link href="/robin" className="font-heming text-white underline">
            robin
          </Link>
          <Link href="/labs" className="font-heming text-orange-500 underline">
            labs
          </Link>
          <Link
            href="/community"
            className="font-heming text-green-500 underline"
          >
            community
          </Link>
        </nav>
      </div>
    </main>
  );
}
