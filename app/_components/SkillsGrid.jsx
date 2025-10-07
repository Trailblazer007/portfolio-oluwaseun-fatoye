import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
    SiVuedotjs, SiNuxtdotjs, SiVite, SiWordpress, SiGit, SiGithub,
    SiVercel, SiNetlify, SiPostman, SiFigma, SiTailwindcss
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const SkillsGrid = () => {
    // Categorized skills with icons and colors
    const skillCategories = [
        {
            title: "Core Technologies",
            skills: [
                { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
                { name: "CSS3", icon: SiCss3, color: "#1572B6" },
                { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
                { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }
            ]
        },
        {
            title: "Frameworks & Libraries",
            skills: [
                { name: "React.js", icon: SiReact, color: "#61DAFB" },
                { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
                { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
                { name: "Nuxt.js", icon: SiNuxtdotjs, color: "#00DC82" },
                { name: "Vite", icon: SiVite, color: "#646CFF" },
                { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" }
            ]
        },
        {
            title: "Tools & Platforms",
            skills: [
                { name: "Git", icon: SiGit, color: "#F05032" },
                { name: "GitHub", icon: SiGithub, color: "#181717" },
                { name: "Vercel", icon: SiVercel, color: "#000000" },
                { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
                { name: "WordPress", icon: SiWordpress, color: "#21759B" },
                { name: "Figma", icon: SiFigma, color: "#F24E1E" },
                { name: "Postman", icon: SiPostman, color: "#FF6C37" },
                { name: "Axios", icon: TbApi, color: "#5A29E4" }
            ]
        },
        {
            title: "Specialties",
            skills: [
                { name: "Responsive Design", icon: SiCss3, color: "#1572B6" },
                { name: "shadcn/ui", icon: SiReact, color: "#61DAFB" }
            ]
        }
    ];

    return (
        <div>
            <h3 className="text-xl font-semibold mb-6">My Skills & Technologies</h3>

            <div className="space-y-8">
                {skillCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h4 className="text-lg font-medium mb-4 text-gray-300 border-b border-gray-600 pb-2">
                            {category.title}
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {category.skills.map((skill, skillIndex) => {
                                const IconComponent = skill.icon;
                                return (
                                    <div
                                        key={skillIndex}
                                        className="group relative flex flex-col items-center p-4 bg-gray-700/50 rounded-xl transition-all duration-300 hover:transform hover:scale-105 hover:bg-gray-600/50"
                                    >
                                        {/* Pulsating effect on hover */}
                                        <div
                                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse"
                                            style={{
                                                boxShadow: `0 0 20px ${skill.color}40`,
                                                backgroundColor: `${skill.color}20`
                                            }}
                                        />

                                        {/* Icon with colored shadow */}
                                        <div
                                            className="relative z-10 p-3 rounded-lg bg-gray-600/50 group-hover:bg-gray-500/50 transition-colors duration-300"
                                            style={{
                                                boxShadow: `0 4px 15px ${skill.color}30`
                                            }}
                                        >
                                            <IconComponent
                                                size={32}
                                                style={{ color: skill.color }}
                                                className="transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* Skill name */}
                                        <span className="relative z-10 mt-3 text-sm text-center text-gray-200 group-hover:text-white transition-colors duration-300">
                                            {skill.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsGrid;