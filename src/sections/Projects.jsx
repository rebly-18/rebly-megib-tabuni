import { motion } from "framer-motion";
import project1 from "../assets/img/proyek3/portfolio.png";
import project2 from "../assets/img/proyek2/movieapp.png";
import project3 from "../assets/img/proyek1/Cover-1.jpg";

const Projects = () => {
  const projects = [
    {
      image: project1,
      title: "Portfolio Website",
      desc: "Website pribadi menggunakan React + Tailwind CSS untuk menampilkan informasi diri, skills, dan proyek.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "API GitHub"],
      link: "https://tabuni-dev.vercel.app/",
      github: "https://github.com/rebly-18/rebly-megib-tabuni",
    },
    {
      image: project2,
      title: "API Movie App",
      desc: "Aplikasi web yang menampilkan data film dari API eksternal dengan fitur pencarian dan filter.",
      tech: ["HTML", "Tailwind CSS", "Express.js", "API", "EJS"],
      link: "#",
      github: "#",
    },
    {
      image: project3,
      title: "Sistem Informasi Pendataan Proposal",
      desc: "Sistem informasi berbasis web untuk mengelola dan mendata proposal menggunakan alpine.js, tailwindcss, laravel.",
      tech: ["Alpine.js", "TailwindCSS", "Laravel"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <motion.section id="projects" className="py-20 bg-white dark:bg-[#0F172A] transition-colors duration-300" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Judul */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400">“Talk is cheap. Show me the code.” Berikut adalah proyek yang saya banggakan.</p>
          <div className="w-16 h-[3px] bg-teal-500 mx-auto mt-4"></div>
        </div>

        {/* Grid Project */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} whileHover={{ scale: 1.03 }} className="bg-gray-50 dark:bg-[#1E293B] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Gambar */}
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />

              {/* Konten */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-teal-100 dark:bg-gray-700 text-teal-700 dark:text-gray-200 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline font-medium">
                    Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300">
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tombol Explore More */}
        <div className="text-center mt-12">
          <a href="#" className="inline-block px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            Explore More on GitHub
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
