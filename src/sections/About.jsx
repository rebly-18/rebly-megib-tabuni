import { motion } from "framer-motion";
import profil from "../assets/img/profil.png";

const About = () => {
  return (
    <motion.section id="about" className="py-20 bg-white dark:bg-[#0F172A] transition-colors duration-300" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Judul dengan garis aksen */}
        <div className="text-center mb-12 relative inline-block">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Siapa Saya?</h2>
          <div className="absolute w-16 h-[3px] bg-teal-500 left-1/2 -translate-x-1/2 mt-2"></div>
        </div>

        {/* Konten */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Foto Profil dengan animasi hover */}
          <div className="flex-shrink-0 group">
            <img src={profil} alt="Profile" className="w-44 md:w-56 object-cover rounded-xl shadow-lg border-4 border-teal-500 transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-teal-400/50" />
          </div>

          {/* Deskripsi */}
          <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-2xl">
            <p className="mb-4">
              Saya Seorang Full-Stack Developer. Dengan pengalaman Freelance 3 tahun dalam pengembangan website, saya menguasai pengembangan <span className="text-teal-500 font-semibold">Frontend</span> dan{" "}
              <span className="text-blue-500 font-semibold">Backend</span>. Saya percaya kombinasi keterampilan teknis dan kreativitas adalah kunci untuk menciptakan produk digital yang unggul.
            </p>

            {/* Riwayat Pendidikan */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Riwayat Pendidikan:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                <span className="font-semibold">Universitas Sains dan Teknologi Jayapura</span> (2018 - 2025) - Jurusan Teknik Informatika.
              </li>
              <li>
                <span className="font-semibold">Magang di Universitas Sains dan Teknologi Jayapura</span> (2024) - Pengembangan Aplikasi Web Pendataan Proposal.
              </li>
              <li>
                <span className="font-semibold">SaCode Papua Community</span> (2023) - Kursus Pengembangan Website dengan studi kasus Desain Website Ecommerce.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
