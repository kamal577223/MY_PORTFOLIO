import { FaReact, FaNodeJs, FaPython, FaDatabase, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiPostgresql } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      ]
    },
    {
      title: "Backend & DB",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-slate-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "SQL/Oracle", icon: <FaDatabase className="text-blue-500" /> },
      ]
    },
    {
      title: "Data Science & Tools",
      skills: [
        { name: "Python", icon: <FaPython className="text-yellow-500" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" /> },
        { name: "Git", icon: <span className="text-orange-500 font-bold">Git</span> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent inline-block w-full">
        Technical Toolkit
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="p-6 border border-slate-800 rounded-2xl bg-slate-800/30">
            <h3 className="text-xl font-semibold mb-6 text-blue-400 border-b border-slate-700 pb-2">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-3 p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-slate-300 text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;