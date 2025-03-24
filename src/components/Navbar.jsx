import Link from 'next/link';
import SwitchButton from './SwitchButton';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
export default function Navbar() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <ul className='flex gap-4'>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Link href={'/sign-in'}>Sign in</Link>
        </SignedOut>
        <li className='hidden sm:block'>
          <Link href={'/'}>Home</Link>
        </li>
        <li className='hidden sm:block'>
          <Link href={'/favorites'}>Favorites</Link>
        </li>
        <li className='hidden sm:block'>
          <Link href={'/about'}>About</Link>
        </li>
      </ul>
      <div className='flex items-center gap-4'>
        <SwitchButton />
        <Link href={'/'} className='flex gap-1 items-center'>
          <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>
            WATCH
          </span>
          <span className='text-xl hidden sm:inline'>Hub</span>
        </Link>
      </div>
    </div>
  );
}