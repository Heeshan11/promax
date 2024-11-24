'use client'
import { useState, useEffect } from 'react';
import Marquee from './MarqueeText';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '@app/context/MainProvider';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navList = [
        { id: 1, title: 'home', to: '/', queryTitle: "" },
        { id: 3, title: 'products', to: '/products', queryTitle: 'All Products' },
        { id: 2, title: 'solutions', to: '/solutions', queryTitle: 'Solutions' },
        // { id: 4, title: 'projects', to: '/projects', queryTitle: 'Projects' },
        // { id: 5, title: 'Videos', to: '/videos', queryTitle: 'Videos' },
        { id: 6, title: 'about us', to: '/about', queryTitle: '' },
        { id: 7, title: 'Contact', to: '/contact', queryTitle: '' },
    ];
    const scrollToTop = useScrollToTop();

    

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
const handleClick = ()=>{
    setIsOpen(false)
    scrollToTop()
}
    return (
        <nav className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white py-1 shadow-md' : 'bg-[#00000042] pt-2'} ${isScrolled ? 'text-gray-900' : 'text-white'}`}>

            <div className="w-full flex justify-between items-center px-3 md:px-8">
                <section className="flex space-x-4">
                    <Link to="/" className="hover:underline">
                        <img
                            src={"/logo.png"}
                            width={isScrolled ? 80 : 110}
                            height={isScrolled ? 80 : 110}
                            alt="logo"
                            className="transition-all duration-300"
                        />
                    </Link>
                </section>
                <button
                    className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                    </svg>
                </button>

                <section
                    className={`md:flex md:flex-row md:space-x-4 absolute md:static left-0 top-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ${isOpen ? 'flex' : 'hidden'}`}
                >
                    <button
                        className={`${isOpen && 'text-black'} absolute top-6 right-4 md:hidden `}
                        onClick={() => setIsOpen(false)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>

                    </button>
                    <div className="flex flex-col md:flex-row w-full h-full items-center justify-center md:space-y-0 space-y-4 md:space-x-4 md:py-0 py-8">
                        {navList.map((navItem) => (
                            <div className="group" key={navItem.id}>
                                <Link
                                
                                    to={{
                                        pathname: `${navItem.to}`,
                                    }}
                                    state={navItem.queryTitle.length > 0 ? { title: navItem?.queryTitle } : {}
                                    }
                                    onClick={() => handleClick()}
                                    className={`relative uppercase 
                                text-sm transition-all duration-300 ${isScrolled || isOpen ? 'text-gray-900' : 'text-white'} cursor-pointer ${isOpen && 'text-gray-900'} hover:text-blue-800 `}
                                >
                                    {navItem.title}
                                    <span className="absolute left-0 bottom-0 h-[2px] bg-blue-800 transition-all duration-300 w-0 group-hover:w-full"></span>
                                </Link>
                            </div>

                        ))}
                    </div>
                </section>
            </div>
            <Marquee isScrolled={isScrolled} />

        </nav>
    );
}
