import { HomeIcon, MusicalNoteIcon, QueueListIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full glass-effect px-6 py-3">
      <div className="flex justify-between items-center max-w-xl mx-auto">
        <Link href="/">
          <a className="flex flex-col items-center">
            <HomeIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
          </a>
        </Link>
        <Link href="/library">
          <a className="flex flex-col items-center">
            <MusicalNoteIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Library</span>
          </a>
        </Link>
        <Link href="/playlists">
          <a className="flex flex-col items-center">
            <QueueListIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Playlists</span>
          </a>
        </Link>
        <Link href="/profile">
          <a className="flex flex-col items-center">
            <UserIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Profile</span>
          </a>
        </Link>
      </div>
    </nav>
  );
}