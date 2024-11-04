import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'Cricket Score Board Chrome Extension 🏏',
      description: 'This lightweight browser add-on provides real-time updates on live cricket match scores. It utilizes web APIs to fetch match data, displaying essential statistics such as runs, wickets, and overs in an intuitive interface. Users can quickly access live scores from the Chrome toolbar, ensuring they stay informed without interrupting their browsing experience.',
      repoLink: 'https://github.com/username/project-one',
    },
    {
      name: 'Coffee House Website ☕',
      description: 'This project is a responsive coffee house website built with HTML, CSS, and JavaScript. It features a landing page with a banner, an image slider, sections for services, a menu, and animated counters for business stats. Perfect for showcasing coffee shop offerings, it can be easily customized to suit specific needs across devices like phones, tablets, and desktops.',
      repoLink: 'https://github.com/username/project-two',
    },
  ];

  return (
    <section className="p-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Projects</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">{project.name}</h3>
            <p className="text-gray-700">{project.description}</p>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 inline-block">
              View Repository
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
