import { PROJECTS } from "assets/data"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { slideLeft } from "utils/animate"

const Projects = () => {
    return (
        <>
            <motion.h2 variants={slideLeft({})} whileInView="visible" initial="invisible" className="my-8 text-4xl font-semibold">
                Dự án
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {
                    PROJECTS.map((project, i) => {
                        return (
                            <motion.div key={i} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 60 }} transition={{ duration: 0.5, delay: 0.2 * i }} className="bg-[oklch(14.5%,0,0)] flex flex-col gap-6 rounded-xl border border-gray-700 py-6 shadow-sm group h-full overflow-hidden pt-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                <div className="aspect-video">
                                    <img src={project.image} className="h-full object-cover" alt={project.title} />
                                </div>
                                <div className="px-4">
                                    <h6 className="mb-2 font-semibold text-xl">{project.title}</h6>
                                    <div className="mb-2 text-neutral-400">{project.description}</div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map(technology => (
                                            <span key={technology} className="rounded bg-neutral-700 px-2 py-1 text-sm font-medium text-white h-fit">
                                                {technology}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="px-4 mt-auto">
                                    {/* <Link to={project.link} className="border-gray-700 inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none bg-background hover:bg-black hover:text-gray-300 border h-9 px-4 py-2 w-full">
                                        Xem thêm
                                    </Link> */}
                                    <a href={project.link} target="_blank" className="border-gray-700 inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none bg-background hover:bg-black hover:text-gray-300 border h-9 px-4 py-2 w-full">
                                        Xem thêm
                                    </a>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Projects