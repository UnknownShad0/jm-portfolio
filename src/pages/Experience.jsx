import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Experience() {
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const educationData = [
    {
      year: 'Aug 2020 - Jul 2024',
      title: 'Bachelor of Science in Information Technology (BSIT)',
      institution: 'Bestlink College of the Philippines (College)',
    },
    {
      year: 'Jun 2018 - Apr 2020',
      title: 'Science, Technology, Engineering, and Mathematics (STEM)',
      institution: 'Bestlink College of the Philippines (SHS)',
    },
    {
      year: 'Jun 2014 - Apr 2018',
      institution: 'Sampaguita High School',
    },
  ];

  const careerData = [
    {
      year: 'Oct 2024 - Present',
      title: 'Web Developer',
      institution: 'Clearmind Algorithmics Inc.',
      description: [
        'Contributed to multiple projects, handling both front-end and back-end development using React.js with Tailwind CSS for responsive web and mobile interface, and CodeIgniter for API integrations to support the mobile development team.',
        'Created documentation and user manuals for completed projects, ensuring clarity and usability for end-users and team members.',
        'Gained hands-on experience with Git, Docker, and development servers, strengthening problem-solving skills and adaptability in a collaborative development environment.',
      ],
    },
    {
      year: 'May 2025',
      title: 'DESO Technical Support Staff',
      institution: 'Commission on Elections',
      description: [
        'Provided technical assistance during elections, including troubleshooting voting machines and coordinating with EBs to ensure smooth voting operations.',
        'Documented incidents and maintained accurate records of machine performance and issues for reporting and future reference.',
      ],
    },
    {
      year: 'Apr - Jul 2024',
      title: 'Software Developer Intern',
      institution: 'Makopa Inc. Philippines',
      description: [
        'Independently completed a full project from start to finish, ensuring all requirements assigned by the supervisor were delivered on time.',
        'Gained hands-on experience with HTML, CSS, Bootstrap, JavaScript, jQuery, PHP, Laravel, and MySQL, applying these technologies to develop and maintain web applications.',
      ],
    },
  ];

  const TimelineItem = ({ item, isLast, variant }) => (
    <div className="relative flex items-start">
      {/* Line */}
      {!isLast && <div className="absolute top-10 left-[15px] h-full w-0.5 bg-gray-300"></div>}

      {/* Dot */}
      <div className="relative z-10 -mt-[13.5px] flex h-8 w-8 items-center justify-center text-8xl">
        .
      </div>

      {/* Animated Box Only */}
      <motion.div variants={variant} className="ml-6 flex-1 pb-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="rounded-2xl bg-white p-6 shadow transition-all duration-300 hover:shadow-lg"
        >
          <p className="mt-2 font-semibold text-gray-800">{item.institution}</p>
          <p className="mt-2 text-xs text-gray-800">{item.title}</p>
          <p className="mt-2 text-xs font-semibold text-gray-800">{item.year}</p>
          <p className="mt-3 text-xs text-gray-600">{item.description}</p>
        </motion.div>
      </motion.div>
    </div>
  );

  return (
    <section id="skills" className="p-4">
      <h2 className="font-play mb-12 text-center text-3xl font-bold opacity-25 sm:text-5xl lg:text-8xl">
        Education and Career
      </h2>

      <div className="mx-auto mt-8">
        <div className="grid grid-cols-1 rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl sm:grid-cols-2 sm:gap-10">
          {/* Education Section */}
          <div className="mb-12">
            <div className="mb-8 flex justify-center text-4xl lg:justify-start">
              <div className="rounded-2xl bg-gray-50 p-5">{FaGraduationCap()}</div>
            </div>

            <motion.div
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {educationData.map((item, index) => (
                <TimelineItem
                  key={index}
                  item={item}
                  isLast={index === educationData.length - 1}
                  variant={itemVariant}
                />
              ))}
            </motion.div>
          </div>

          {/* Career Section */}
          <div>
            <div className="mb-8 flex justify-center text-3xl lg:justify-start">
              <div className="rounded-2xl bg-gray-50 p-5">{FaBriefcase()}</div>
            </div>
            <motion.div
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {careerData.map((item, index) => (
                <TimelineItem
                  key={index}
                  item={{
                    ...item,
                    description: item.description.map((desc, i) => (
                      <li key={i} className="ml-[7%] lg:ml-[3%]">
                        {desc}
                      </li>
                    )),
                  }}
                  isLast={index === careerData.length - 1}
                  variant={itemVariant}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
