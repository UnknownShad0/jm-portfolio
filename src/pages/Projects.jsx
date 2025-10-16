import { useState } from 'react';
import {
  FaGraduationCap,
  FaBriefcase,
  FaLaptopCode,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';

function Projects() {
  const [activeTab, setActiveTab] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: 'Project Management System',
      category: 'Capstone',
      thumbnail: '/jm-portfolio/pms/1login.jpg',
      images: [
        '/jm-portfolio/pms/1login.jpg',
        '/jm-portfolio/pms/2dashboard.jpg',
        '/jm-portfolio/pms/3project.jpg',
        '/jm-portfolio/pms/4task.jpg',
        '/jm-portfolio/pms/5send.jpg',
        '/jm-portfolio/pms/6asset.jpg',
        '/jm-portfolio/pms/7space.jpg',
        '/jm-portfolio/pms/8incident.jpg',
        '/jm-portfolio/pms/9contract.jpg',
      ],
      description:
        'A comprehensive project management solution with task tracking and team collaboration.',
    },
    {
      id: 2,
      title: 'Voting Management System',
      category: 'OJT',
      thumbnail: '/jm-portfolio/vms/1login.jpg',
      images: [
        '/jm-portfolio/vms/1login.jpg',
        '/jm-portfolio/vms/2dashboard.jpg',
        '/jm-portfolio/vms/3results.jpg',
        '/jm-portfolio/vms/4report.jpg',
        '/jm-portfolio/vms/5addcand.jpg',
        '/jm-portfolio/vms/6bargraph.jpg',
        '/jm-portfolio/vms/7heatmap.jpg',
        '/jm-portfolio/vms/8info.jpg',
        '/jm-portfolio/vms/9ballot.jpg',
      ],
      description: 'Full-stack e-commerce application with payment integration.',
    },
  ];

  const openGallery = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
    }
  };

  return (
    <section id="projects" className="p-4">
      <h2 className="font-play text-center text-3xl font-bold opacity-25 sm:text-5xl lg:text-8xl">
        Projects
      </h2>

      <div className="mx-auto mt-8 gap-6 rounded-3xl p-10 text-center shadow-2xl">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openGallery(project)}
              className="group relative transform cursor-pointer overflow-hidden rounded-xl shadow transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute right-0 bottom-0 left-0 p-4 text-white">
                  <h3 className="mb-1 text-xl font-bold">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.category}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold">
                {project.images.length} photos
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Gallery */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          {/* Close Button */}
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 z-10 text-white transition-colors hover:text-gray-300"
          >
            <FaTimes size={32} />
          </button>

          {/* Previous Button */}
          {selectedProject.images.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-4 z-10 text-white transition-colors hover:text-gray-300"
            >
              <FaChevronLeft size={40} />
            </button>
          )}

          {/* Image Display */}
          <div className="w-full max-w-5xl">
            <img
              src={selectedProject.images[currentImageIndex]}
              alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
              className="h-auto max-h-[80vh] w-full rounded-lg object-contain"
            />

            {/* Image Info */}
            <div className="mt-4 text-center text-white">
              <h3 className="mb-2 text-2xl font-bold">{selectedProject.title}</h3>
              <p className="mb-2 text-gray-300">{selectedProject.description}</p>
              <p className="text-sm text-gray-400">
                {currentImageIndex + 1} / {selectedProject.images.length}
              </p>
            </div>

            {/* Thumbnail Navigation */}
            {selectedProject.images.length > 1 && (
              <div className="mt-4 flex justify-center gap-2">
                {selectedProject.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-16 w-16 overflow-hidden rounded border-2 transition-all ${
                      idx === currentImageIndex
                        ? 'scale-110 border-white'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Next Button */}
          {selectedProject.images.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-4 z-10 text-white transition-colors hover:text-gray-300"
            >
              <FaChevronRight size={40} />
            </button>
          )}
        </div>
      )}
    </section>
  );
}

export default Projects;
