import React from "react";
import my_image from "../assets/my-picture.jpg";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-3"
    >
      <div className="flex flex-col items-center justify-center gap-5 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={my_image}
            alt="Yassine"
            className="w-[300px] cursor-pointer shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[300px] aspect-square w-full max-w-prose rounded-2xl object-cover   [mask-position:_center] [mask-repeat:_no-repeat] [mask-size:_contain] [mask-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMTg3Ij48cGF0aCBkPSJNMTkwIDM2YzE3IDI2IDExIDY3LTggOTgtMTkgMzItNTEgNTQtODIgNTItMzAtMS01OS0yNS03OC01N0MyIDk4LTcgNTkgNyAzNSAyMSAxMCA2MCAwIDk4IDBzNzYgMTEgOTIgMzZaIi8+PC9zdmc+')]"
          />
        </motion.div>
        <motion.div
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="bg-gradient-to-r  from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-5xl font-light md:text-7xl">
            Yassine Benkraouda
          </h1>
          <h3 className="bg-gradient-to-r  from-pink-500 to-blue-500 bg-clip-text text-transparent opacity-80 text-3xl  md:text-4xl">
            Web Developer
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
            I’m a dedicated front-end web developer with nearly a year of
            experience, skilled in HTML, CSS, React.js, and Tailwind CSS. I
            focus on building clean, user-friendly, and responsive websites that
            are optimized for performance. My approach emphasizes
            well-structured code and intuitive design, ensuring every project I
            work on delivers a seamless and enjoyable experience for users.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
