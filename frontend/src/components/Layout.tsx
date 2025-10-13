import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

const Layout = () => {
    return (
        <div className="flex flex-col min-h-svh">
            <header className="fixed top-0 w-full p-5 z-20 bg-white">
                <Header />
            </header>
            <div className="flex-grow overflow-auto pt-22 pb-16 z-10">
                <Outlet />
            </div>
            <footer className="fixed bottom-0 w-full h-16 flex items-center justify-center z-20">
                <Footer />
            </footer>
        </div>
    )
}

export default Layout
