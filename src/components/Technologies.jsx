import React from "react";
import {
    SiPython,
    SiPytorch,
    SiTensorflow,
    SiLangchain,
    SiHuggingface,
    SiFastapi,
    SiDocker,
} from "react-icons/si";
import { PiGraph } from "react-icons/pi";
import { FaAws } from "react-icons/fa";
import { RiGitBranchLine } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const coreTech = [
    { name: "Python", Icon: SiPython, color: "text-[#3776AB]", duration: 2.5 },
    { name: "PyTorch", Icon: SiPytorch, color: "text-[#EE4C2C]", duration: 3 },
    { name: "TensorFlow", Icon: SiTensorflow, color: "text-[#FF6F00]", duration: 5 },
    { name: "LangChain", Icon: SiLangchain, color: "text-[#13B47A]", duration: 2 },
    { name: "LangGraph", Icon: PiGraph, color: "text-[#FF6B6B]", duration: 6 },
    { name: "Hugging Face", Icon: SiHuggingface, color: "text-[#FFD21E]", duration: 4 },
];

const devTools = [
    { name: "FastAPI", Icon: SiFastapi, color: "text-[#009688]", duration: 2.5 },
    { name: "Docker", Icon: SiDocker, color: "text-[#2496ED]", duration: 3 },
    { name: "Git", Icon: RiGitBranchLine, color: "text-[#F05032]", duration: 5 },
    { name: "AWS", Icon: FaAws, color: "text-[#FF9900]", duration: 2 },
];

const Technologies = () => {
    return (
        <section id="technologies" className="pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-5xl tracking-tight">
                Technologies
            </motion.h2>

            {/* Core Technologies */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="mb-20">
                <h3 className="mb-10 text-center text-xl text-stone-400 tracking-wide">
                    Core Technologies
                </h3>

                <div className="flex flex-wrap justify-center gap-10 text-5xl">
                    {coreTech.map(({ name, Icon, color, duration }) => (
                        <motion.div
                            key={name}
                            variants={iconVariants(duration)}
                            initial="initial"
                            animate="animate"
                            className="p-2"
                        >
                            <motion.div
                                whileHover={{ scale: 1.25, rotate: 2 }}
                                className="relative group cursor-pointer"
                            >
                                <Icon className={`${color} text-7xl`} />
                                {/* Tooltip */}
                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 bg-stone-900 border border-stone-800 px-3 py-1 rounded-md text-xs text-stone-200 whitespace-nowrap pointer-events-none shadow-2xl z-20 font-medium">
                                    {name}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Development Tools */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}>
                <h3 className="mb-10 text-center text-xl text-stone-400 tracking-wide">
                    Development Tools
                </h3>

                <div className="flex flex-wrap justify-center gap-10 text-5xl">
                    {devTools.map(({ name, Icon, color, duration }) => (
                        <motion.div
                            key={name}
                            variants={iconVariants(duration)}
                            initial="initial"
                            animate="animate"
                            className="p-2"
                        >
                            <motion.div
                                whileHover={{ scale: 1.25, rotate: 2 }}
                                className="relative group cursor-pointer"
                            >
                                <Icon className={`${color} text-7xl`} />
                                {/* Tooltip */}
                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 bg-stone-900 border border-stone-800 px-3 py-1 rounded-md text-xs text-stone-200 whitespace-nowrap pointer-events-none shadow-2xl z-20 font-medium">
                                    {name}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Technologies;
