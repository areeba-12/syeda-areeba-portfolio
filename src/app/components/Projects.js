
export default function Projects() {
    const projects = [
      {
        title: 'Dynamic Resume Builder',
        description: 'An interactive resume builder that generates resumes based on user inputs.',
        link: 'https://github.com/areeba-12/Dynamic_resume.git',
        tech: ['TypeScript', 'HTML', 'CSS'],
      },
      {
        title: 'Number Guessing Game',
        description: 'A fun command-line game where users guess the correct number.',
        link: 'https://github.com/areeba-12/Number-Guessing-Game.git',
        tech: ['Node.js', 'Typescript'],
      },
      {
        title: 'Switch Case Calculator',
        description: 'A simple calculator using switch cases for basic arithmetic operations.',
        link: 'https://github.com/areeba-12/switchcase.git',
        tech: ['TypeScript', 'Node.js'],
      },
      
    ];
  
    return (
      <section className="bg-gray-900 text-gray-200 py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-10">
            My Projects
          </h2>
  
          {/* Project Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-teal-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium bg-teal-500 text-white rounded-full px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
  
                {/* Link to Project */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:underline"
                >
                  View Project &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  