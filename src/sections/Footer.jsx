import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="py-10 bg-white dark:bg-[#0F172A] text-gray-700 dark:text-gray-300 transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
        {/* Social Icons */}
        <div className="flex space-x-6 mb-6">
          <a href="https://github.com/rebly-18" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-teal-500 text-xl transition-colors duration-300">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/reblytabuni22" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-teal-500 text-xl transition-colors duration-300">
            <FaLinkedin />
          </a>
          <a href="mailto:anjasjr1922@gmail.com" className="text-gray-500 dark:text-gray-400 hover:text-teal-500 text-xl transition-colors duration-300">
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Coded with <span className="text-red-500">❤️</span> by <span className="font-semibold">Tabuni.dev</span>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
