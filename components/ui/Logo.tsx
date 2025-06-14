import Image from 'next/image';
import Link from 'next/link';
import kvslogo from '@/public/images/kvs_logo.png';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'light' | 'dark';
}

export default function Logo({ variant = 'dark' }: LogoProps) {
  return (
    <Link href="/" className="inline-block">
      <div className="relative w-32 h-24 drop-shadow-lg">
        <Image
          src="./images/kvs_logo.png"
          alt="KVS Techflow Logo"
          fill
          style={{ objectFit: 'contain' }}
          className={cn("w-full h-full", variant === 'light' ? "brightness-0 invert" : "")}
          priority
        />
      </div>
    </Link>
  );
}