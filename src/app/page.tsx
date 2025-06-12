'use client';

import { EngravedString } from '@/components/ui/interactive-string';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative">
      <EngravedString text="sidekick" />
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-8">
        <Link href="/robin" className="underline text-white">
          robin
        </Link>
        <Link href="/labs" className="underline text-orange-500">
          labs
        </Link>
        <Link href="/community" className="underline text-green-500">
          community
        </Link>
      </div>
    </main>
  );
}
