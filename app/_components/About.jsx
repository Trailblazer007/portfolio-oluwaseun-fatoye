function About() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
                Results-driven Frontend Developer with 6 years of experience building scalable, responsive web applications. Expert in HTML, CSS, JavaScript, and TypeScript, with 3+ years specializing in React and Next.js, plus recent proficiency in Vue.js and Nuxt.js. Proven track record of collaborating with cross-functional teams to deliver technical solutions that drive business objectives. Committed to combining deep technical expertise with strategic, market-aware development
            </p>

            <h2 className="text-2xl font-bold mb-6">My Soft Skills</h2>
            <div className="flex flex-col gap-4">
                <div className="bg-gray-700/50 p-4 rounded-lg w-full">
                    <h3 className="text-lg font-semibold mb-2">Problem-solving</h3>
                    <p className="text-gray-400 text-sm">
                        Analytical approach to identifying and resolving complex technical challenges efficiently.
                    </p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg w-full">
                    <h3 className="text-lg font-semibold mb-2">Debugging</h3>
                    <p className="text-gray-400 text-sm">
                        Systematic troubleshooting and error resolution to maintain code quality and application stability.
                    </p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg w-full">
                    <h3 className="text-lg font-semibold mb-2">Code Review</h3>
                    <p className="text-gray-400 text-sm">
                        Thorough analysis of peer code with constructive feedback to maintain standards and share knowledge.
                    </p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg w-full">
                    <h3 className="text-lg font-semibold mb-2">Documentation</h3>
                    <p className="text-gray-400 text-sm">
                        Creating clear, comprehensive documentation for codebases, APIs, and project setups.
                    </p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg w-full">
                    <h3 className="text-lg font-semibold mb-2">Communication</h3>
                    <p className="text-gray-400 text-sm">
                        Clear and effective communication with team members, stakeholders, and cross-functional partners.
                    </p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg w-full">
                    <h3 className="text-lg font-semibold mb-2">Team Collaboration</h3>
                    <p className="text-gray-400 text-sm">
                        Working effectively within agile teams, contributing to shared goals and supporting colleagues.
                    </p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg w-full">
                    <h3 className="text-lg font-semibold mb-2">Time Management</h3>
                    <p className="text-gray-400 text-sm">
                        Prioritizing tasks and managing workload efficiently to meet deadlines and project milestones.
                    </p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg w-full">
                    <h3 className="text-lg font-semibold mb-2">Continuous Learning</h3>
                    <p className="text-gray-400 text-sm">
                        Proactively staying updated with industry trends, new technologies, and best practices.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default About;