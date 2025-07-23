import { icons } from "../common/icons"
const Navbar = () => {
    const { FaGithub } = icons

    return (
        <div className="mb-20 flex items-center justify-start py-6">
            <div className="my-6 flex items-center text-2xl">
                <a href="https://github.com/alicezuberg930" target="_blank">
                    <FaGithub size={32} />
                </a>
            </div>
        </div>
    )
}

export default Navbar