import { icons } from "../common/icons"
const Navbar = () => {
    const { FaLaravel, FaGithub } = icons

    return (
        <div className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <FaLaravel size={36} />
            </div>
            <div className="my-6 flex items-center justify-center text-2xl">
                <FaGithub />
            </div>
        </div>
    )
}

export default Navbar