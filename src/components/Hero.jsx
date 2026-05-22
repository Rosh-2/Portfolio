import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/roshen.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    return (
        <section id="home" className="pt-28 pb-4 lg:mb-36">
            <div className="flex flex-col items-center justify-center lg:flex-row-reverse">

                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <motion.img
                            src={profilePic}
                            alt="Roshen Reji portrait"
                            className="w-[240px] sm:w-[300px] lg:w-[340px] aspect-[9/16] 
                         rounded-[2rem] object-cover shadow-2xl grayscale border border-white/5 bg-stone-950/20"
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2">
                    <div className="mt-10 flex flex-col items-center text-center lg:items-start lg:text-left">
                        <motion.h2
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-2 text-4xl font-semibold tracking-tight lg:text-5xl">
                            Roshen Reji
                        </motion.h2>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-stone-200 via-stone-300 to-stone-500 bg-clip-text text-2xl lg:text-3xl font-medium tracking-tight text-transparent">
                            AI Engineer · LLM Systems · Agentic AI
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.div
                            variants={container(1.5)}
                            initial="hidden"
                            animate="visible"
                            className="flex gap-4 justify-center lg:justify-start mb-8 text-2xl">
                            <a href="https://github.com/Rosh-2" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-stone-100">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/roshenreji/" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-stone-100">
                                <FaLinkedin />
                            </a>
                        </motion.div>
                        <motion.a
                            variants={container(1.5)}
                            initial="hidden"
                            animate="visible"
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-full px-6 py-3 text-sm text-stone-800 mb-10 font-semibold hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
                            Resume
                        </motion.a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
