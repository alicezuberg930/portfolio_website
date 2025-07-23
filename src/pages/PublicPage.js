import { Outlet } from "react-router-dom"

const PublicPage = () => {
    return (
        <div className='text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
            <div className='fixed top-0 -z-10 h-full w-full'>
                <div className="absolute top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.6),rgba(255,255,255,0))]"></div>
            </div>
            <div className='container mx-auto px-4 py-12'>
                <Outlet />
            </div>
        </div>
    )
}

export default PublicPage