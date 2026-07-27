import Link from 'next/link'

export default function Page() {
  return (
    <section className="flex flex-col justify-center py-2 lg:py-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* Text Column - Order 2 on mobile, 1 on Desktop */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-3.5 sm:space-y-4 order-2 lg:order-1">
          
          {/* Subtitle / Hello */}
          <div className="flex items-center gap-3">
            <span className="w-6 sm:w-8 h-[2px] bg-blue-500"></span>
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
              HELLO
            </span>
            <span className="w-6 sm:w-8 h-[2px] bg-blue-500 lg:hidden"></span>
          </div>

          {/* Big Editorial Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] sm:leading-[1.1]">
            I'm <span className="text-blue-500">Krisna</span> Yuda Nugraha
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm text-neutral-400 max-w-lg leading-relaxed font-normal px-2 sm:px-0">
            Full-Stack Developer based in Indonesia. Specializing in building high-performance web applications, reliable management systems, and intuitive digital experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4 pt-1 w-full">
            <Link
              href="/blog"
              className="px-6 sm:px-7 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 active:scale-[0.98]"
            >
              PROJECTS
            </Link>
            <Link
              href="/about"
              className="px-6 sm:px-7 py-2.5 sm:py-3 border border-neutral-700 hover:border-blue-500 text-neutral-300 hover:text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-all duration-200"
            >
              ABOUT ME
            </Link>
          </div>
        </div>

        {/* Image Column - Order 1 on mobile (so photo is at top), 2 on Desktop */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative order-1 lg:order-2">
          <div className="relative w-44 sm:w-60 lg:w-[260px]">
            
            {/* Soft Blue Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 sm:w-60 h-44 sm:h-60 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-[#161b22] shadow-2xl">
              <img
                src="/PAS FOTO.png"
                alt="Krisna Yuda Nugraha"
                className="w-full h-auto max-h-[240px] sm:max-h-[320px] object-cover filter contrast-[1.05] brightness-[0.98] transition-transform duration-700 hover:scale-105"
              />
            </div>
            
          </div>
        </div>

      </div>
    </section>
  )
}
