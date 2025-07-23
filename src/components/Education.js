import { EDUCATIONS } from "assets/data"
import { slideLeft, slideUp } from "utils/animate"
import { motion } from "framer-motion"

const Education = () => {
    return (
        <div className="border-b border-gray-700 pb-8">
            <motion.h2 variants={slideLeft({})} whileInView="visible" initial="invisible" className="my-8 text-4xl font-semibold">
                Học thức
            </motion.h2>
            {EDUCATIONS.map((item, i) => {
                return (
                    <motion.div variants={slideUp({ delay: 0.2 * i })} whileInView="visible" initial="invisible" key={item.company} className='relative border-l border-l-white'>
                        <div className="w-3 h-3 rounded-full bg-white absolute right-[calc(100%-6px)]"></div>
                        <div className={`pl-6 ${i < EDUCATIONS.length - 1 && 'pb-8'}`}>
                            <span className="mb-1 font-bold text-2xl">
                                {item.school}
                            </span>
                            <h6 className="my-2">{item.year}</h6>
                            <p className="text-neutral-400 text-lg">{item.branch} - {item.gpa}</p>
                        </div>
                    </motion.div>
                )
            })}
        </div>
    )
}

export default Education