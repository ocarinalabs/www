'use client';

import { EngravedString } from '@/components/ui/interactive-string';
import { Logo } from '@/components/ui/logo';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative">
      <EngravedString text="sidekick" />
      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-0">
          <Logo className="h-10 w-10" />
          <h1 className="text-5xl text-gray-300 font-heming font-light">
            sidekick
          </h1>
        </div>
        <div className="flex justify-center space-x-8">
          <Link href="/robin" className="underline text-white font-heming">
            robin
          </Link>
          <Link href="/labs" className="underline text-orange-500 font-heming">
            labs
          </Link>
          <Link href="/community" className="underline text-green-500 font-heming">
            community
          </Link>
        </div>
      </div>
    </main>
  );
}
