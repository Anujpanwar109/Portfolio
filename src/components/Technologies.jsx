import { RiReactjsLine } from "react-icons/ri"
import { SiCss3, SiGithub, SiHtml5, SiNetlify, SiTailwindcss, SiVercel,SiJavascript,SiGit } from "react-icons/si"
import {motion} from "framer-motion"

const iconVariation=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition: {
            duration: duration,
            ease:"linear",
            repeat: Infinity,
            repeatType:"reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className="px-24">
        <motion.h2
         whileInView={{opacity:1,y:0}} 
         initial={{opacity:0,y:-100}}
         transition={{duration:1.5}}
         className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div
         whileInView={{opacity:1,y:0}} 
         initial={{opacity:0,y:-100}}
         transition={{duration:1.5}}
         className="flex flex-wrap items-center justify-center gap-4">
            <motion.div initial="initial" animate="animate" variants={iconVariation(2.5)}>
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariation(3)} className="p-4">
                <SiJavascript className="text-7xl text-yellow-400"/>
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariation(5)} className="p-4">
                <SiCss3 className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariation(2)} className="p-4">
                <SiHtml5 className="text-7xl text-orange-500" />
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariation(4)} className="p-4">
                <SiTailwindcss className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariation(2.5)} className="p-4">
                <SiGit className="text-7xl text-red-600"/>
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariation(3)} className="p-4">
                <SiGithub className="text-7xl text-white"/>
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariation(5)} className="p-4">
                <SiNetlify className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariation(6)} className="p-4">
                <SiVercel className="text-7xl text-white"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies