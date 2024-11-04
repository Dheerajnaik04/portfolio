import React from 'react';

const Map = () => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden mt-6">
      {/* Added shadow and margin for spacing */}
      <iframe
        title="My Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15482.003453198505!2d74.8354912663188!3d12.91414096858963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35dcbd7250fb9%3A0x200a125a273a10!2sMangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1701221222464!5m2!1sen!2sin" 
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
