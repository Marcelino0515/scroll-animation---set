import { useState, useEffect } from 'react';
import Image from "next/image";
import MenuItem from "../MenuItem";
import Link from 'next/link';
import dynamic from 'next/dynamic';

function HeaderContent() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [logourl, setLogourl] = useState("/Logo-light.png");
    const [isDropdownOpen, setIsDropdownOpen] = useState(true);
    const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const theme = window.location.search.includes('theme=dark') ? 'dark' : 'light';
        if (theme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.removeAttribute("data-theme");
            setLogourl("/Logo-light.png");
        } else {
            setIsDarkMode(false);
            document.documentElement.setAttribute('data-theme', 'light');
            setLogourl("/Logo-dark.png");
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        const handleMouseMove = (e: MouseEvent) => {
            // Show header when mouse is within 50px of the top of the viewport
            if (e.clientY <= 50) {
                setIsVisible(true);
            } else if (window.scrollY > 100) {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [lastScrollY]);

    const handleThemeSwitch = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        if (newTheme) {
            document.documentElement.removeAttribute("data-theme");
            setLogourl("/Logo-light.png");
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            setLogourl("/Logo-dark.png");
        }
    };

    return (
        <>
            <div className={`flex items-center justify-between fixed top-0 z-10 bg-[var(--color-primary)] px-4 md:px-32 gap-12 w-full transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                <Link href="/" className='flex items-center w-auto h-[100px]'>
                    <Image src={logourl} alt="logo" width={200} height={200} />
                </Link>
                <div className="hidden lg:flex gap-4">
                    <MenuItem href="/home" text="Home"></MenuItem>
                    <MenuItem href="/philosophy" text="Philosophy"></MenuItem>
                    <MenuItem href="/pricing" text="Pricing"></MenuItem>
                </div>
                <div className="lg:hidden relative">
                    <button
                        onClick={() => setIsMenuDropdownOpen(!isMenuDropdownOpen)}
                        className="px-5 py-2 rounded-lg font-bold flex flex-col gap-1"
                    >
                        <div className='h-1 w-8 bg-[#FFA500]'></div>
                        <div className='h-1 w-8 bg-[var(--color-text)]'></div>
                        <div className='h-1 w-8 bg-[var(--color-text)]'></div>
                    </button>
                    {
                        <div className={"flex flex-col gap-2 absolute right-0 p-4 mt-2 rounded-lg shadow-lg bg-white text-[#FFA500] ring-1 ring-black ring-opacity-5 transition-all" + (isMenuDropdownOpen ? " top-[-100px] opacity-0 invisible" : " top-[100%] opacity-1 visible")}>
                            <MenuItem className="text-center px-12" href="/home" text="Home"></MenuItem>
                            <MenuItem className="text-center px-12" href="/philosophy" text="Philosophy"></MenuItem>
                            <MenuItem className="text-center px-12" href="/pricing" text="Pricing"></MenuItem>
                        </div>
                    }
                </div>
                <div className="flex gap-4 items-center">
                    <Link
                        href={isDarkMode ? "/?theme=light" : "/?theme=dark"}
                        onClick={handleThemeSwitch}
                        className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                        style={{ backgroundColor: isDarkMode ? '#4B5563' : '#F97316' }}
                    >
                        <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isDarkMode ? 'translate-x-6' : 'translate-x-1'
                                }`}
                        />
                    </Link>
                    {/* Desktop View */}
                    <div className="hidden lg:flex gap-4">
                        <button className="px-5 py-2 rounded-lg font-bold bg-[var(--primary-color)] text-[var(--text-color)]">Login</button>
                        <button className="px-5 py-2 rounded-lg font-bold bg-[var(--primary-color)] text-[var(--text-color)]">Signup</button>
                    </div>
                    {/* Mobile View */}
                    <div className="lg:hidden relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="px-5 py-2 rounded-lg font-bold bg-[var(--primary-color)] text-[var(--text-color)]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </button>
                        {
                            <div className={"absolute right-0 p-4 gap-4 mt-2 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all" + (isDropdownOpen ? " top-[-100px] opacity-0 invisible" : " top-[100%] opacity-1 visible")}>
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="float-right text-gray-500 hover:text-gray-700 pr-4 pb-1"
                                >
                                    ✕
                                </button>
                                <div className='flex gap-4 mt-4 clear-both'>
                                    <button
                                        className="p-4 border border-[#FFA500] w-full rounded-full text-left px-4 py-2 text-sm text-[#FFA500] transition-all hover:bg-[#FFA500] hover:text-white"
                                        role="menuitem"
                                    >
                                        Signup
                                    </button>
                                    <button
                                        className="p-4 w-full rounded-full text-left px-4 py-2 text-sm text-[#FFA500] transition-all hover:bg-[#FFA500] hover:text-white"
                                        role="menuitem"
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

// Export a client-side only version of the component
export default dynamic(() => Promise.resolve(HeaderContent), {
    ssr: false
});
