'use client'

import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  size?: number
  showText?: boolean
}

export default function Logo({
  size = 75,
  showText = true,
}: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2 select-none">
      
      {/* LOGO */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: 50 }}
      >
        <Image
          src="/logo2.png" 
          alt="Aethon Grid Logo"
          width={size}
          height={100}
          priority
          className="object-contain"
        />
      </div>

      {/* BRAND TEXT */}
      {showText && (
        <span className="text-[1.15rem] font-bold tracking-wide text-accent-gold">
          THE{" "}
          <span className="tracking-wider">
            AETHON
          </span>{" "}
          GROUP
        </span>
      )}
    </Link>
  )
}
