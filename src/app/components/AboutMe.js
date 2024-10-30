export default function AboutMe() {
  return (
    <section className="bg-gray-800 text-gray-200 py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-6">
          About Me
        </h2>
        
        {/* Bio */}
        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          I&apos;m a passionate web developer with experience in crafting dynamic and visually appealing websites. With a background in HTML, CSS, JavaScript, TypeScript, and Next.js, I focus on creating responsive and user-friendly digital experiences. My aim is to bring ideas to life, blending creativity with technical skill to make an impact on the digital world.
        </p>

        {/* Skills */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mt-6">
          <div className="bg-gray-700 rounded-lg p-4 shadow-lg w-full md:w-auto">
            <h3 className="text-teal-400 font-semibold text-lg mb-2">
              Front-End Development
            </h3>
            <p className="text-gray-300">HTML, CSS, JavaScript, React, Tailwind CSS</p>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-4 shadow-lg w-full md:w-auto">
            <h3 className="text-teal-400 font-semibold text-lg mb-2">
              Tools & Technologies
            </h3>
            <p className="text-gray-300">Git, JavaScript, TypeScript</p>
          </div>
        </div>
      </div>
    </section>
  );
}
