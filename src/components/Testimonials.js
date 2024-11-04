import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "As a founding member of Coders Nexus, he has demonstrated exceptional skills in web development and a keen understanding of user experience. N S Dheeraj has effectively utilized modern technologies to create intuitive interfaces, showcasing his ability to translate complex requirements into engaging user experiences.",
      author: "Netravati M, Vice-Principal SDIT",
    },
    {
      text: "N S Dheeraj has a collaborative spirit, often engaging with peers to share knowledge and enhance team dynamics. His passion for web development and commitment to continuous learning set him apart as a promising candidate. I am confident that he will make a significant contribution to the success of your team.",
      author: "M. Iliyas Ahmed, EG Python Developer",
    },
  ];

  return (
    <section className="p-10 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Testimonials</h2>

      <div className="mt-6 space-y-8">
        {testimonials.map((testimonial, index) => (
          <blockquote
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <p className="text-lg text-gray-700 italic mb-4">"{testimonial.text}"</p>
            <footer className="text-right text-gray-600 font-semibold">— {testimonial.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
