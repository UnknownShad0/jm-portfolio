import {
  FaReact,
  FaPhp,
  FaLaravel,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaTerminal,
  FaFigma,
  FaDocker,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiPostman,
  SiVite,
  SiJson,
  SiNextdotjs,
  SiCodeigniter,
} from 'react-icons/si';

const iconMap = {
  HTML: <FaHtml5 className="text-black" />,
  Docker: <FaDocker className="text-black" />,
  CSS: <FaCss3Alt className="text-black" />,
  React: <FaReact className="text-black" />,
  JavaScript: <SiJavascript className="text-black" />,
  'Tailwind CSS': <SiTailwindcss className="text-black" />,
  Bootstrap: <FaBootstrap className="text-black" />,
  Laravel: <FaLaravel className="text-black" />,
  PHP: <FaPhp className="text-black" />,
  SQL: <SiMysql className="text-black" />,
  Git: <SiGit className="text-black" />,
  'REST API': <SiJson className="text-black" />, // JSON icon as placeholder
  Postman: <SiPostman className="text-black" />,
  Vite: <SiVite className="text-black" />,
  'Terminal/SSH': <FaTerminal className="text-black" />,
  Figma: <FaFigma className="text-black" />,
  'Next.js': <SiNextdotjs className="text-black" />,
  CodeIgniter: <SiCodeigniter className="text-black" />,
  'FortiClient VPN': <FaTerminal className="text-black" />, // Placeholder
  SSH: <FaTerminal className="text-black" />, // Placeholder for deployment via terminal
};

export default function Projects() {
  const frontendSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Bootstrap',
    'Figma',
  ];

  const backendSkills = ['Laravel', 'PHP', 'CodeIgniter', 'SQL', 'REST API'];

  const otherSkills = ['Git', 'Postman', 'Vite', 'Terminal/SSH', 'Docker'];

  const renderSkill = (skill) => (
    <div
      key={skill}
      className="flex items-center justify-center gap-2 rounded-xl bg-white p-4 text-center text-3xl font-medium"
    >
      {iconMap[skill]}
      <span className="text-xs text-black">{skill}</span>
    </div>
  );

  return (
    <section id="certifications" className="p-4">
      <h2 className="font-play text-center text-3xl font-bold opacity-25 sm:text-5xl lg:text-8xl">
        Certifications{' '}
      </h2>
      <div className="mx-auto mt-8 grid grid-cols-1 gap-6 rounded-3xl p-10 text-center shadow-2xl sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-3xl p-5 shadow transition-all duration-300 hover:scale-105"></div>
        <div className="rounded-3xl p-5 shadow transition-all duration-300 hover:scale-105"></div>
        <div className="rounded-3xl p-5 shadow transition-all duration-300 hover:scale-105"></div>
      </div>
    </section>
  );
}
