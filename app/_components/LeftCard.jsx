'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaChevronDown, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa';
import skills from '../_constants/skills';

export default function LeftSide() {
    const [showContacts, setShowContacts] = useState(false);

    const socialLinks = {
        twitter: 'https://twitter.com/SOJ52993560',
        github: 'https://github.com/Trailblazer007',
        linkedin: 'https://www.linkedin.com/in/fatoye-oluwaseun-918ab11a3/'
    };

    return (
        <div className="lg:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-md border border-gray-600 rounded-xl sticky top-8">
                <div className="max-h-48 p-6 flex items-start gap-4 relative">
                    {/* Profile Image */}
                    <div className="w-32 h-fit rounded-xl bg-gradient-to-br from-blue-400 to-purple-600 overflow-hidden flex-shrink-0 relative">
                        <Image
                            src="/images/my_picture-min.jpg"
                            width={3292}
                            height={4114}
                            alt="Profile picture of Oluwaseun Fatoye"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Name and Profession */}
                    <div className="flex-1 my-auto ml-2">
                        <h2 className="text-2xl font-bold text-white">Oluwaseun Fatoye</h2>
                        <p className="text-gray-300 mt-1 border border-gray-500 px-2 rounded-sm w-fit bg-black/30">
                            Frontend Developer
                        </p>
                        <p className="text-gray-300 mt-1 text-xs shadow-xl shadow-black/50 p-2 rounded-sm break-words max-w-[180px]">
                            Frontend with a Twist: Clean UI, Killer Performance
                        </p>
                    </div>

                    {/* Show Contacts Button */}
                    <button
                        onClick={() => setShowContacts(!showContacts)}
                        className="bg-gradient-to-r from-blue-400 to-black/70 text-white px-2 py-1 flex-shrink-0 absolute top-0 right-0 rounded-bl-xl rounded-tr-xl font-semibold flex items-center gap-2 transition-all duration-300 hover:from-blue-400 hover:to-blue-400 cursor-pointer"
                    >
                        <span className="hidden min-[580px]:inline">Show Bio</span>
                        <FaChevronDown className={`min-[580px]:hidden transition-transform duration-300 ${showContacts ? 'rotate-180' : ''}`} />
                        <FaChevronDown className={`hidden min-[580px]:inline transition-transform duration-300 ${showContacts ? 'rotate-180' : ''}`} />
                    </button>
                </div>

                {/* Contact Info - Animated Section */}
                <div
                    className={`border-t border-gray-600 overflow-hidden transition-all duration-500 ease-in-out ${showContacts ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        } mt-6`}
                >
                    <div className="p-6 space-y-4">
                        {/* Email */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-md shadow-gray-500/25 border border-white/20">
                                <FaEnvelope className="text-white text-lg" />
                            </div>
                            <div>
                                <h3 className="text-sm text-gray-400 font-medium">EMAIL</h3>
                                <p className="text-white mt-1">fatoyeoluwaseun@gmail.com</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-md shadow-gray-500/25 border border-white/20">
                                <FaPhone className="text-white text-lg" />
                            </div>
                            <div>
                                <h3 className="text-sm text-gray-400 font-medium">PHONE</h3>
                                <p className="text-white mt-1">+234 8060167656</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-md shadow-gray-500/25 border border-white/20">
                                <FaMapMarkerAlt className="text-white text-lg" />
                            </div>
                            <div>
                                <h3 className="text-sm text-gray-400 font-medium">LOCATION</h3>
                                <p className="text-white mt-1">Lagos, Nigeria</p>
                            </div>
                        </div>
                    </div>

                    {/* Social media handles */}
                    <div className="border-t border-gray-600 pt-4 pb-6 px-6">
                        <div className="flex gap-6">
                            <a
                                href={socialLinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#1da1f2] transition-colors duration-300 cursor-pointer"
                            >
                                <FaTwitter className="text-xl" />
                            </a>

                            <a
                                href={socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#181717] transition-colors duration-300 cursor-pointer"
                            >
                                <FaGithub className="text-xl" />
                            </a>
                            <a
                                href={socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#0A66C2] transition-colors duration-300 cursor-pointer"
                            >
                                <FaLinkedin className="text-xl" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-600 p-6">
                    <h3 className="text-lg font-semibold mb-4 text-white">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
