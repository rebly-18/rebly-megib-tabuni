import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FaReact, FaNodeJs, FaPhp, FaLaravel } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiPostgresql, SiMysql } from "react-icons/si";

const Skills = () => {
  const controls = useAnimation();

  const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-gray-300" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-orange-500" /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
    { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
  ];

  // Duplicate array for seamless scrolling
  const doubledSkills = [...skills, ...skills, ...skills];

  useEffect(() => {
    // Mulai animasi dari posisi awal
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        ease: "linear",
        duration: 40, // pelan (atur sesuai selera)
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <section className="py-20 bg-white dark:bg-[#0F172A] transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Judul */}
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">Keahlian Teknologi</h2>

        {/* Wrapper */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex space-x-8"
            animate={controls}
            onHoverStart={() => controls.stop()} // Pause on hover
            onHoverEnd={() =>
              controls.start({
                x: ["0%", "-100%"],
                transition: { ease: "linear", duration: 40, repeat: Infinity },
              })
            }
          >
            {doubledSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-[#1E293B] shadow-sm hover:shadow-md transition-all duration-300 w-48">
                <div className="text-5xl mb-4">{skill.icon}</div>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">{skill.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
