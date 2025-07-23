import { CONTACT, HERO_CONTENT } from "assets/data"
import { motion } from "framer-motion"
import { slideLeft, slideRight } from "utils/animate"

const Hero = () => {
    return (
        <div className="border-b border-gray-700 pb-8">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-2/3">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 className="my-8 text-4xl font-semibold"
                            variants={slideLeft({ delay: 0.2 })} whileInView="visible" initial="invisible"
                        >
                            Về Tôi
                        </motion.h1>
                        <motion.span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
                            variants={slideLeft({ delay: 0.4 })} whileInView="visible" initial="invisible"
                        >
                            Lập trình viên full-stack
                        </motion.span>
                        <motion.p className="my-6 max-w-xl font-light tracking-tighter"
                            variants={slideLeft({ delay: 0.6 })} whileInView="visible" initial="invisible"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.h2 className="text-center text-2xl" variants={slideLeft({})} whileInView="visible" initial="invisible">
                            Thông tin liên lạc
                        </motion.h2>
                        <div className="tracking-tighter">
                            <ul className="text-base leading-7 my-4 ml-6 list-disc [&>li]:mt-2">
                                <motion.li variants={slideLeft({ x: -100, delay: 0.2 })} whileInView="visible" initial="invisible" className="my-4">
                                    {CONTACT.name}
                                </motion.li>
                                <motion.li variants={slideLeft({ x: -90, delay: 0.4 })} whileInView="visible" initial="invisible" className="my-4">
                                    {CONTACT.phoneNo}
                                </motion.li>
                                <motion.li variants={slideLeft({ x: -80, delay: 0.6 })} whileInView="visible" initial="invisible" className="my-4">
                                    {CONTACT.email}
                                </motion.li>
                                <motion.li variants={slideLeft({ x: -70, delay: 0.8 })} whileInView="visible" initial="invisible" className="my-4">
                                    {CONTACT.birthday}
                                </motion.li>
                                <motion.li variants={slideLeft({ x: -60, delay: 1 })} whileInView="visible" initial="invisible" className="my-4">
                                    {CONTACT.address}
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/3">
                    <div className="aspect-[3/4] rounded-xl overflow-hidden">
                        <motion.img src='/assets/about_1.jpg' alt="profile" className="object-cover w-full h-full"
                            variants={slideRight({ delay: 0.6 })} whileInView="visible" initial="invisible"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero