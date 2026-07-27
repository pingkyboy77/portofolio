'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = {
  '/': {
    name: 'HOME',
  },
  '/about': {
    name: 'ABOUT',
  },
  '/blog': {
    name: 'PROJECTS',
  },
}

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 pt-6 pb-4 bg-[#0d1117]/90 backdrop-blur-md transition-colors">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-extrabold text-xl tracking-wider text-white">
          K<span className="text-blue-500">YN</span>.
        </Link>
        
        <nav className="flex items-center gap-6 sm:gap-8">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = pathname === path
            return (
              <Link
                key={path}
                href={path}
                className={`relative py-1 text-xs font-semibold tracking-widest transition-colors duration-200 ${
                  isActive
                    ? 'text-blue-500 font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
                )}
              </Link>
            )
          })}
          
          <div className="hidden sm:block h-3 w-[1px] bg-neutral-800" />

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/pingkyboy77"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.112.82-.262.82-.583 0-.29-.01-1.06-.015-2.08-3.338.727-4.043-1.61-4.043-1.61-.546-1.387-1.334-1.757-1.334-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.24 1.84 1.24 1.07 1.835 2.805 1.305 3.49.997.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.125-.305-.535-1.53.115-3.18 0 0 1.005-.322 3.3 1.23.955-.265 1.98-.398 3-.403 1.02.005 2.045.138 3 .403 2.28-1.552 3.285-1.23 3.285-1.23.655 1.65.245 2.875.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.815 1.1.815 2.22 0 1.605-.015 2.895-.015 3.29 0 .325.215.7.825.58C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/krisna-yuda-nugraha-84a954255/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.95 0-1.5-.65-1.5-1.45 0-.8.55-1.45 1.45-1.45.95 0 1.5.65 1.5 1.45 0 .8-.55 1.45-1.45 1.45zm13.5 11.3h-3v-5.5c0-1.35-.45-2.25-1.6-2.25-.875 0-1.4.625-1.625 1.25-.1.25-.125.625-.125 1v5.5h-3v-10h3v1.375c.45-.675 1.15-1.375 2.75-1.375 2 0 3.5 1.3 3.5 4.1v5.9z" />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
