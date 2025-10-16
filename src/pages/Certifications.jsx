import React, { useState } from 'react';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    { id: 1, image: '/jm-portfolio/certs/basic-of-database.png' },
    { id: 2, image: '/jm-portfolio/certs/learn-php.png' },
    { id: 3, image: '/jm-portfolio/certs/mastering-html.png' },
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <section id="certifications" className="p-4">
      <h2 className="font-play text-center text-3xl font-bold opacity-25 sm:text-5xl lg:text-8xl">
        Certifications
      </h2>

      {/* Certifications Grid */}
      <div className="mx-auto mt-8 grid grid-cols-1 gap-6 rounded-3xl p-10 text-center shadow-2xl sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <div key={cert.id} className="flex flex-col items-center">
            <img
              src={cert.image}
              alt={`Certification ${cert.id}`}
              width={300}
              height={200}
              className="cursor-pointer rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              onClick={() => openModal(cert)}
            />
            {/* <button
              onClick={() => openModal(cert)}
              className="mt-3 rounded-xl bg-blue-600 px-4 py-2 text-white transition-all duration-300 hover:bg-blue-700"
            >
              View Certificate
            </button> */}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative rounded-2xl bg-white p-4 shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-2xl font-bold text-gray-600 hover:text-red-500"
            >
              &times;
            </button>
            <img
              src={selectedCert.image}
              alt="Full Certification"
              className="max-h-[80vh] max-w-[90vw] rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
