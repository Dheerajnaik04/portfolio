import React from 'react';

const Internships = () => {
  const internships = [
    {
      title: 'Front-End Developer Intern',
      company: 'Unified Mentor Private Limited',
      year: 'August 2024 - October 2024',
    },
    {
      title: 'Web Development Intern',
      company: 'DoTech Endeavors Limited',
      year: 'November 2022 - January 2023',
    },
  ];

  return (
    <section className="p-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Internships</h2>

      <ul className="space-y-6">
        {internships.map((internship, index) => (
          <li
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">{internship.title}</h3>
            <p className="text-gray-700">{internship.company}</p>
            <p className="text-gray-500 mt-1">{internship.year}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Internships;
