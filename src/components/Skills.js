import React from 'react';

const Skills = () => {
  const technicalSkills = ['JavaScript', 'React', 'Node.js', 'SQL', 'Tailwind CSS', 'Next.js'];
  const softSkills = ['Communication', 'Teamwork', 'Problem-Solving', 'Adaptability'];

  return (
    <section className="p-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Technical Skills */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Technical Skills</h3>
          <ul className="space-y-2">
            {technicalSkills.map((skill, index) => (
              <li
                key={index}
                className="text-lg text-gray-700 bg-blue-50 py-2 px-4 rounded-lg hover:bg-blue-100 transition duration-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-purple-600 mb-4">Soft Skills</h3>
          <ul className="space-y-2">
            {softSkills.map((skill, index) => (
              <li
                key={index}
                className="text-lg text-gray-700 bg-purple-50 py-2 px-4 rounded-lg hover:bg-purple-100 transition duration-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
