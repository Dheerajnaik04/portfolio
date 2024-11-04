import React from 'react';

const Education = () => {
  const education = [
    {
      institution: 'ShreeDevi Institute of Technology',
      degree: 'Bachelor of Science in Computer Science',
      year: '2024',
      SGPA: '8.5',
    },
    {
      institution: 'Govt PU College Allanki',
      degree: 'Pre-University',
      year: '2020',
      SGPA: '8.5',
    },
  ];

  return (
    <section className="p-10 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Education</h2>

      <ul className="space-y-6">
        {education.map((edu, index) => (
          <li
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-purple-600 mb-2">{edu.degree}</h3>
            <p className="text-gray-700 text-lg mb-1">{edu.institution}</p>
            <p className="text-gray-500">Graduation Year: <span className="text-gray-700 font-medium">{edu.year}</span></p>
            <p className="text-gray-500">SGPA: <span className="text-gray-700 font-medium">{edu.SGPA}</span></p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
