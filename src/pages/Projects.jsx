import { useState } from 'react';
import { FaGraduationCap, FaBriefcase, FaLaptopCode } from 'react-icons/fa';

function Projects() {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  const tabs = [
    { label: 'Academic', icon: <FaGraduationCap size={30} /> },
    { label: 'Work', icon: <FaBriefcase size={30} /> },
    { label: 'Personal', icon: <FaLaptopCode size={30} /> },
  ];

  return (
    <section id="skills" className="p-4">
      <h2 className="font-play text-center text-3xl font-bold opacity-25 sm:text-5xl lg:text-8xl">
        Projects
      </h2>

      <div className="mx-auto mt-8 grid grid-cols-3 gap-6 rounded-3xl p-10 pb-5 text-center shadow-2xl">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => toggleTab(tab.label)}
            className={`flex flex-col items-center justify-center rounded-3xl p-5 shadow transition-all duration-300 hover:scale-105 focus:outline-none ${
              activeTab === tab.label ? 'ring-primary/50 bg-gray-100 ring-2' : 'bg-white'
            }`}
          >
            {tab.icon}
            {/* <h1 className="mt-3 text-xs font-semibold lg:text-base">{tab.label}</h1> */}
          </button>
        ))}

        <div className="col-span-3">
          {/* Projects Section */}
          {activeTab === 'Academic' && (
            <div className="mx-auto mt-6 mb-10 max-w-4xl rounded-xl bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-bold">Academic Projects</h3>
              <ul className="list-inside list-disc text-left">
                <li>Voting System – Capstone Project</li>
                <li>Student Record Manager – OOP Course</li>
                <li>Library Management System</li>
              </ul>
            </div>
          )}

          {activeTab === 'Work' && (
            <div className="mx-auto mt-6 mb-10 max-w-4xl rounded-xl bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-bold">Work Projects</h3>
              <ul className="list-inside list-disc text-left">
                <li>Voter Demographics Heatmap – Makopa Inc.</li>
                <li>Checklist Summary API – Makopa Inc.</li>
                <li>Inventory Dashboard – Internship Work</li>
              </ul>
            </div>
          )}

          {activeTab === 'Personal' && (
            <div className="mx-auto mt-6 mb-10 max-w-4xl rounded-xl bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-bold">Personal Projects</h3>
              <ul className="list-inside list-disc text-left">
                <li>React Todo CRUD App</li>
                <li>Expense Tracker with Laravel & Vue</li>
                <li>Weather Forecast App (OpenWeatherMap API)</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
