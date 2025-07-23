import { techStacks } from "assets/data"
import { motion } from "framer-motion"
import { slideLeft } from "utils/animate"

const Techstack = () => {
    return (
        <div className="border-b border-gray-700 pb-8">
            <motion.h2 variants={slideLeft({})} whileInView="visible" initial="invisible" className="my-8 text-4xl font-semibold">
                Kỹ năng
            </motion.h2>
            <div className="flex flex-col gap-4">
                <motion.span className="mb-1 font-normal text-base lg:text-lg text-normal">
                    Đây là tập hợp những công nghệ mà tôi sử dụng, bao gồm ngôn ngữ lập trình, frameworks, thư viện và công cụ.
                </motion.span>
                {techStacks.map((tech, i) => (
                    <motion.div variants={slideLeft({ delay: 0.2 * i })} whileInView="visible" initial="invisible" key={tech.type}>
                        <span className="mb-2.5 text-xl font-semibold tracking-tight lg:text-2xl">{tech.type}</span>
                        <div className="flex flex-wrap gap-4 mt-2">
                            {tech.items.map(item => (
                                <div className="w-fit justify-center rounded-lg border whitespace-nowrap flex items-center gap-2 px-3 py-2 text-lg font-medium [&>svg]:size-6"
                                    style={{ color: item.color, borderColor: item.color }}
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Techstack