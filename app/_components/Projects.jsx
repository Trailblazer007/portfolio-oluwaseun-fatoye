import projects from '../_constants/projectsList'
import Image from 'next/image';
import {
    SiTailwindcss,
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiVuedotjs,
    SiNuxtdotjs,
    SiVite,
    SiShadcnui
} from 'react-icons/si';

// Icon mapping with their respective colors
const stackIcons = {
    'Tailwind': { icon: SiTailwindcss, color: 'text-[#06B6D4]', shadow: 'shadow-[#06B6D4]/20' },
    'React.js': { icon: SiReact, color: 'text-[#61DAFB]', shadow: 'shadow-[#61DAFB]/20' },
    'Next.js': { icon: SiNextdotjs, color: 'text-white', shadow: 'shadow-white/20' },
    'TypeScript': { icon: SiTypescript, color: 'text-[#3178C6]', shadow: 'shadow-[#3178C6]/20' },
    'Vue.js': { icon: SiVuedotjs, color: 'text-[#4FC08D]', shadow: 'shadow-[#4FC08D]/20' },
    'Nuxt.js': { icon: SiNuxtdotjs, color: 'text-[#00DC82]', shadow: 'shadow-[#00DC82]/20' },
    'Vite': { icon: SiVite, color: 'text-[#646CFF]', shadow: 'shadow-[#646CFF]/20' },
    'shadcn/ui': { icon: SiShadcnui, color: 'text-white', shadow: 'shadow-white/20' },
    'React,js': { icon: SiReact, color: 'text-[#61DAFB]', shadow: 'shadow-[#61DAFB]/20' }
};

function Projects() {
    return (
        <div id="projects">
            <h2 className="text-2xl font-bold mb-6">Things I've built</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700/50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl shadow-black/50 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col" // 👈 flex here
                    >
                        {/* Project Image */}
                        <Image
                            src={project.imageUrl}
                            alt={project.title}
                            width={400}
                            height="auto"
                            className="w-full h-48 object-cover"
                        />

                        {/* Project Content */}
                        <div className="p-6 flex flex-col flex-grow"> {/* 👈 let this grow */}
                            <div>
                                <p className="text-gray-400 text-sm mb-2">
                                    {project.category} • {project.period}
                                </p>
                                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                            </div>

                            {/* icons at bottom */}
                            <div className="flex flex-wrap gap-2 mt-auto"> {/* 👈 mt-auto pushes icons down */}
                                {project.stack?.map((tech, techIndex) => {
                                    const techConfig = stackIcons[tech];
                                    if (!techConfig) return null;

                                    const IconComponent = techConfig.icon;
                                    return (
                                        <div
                                            key={techIndex}
                                            className={`p-2 rounded-lg bg-gray-600/50 ${techConfig.color} ${techConfig.shadow} shadow-lg`}
                                            title={tech}
                                        >
                                            <IconComponent className="text-lg" />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </a>
                ))}
            </div>

        </div>
    );
}

export default Projects;