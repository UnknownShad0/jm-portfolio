import React from 'react';
import profile from '../assets/profile.jpg';
import { FaDownload } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';
import { MOTION_VARIANTS, DEFAULT_VIEWPORT } from '../../constants';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="p-4">
      <h2 className="font-play text-center text-3xl font-bold opacity-25 sm:text-5xl lg:text-8xl">
        About{' '}
      </h2>
      <div className="mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2">
        <motion.div
          variants={MOTION_VARIANTS.fade}
          initial="hidden"
          whileInView="visible"
          viewport={DEFAULT_VIEWPORT}
          transition={{ duration: 1.5 }}
          className="grid grid-cols-1 gap-5 rounded-lg p-5 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl lg:grid-cols-2"
        >
          <div>
            <img src={profile} alt="" className="mx-auto h-auto rounded-lg" />
          </div>
          <div className="flex items-center lg:p-5">
            <div className="space-y-2">
              <div>
                <label className="text-sm font-semibold">Name:</label>
                <p>John Mark B. Anunciado</p>
              </div>
              <div>
                <label className="text-sm font-semibold">Position:</label>
                <p>Web Developer</p>
              </div>
              <div>
                <label className="text-sm font-semibold">Email:</label>
                <p className="hover:underline">
                  <a href="mailto:jmarkanunciado@gmail.com">jmarkanunciado@gmail.com</a>
                </p>
              </div>
              <div>
                <label className="text-sm font-semibold">Address:</label>
                <p>City of San Jose del Monte, Bulacan.</p>
              </div>
              <div className="">
                <a
                  href="/anunciado_resume.pdf"
                  download="anunciado_resume.pdf"
                  className="flex items-center gap-2 text-sm font-semibold"
                >
                  <span className="">Resume:</span>

                  <FaDownload className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <div>
          <div className="flex h-full items-center p-10 text-xs sm:text-sm lg:text-base">
            <div className="space-y-2 text-base leading-relaxed text-gray-700">
              <ReactTyped
                strings={[
                  `<div class="space-y-2 text-base leading-relaxed text-gray-700">
                    <p><strong class="font-semibold text-black">Motivated</strong> and <strong class="font-semibold text-black">resourceful</strong> with a strong commitment to <strong class="font-semibold text-black">professional growth</strong>. Experienced in balancing coursework with part-time employment, demonstrating exceptional <strong class="font-semibold text-black">time management</strong> and <strong class="font-semibold text-black">organizational skills</strong>.</p>
                    <p>Have a <strong class="font-semibold text-black">proactive mindset</strong> and actively look for opportunities to <strong class="font-semibold text-black">learn and contribute</strong> in the workplace. <strong class="font-semibold text-black">Adaptable</strong> and <strong class="font-semibold text-black">quick to learn</strong>, consistently achieving goals and <strong class="font-semibold text-black">exceeding expectations</strong>.</p>
                    <p>Seeking a position that allows for continued <strong class="font-semibold text-black">growth</strong> and <strong class="font-semibold text-black">development</strong> while making a meaningful <strong class="font-semibold text-black">contribution</strong> to the organization.</p>
                  </div>`,
                ]}
                typeSpeed={5}
                showCursor={false}
                cursorChar="|"
                loop={false}
                backSpeed={0}
                fadeOut={false}
                fadeOutDelay={0}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
