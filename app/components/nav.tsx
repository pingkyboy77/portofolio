import Link from 'next/link'

const navItems = {
'/': {
name: 'Home',
},
'/about': {
name: 'About',
},
'/blog': {
name: 'Project Experience',
},
// 'https://vercel.com/templates/next.js/portfolio-starter-kit': {
// name: 'deploy',
// },
}
export function Navbar() {
return (
<aside className="-ml-[8px] mb-16 tracking-tight w-full">
    <div className="lg:sticky lg:top-20">
        <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative w-full"
            id="nav">
            <div className="flex flex-row space-x-0 pr-10 justify-end w-full items-center">
                {Object.entries(navItems).map(([path, { name }]) => (
                <Link key={path} href={path}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1">
                {name}
                </Link>
                ))}
                <Link href="https://github.com/pingkyboy77" target="_blank"
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path
                        d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.112.82-.262.82-.583 0-.29-.01-1.06-.015-2.08-3.338.727-4.043-1.61-4.043-1.61-.546-1.387-1.334-1.757-1.334-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.24 1.84 1.24 1.07 1.835 2.805 1.305 3.49.997.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.125-.305-.535-1.53.115-3.18 0 0 1.005-.322 3.3 1.23.955-.265 1.98-.398 3-.403 1.02.005 2.045.138 3 .403 2.28-1.552 3.285-1.23 3.285-1.23.655 1.65.245 2.875.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.815 1.1.815 2.22 0 1.605-.015 2.895-.015 3.29 0 .325.215.7.825.58C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                </Link>
                <Link href="https://www.linkedin.com/in/krisna-yuda-nugraha-84a954255/" target="_blank"
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path
                        d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.95 0-1.5-.65-1.5-1.45 0-.8.55-1.45 1.45-1.45.95 0 1.5.65 1.5 1.45 0 .8-.55 1.45-1.45 1.45zm13.5 11.3h-3v-5.5c0-1.35-.45-2.25-1.6-2.25-.875 0-1.4.625-1.625 1.25-.1.25-.125.625-.125 1v5.5h-3v-10h3v1.375c.45-.675 1.15-1.375 2.75-1.375 2 0 3.5 1.3 3.5 4.1v5.9z" />
                </svg>
                </Link>
            </div>
        </nav>
    </div>
</aside>
);
}
