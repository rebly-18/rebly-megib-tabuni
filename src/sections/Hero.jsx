import { motion } from "framer-motion";
import ProfilIlustrasi from "../assets/img/tabuni.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-12 bg-white dark:bg-[#0F172A] transition-colors duration-300 overflow-hidden">
      {/* LEFT CONTENT */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-12 lg:px-24">
        <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="max-w-xl text-center lg:text-left space-y-6">
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">Halo, nama saya adalah</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-snug">Rebly Megib Tabuni</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-teal-500">Seorang Full-Stack Developer</h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
            Saya adalah seorang pengembang web dengan fokus pada teknologi modern. Dengan keahlian di bidang <span className="text-teal-500">React</span> untuk frontend dan{" "}
            <span className="text-blue-500">Node.js, Express.js, PHP, Laravel</span> untuk backend, saya menghadirkan kombinasi keterampilan teknis dan solusi kreatif di setiap proyek.
          </p>
          <div>
            <a href="#contact" className="inline-block mt-6 px-6 py-3 text-white font-semibold bg-teal-500 rounded-lg shadow-md hover:bg-teal-600 transition-all duration-300">
              Hubungi Saya!
            </a>
          </div>
        </motion.div>

        {/* RIGHT AVATAR */}
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, type: "spring", stiffness: 100 }} className="mt-10 lg:mt-0 flex justify-center">
          <img src={ProfilIlustrasi} alt="Ilustrasi Profil" className="w-50 md:w-50 lg:w-[220px] object-contain drop-shadow-xl" />
        </motion.div>

        {/* Background Text */}
        <h1 className="absolute text-gray-100 dark:text-gray-800 text-6xl md:text-[8rem] font-extrabold opacity-10 top-16 left-1/2 -translate-x-1/2 pointer-events-none select-none">DEVELOPER</h1>
      </div>
    </section>
  );
};

export default Hero;
