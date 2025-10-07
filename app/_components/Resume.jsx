import SkillsGrid from './SkillsGrid';

function Resume() {
    const handleDownloadCV = () => {
        window.open('https://drive.google.com/file/d/1NbYYClMDcnXUR7F_VW6X-07jrgy3yQUC/view?usp=sharing', '_blank');
    };

    return (
        <div id="resume">
            <h2 className="text-2xl font-bold mb-6">Resume</h2>

            <div className="mb-6">
                <button
                    onClick={handleDownloadCV}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:cursor-pointer"
                >
                    Download CV
                </button>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                        <h4 className="font-semibold">Bachelor of Mechanical Engineering</h4>
                        <p className="text-gray-400 text-sm">2013 - 2021</p>
                        <p className="text-gray-400 text-sm">Ahmadu Bello University, Zaria, Nigeria</p>
                    </div>

                    <div className="bg-gray-700/50 p-4 rounded-lg">
                        <h4 className="font-semibold">Demonstration Secondary School</h4>
                        <p className="text-gray-400 text-sm">2007 - 2013</p>
                    </div>
                </div>
            </div>

            <SkillsGrid />
        </div>
    );
}

export default Resume;