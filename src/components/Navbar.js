import { memo } from "react"
import { icons } from "../common/icons"

const Navbar = memo(() => {
    const { FaGithub } = icons

    return (
        <div className="mb-20 flex items-center justify-start">
            <div className="flex items-center text-2xl">
                <a href="https://github.com/alicezuberg930" target="_blank" rel="noreferrer">
                    <FaGithub size={32} />
                </a>
            </div>
        </div>
    )
})

export default Navbar