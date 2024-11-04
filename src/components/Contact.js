import React from 'react';
import Map from './Map';

const Contact = () => {
  return (
    <section className="p-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">REACH OUT TO ME</h2>

      {/* Responsive Container for Google Form */}
      <div className="mt-6 relative w-full" style={{ paddingTop: '125%' }}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScI8OU14zyRaAIhRD49zYCF_jRMd3dkdfqsa5FVCsbZaxDkOA/viewform?embedded=true"
          className="absolute top-0 left-0 w-full h-full border-none rounded-lg shadow-lg"
          loading="lazy"
          title="Google Form"
        >
          Loading…
        </iframe>
      </div>

      {/* Map component with adjusted margin */}
      <div className="mt-8">
        <Map />
      </div>
    </section>
  );
};

export default Contact;
