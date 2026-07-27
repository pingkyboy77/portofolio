import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-4 py-4 border-t border-neutral-800/60 text-xs text-neutral-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>
          &copy; {new Date().getFullYear()} KRISNA YUDA NUGRAHA. All rights reserved.
        </p>
        <p className="flex items-center gap-1 text-neutral-500">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
