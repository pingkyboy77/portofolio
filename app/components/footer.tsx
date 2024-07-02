import React from 'react';

function ArrowIcon() {
return (
<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor" />
</svg>
);
}

const Footer = () => {
return (
<footer className="flex justify-end mx-3 py-4">
    <div className="flex flex-col items-end w-full">
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
            © {new Date().getFullYear()} KRISNA YUDA NURGAHA
        </p>
        {/* <div className="mt-2">
            <ArrowIcon />
        </div> */}
    </div>
</footer>
);
};

export default Footer;
