import { icons } from "common/icons"
import { motion } from "framer-motion"

const Techstack = () => {
    const { FaLaravel, FaPhp, SiMysql, TiHtml5, SiCss3, IoLogoJavascript, FaBootstrap, RiReactjsLine, SiJquery } = icons

    const iconAnimation = (duration) => ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    })

    return (
        <div className="border-b border-neutral-900 pb-24">
            <h2 className="my-20 text-center text-4xl">Công nghệ sử dụng</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div variants={iconAnimation(2)} initial="initial" animate="animate"
                    title="Laravel" className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <FaLaravel className="text-5xl text-[#EB4432]" />
                </motion.div>
                <motion.div variants={iconAnimation(2.3)} initial="initial" animate="animate"
                    title="PHP" className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <FaPhp className="text-5xl text-[#4F5B93]" />
                </motion.div>
                <motion.div variants={iconAnimation(2.6)} initial="initial" animate="animate"
                    title="MySQL" className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <SiMysql className="text-5xl text-[rgb(0,120,143)]" />
                </motion.div>
                <motion.div variants={iconAnimation(2.9)} initial="initial" animate="animate"
                    title="HTML5" className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <TiHtml5 className="text-5xl text-[#e34e26]" />
                </motion.div>
                <motion.div variants={iconAnimation(3.2)} initial="initial" animate="animate"
                    title="CSS3" className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <SiCss3 className="text-5xl text-[#224ce6]" />
                </motion.div>
                <motion.div variants={iconAnimation(3.5)} initial="initial" animate="animate"
                    title="Javascript" className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <IoLogoJavascript className="text-5xl text-[#e9ca31]" />
                </motion.div>
                <motion.div variants={iconAnimation(3.8)} initial="initial" animate="animate"
                    title="Bootstrap" className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <FaBootstrap className="text-5xl text-[#8612fb]" />
                </motion.div>
                <motion.div variants={iconAnimation(4.1)} initial="initial" animate="animate"
                    title="ReactJS" className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <RiReactjsLine className="text-5xl text-[#0680a1]" />
                </motion.div>
                <motion.div variants={iconAnimation(4.4)} initial="initial" animate="animate"
                    title="JQuery" className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <SiJquery className="text-5xl text-[#0768ac]" />
                </motion.div>
            </div>
        </div>
    )
}

export default Techstack