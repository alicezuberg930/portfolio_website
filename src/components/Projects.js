import { PROJECTS } from "assets/data"
import { motion } from "framer-motion"

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Dự án</h2>
            <div>
                {
                    PROJECTS.map((project, i) => {
                        return (
                            <div key={i} className="mb-10 flex flex-wrap gap-4 lg:justify-center">
                                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="w-full lg:w-1/4">
                                    <img src={project.image} className="w-52 h-44 mb-6 rounded border-2" alt={project.title} />
                                </motion.div>
                                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }} className="w-full max-w-xl lg:w-3/4">
                                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                                    <p className="mb-2 text-neutral-400">{project.description}</p>
                                    <p className="mb-4">Link nằm ở: <a target="_blank" href={project.link}>{project.link}</a></p>
                                    {
                                        project.technologies.map(technology => {
                                            return (
                                                <span key={technology} className="mr-2 mt-2 rounded bg-neutral-700 px-2 py-1 text-sm font-medium text-purple-400">
                                                    {technology}
                                                </span>
                                            )
                                        })
                                    }
                                </motion.div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects