import { EXPERIENCES } from "assets/data"
import { motion } from "framer-motion"
import { slideLeft, slideUp } from "utils/animate"

const Experience = () => {
    return (
        <div className="border-b border-gray-700 pb-8">
            <motion.h2 variants={slideLeft({})} whileInView="visible" initial="invisible" className="my-8 text-4xl font-semibold">
                Kinh nghiệm
            </motion.h2>
            {EXPERIENCES.map((item, i) => {
                return (
                    <motion.div variants={slideUp({ delay: 0.2 * i })} whileInView="visible" initial="invisible" key={item.company} className='relative border-l border-l-white'>
                        <div className="w-3 h-3 rounded-full bg-white absolute right-[calc(100%-6px)]"></div>
                        <div className={`pl-6 flex flex-col gap-2 ${i < EXPERIENCES.length - 1 && 'pb-8'}`}>
                            <span className="font-bold text-2xl">
                                {item.company} ({item.year})
                            </span>
                            <h6 className="">{item.role}</h6>
                            <p className="text-neutral-400">{item.description}</p>
                            <div className="flex flex-wrap">
                                {item.technologies.map(technology => (
                                    <span key={technology} className="mr-2 mt-2 rounded bg-neutral-700 px-2 py-1 text-sm font-medium text-purple-400">
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )
            })}
        </div>
    )
}

export default Experience