import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Repository = () => {
  const [repos, setRepos] = useState([]);
  const username = "rebly-18"; // Ganti dengan username GitHub kamu

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
        const data = await res.json();
        setRepos(data.slice(0, 6)); // Ambil 6 repo terbaru
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };
    fetchRepos();
  }, []);

  return (
    <motion.section id="repository" className="py-20 bg-white dark:bg-[#0F172A] transition-colors duration-300" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">GitHub Repositories</h2>
          <p className="text-gray-600 dark:text-gray-400">Berikut adalah beberapa repository terbaru saya.</p>
          <div className="w-16 h-[3px] bg-teal-500 mx-auto mt-4"></div>
        </div>

        {/* Grid Repo */}
        <div className="grid md:grid-cols-3 gap-8">
          {repos.map((repo) => (
            <motion.div key={repo.id} whileHover={{ scale: 1.05 }} className="bg-gray-50 dark:bg-[#1E293B] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6">
              {/* Nama Repo */}
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{repo.name}</h3>

              {/* Deskripsi */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{repo.description || "Tidak ada deskripsi"}</p>

              {/* Info */}
              <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span>⭐ {repo.stargazers_count}</span>
                <span>{repo.language || "N/A"}</span>
              </div>

              {/* Tombol */}
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="inline-block text-teal-500 hover:underline font-medium">
                Lihat Repository →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Tombol Lihat Semua */}
        <div className="text-center mt-12">
          <a
            href={`https://github.com/${username}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Lihat Semua di GitHub
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Repository;
