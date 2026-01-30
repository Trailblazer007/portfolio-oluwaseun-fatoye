'use client';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';

import { useState, useRef, useEffect } from 'react';

export default function RightSide() {
    const [activeTab, setActiveTab] = useState('about');
    const [isAnimating, setIsAnimating] = useState(false);
    const contentRef = useRef(null);

    const renderTabContent = () => {
        switch (activeTab) {
            case 'about':
                return <About />;
            case 'resume':
                return <Resume />;
            case 'projects':
                return <Projects />;
            case 'contact':
                return <Contact />;
            default:
                return <About />;
        }
    };

    const handleTabChange = (tab) => {
        if (tab === activeTab || isAnimating) return;

        setIsAnimating(true);
        setActiveTab(tab);

        // Scroll to content area on mobile
        if (window.innerWidth < 1024) { // lg breakpoint
            setTimeout(() => {
                contentRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }

        // Reset animation state
        setTimeout(() => setIsAnimating(false), 500);
    };

    return (
        <>
            {/* Main Content */}
            <div className="lg:col-span-2 mb-10">
                {/* Desktop Navigation - Hidden on mobile */}
                <div className="hidden lg:block bg-gray-800/50 backdrop-blur-md border border-gray-600 rounded-xl p-6 sticky top-8">
                    <ul className='w-full flex justify-between font-oxanium text-sm'>
                        <li>
                            <button
                                onClick={() => handleTabChange('about')}
                                className={`hover:text-white transition-colors duration-300 hover:cursor-pointer ${activeTab === 'about' ? 'text-white font-bold' : 'text-gray-400'
                                    }`}
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleTabChange('resume')}
                                className={`hover:text-white transition-colors duration-300 hover:cursor-pointer ${activeTab === 'resume' ? 'text-white font-bold' : 'text-gray-400'
                                    }`}
                            >
                                Resume
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleTabChange('projects')}
                                className={`hover:text-white transition-colors duration-300 hover:cursor-pointer ${activeTab === 'projects' ? 'text-white font-bold' : 'text-gray-400'
                                    }`}
                            >
                                Projects
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleTabChange('contact')}
                                className={`hover:text-white transition-colors duration-300 hover:cursor-pointer ${activeTab === 'contact' ? 'text-white font-bold' : 'text-gray-400'
                                    }`}
                            >
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Tab Content with Animation */}
                <div
                    ref={contentRef}
                    className={`bg-gray-800/50 backdrop-blur-md border border-gray-600 rounded-xl p-6 min-h-[400px] lg:mt-6 transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
                        }`}
                >
                    {renderTabContent()}
                </div>
            </div>

            {/* Mobile Navigation Footer */}
            <footer className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-tl-xl rounded-tr-xl py-3 px-6 z-50">
                <ul className='w-full flex justify-between font-oxanium text-sm'>
                    <li>
                        <button
                            onClick={() => handleTabChange('about')}
                            className={`hover:text-white transition-colors duration-300 ${activeTab === 'about' ? 'text-white font-bold' : 'text-gray-400'
                                }`}
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleTabChange('resume')}
                            className={`hover:text-white transition-colors duration-300 ${activeTab === 'resume' ? 'text-white font-bold' : 'text-gray-400'
                                }`}
                        >
                            Resume
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleTabChange('projects')}
                            className={`hover:text-white transition-colors duration-300 ${activeTab === 'projects' ? 'text-white font-bold' : 'text-gray-400'
                                }`}
                        >
                            Projects
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleTabChange('contact')}
                            className={`hover:text-white transition-colors duration-300 ${activeTab === 'contact' ? 'text-white font-bold' : 'text-gray-400'
                                }`}
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </footer>
        </>
    );
}