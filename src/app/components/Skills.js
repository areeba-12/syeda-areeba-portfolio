

export default function Skills() {
    const skills = [
      {
        category: 'Front-End Development',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
      },
      
      {
        category: 'Tools & Technologies',
        skills: ['Git', 'Tailwind CSS', 'TypeScript', 'Next.js'],
      },
    ];
  
    return (
      <section className="bg-gray-900 text-gray-200 py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-10">
            My Skills
          </h2>
  
          {/* Skill Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skillSet, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-teal-400 mb-4">
                  {skillSet.category}
                </h3>
                <ul className="space-y-2">
                  {skillSet.skills.map((skill, idx) => (
                    <li key={idx} className="text-gray-300 text-base">
                      <span className="text-teal-500">•</span> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  