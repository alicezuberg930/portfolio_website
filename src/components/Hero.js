import { HERO_CONTENT } from "assets/data"
import profileImage from "assets/profile_image.jpg"
import { motion } from "framer-motion"

const Hero = () => {
    const animationLeft = (delay) => ({
        invisible: { x: -100, opacity: 0 },
        visible: {
            x: 0, opacity: 1, transition: { duration: 0.5, delay: delay }
        },
    })

    const animationRight = (delay) => ({
        invisible: { x: 100, opacity: 0 },
        visible: {
            x: 0, opacity: 1, transition: { duration: 0.5, delay: delay }
        },
    })

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-36">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
                            variants={animationLeft(0.2)} initial="invisible" animate="visible"
                        >
                            Nguyễn Vĩnh Tiến
                        </motion.h1>
                        <motion.span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
                            variants={animationLeft(0.4)} initial="invisible" animate="visible"                        >
                            Lập trình viên backend
                        </motion.span>
                        <motion.p className="my-2 max-w-xl py-6 font-light tracking-tighter"
                            variants={animationLeft(0.6)} initial="invisible" animate="visible"                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img src={profileImage} alt="profile" className="object-cover rounded-xl h-[500px] w-[470px]"
                            variants={animationRight(0.6)} initial="invisible" animate="visible"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero