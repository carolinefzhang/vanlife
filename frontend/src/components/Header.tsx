import { Link } from 'react-router'
import Button from './Button'
import '../App.css'
import Navbar from './Navbar'

const Header = () => {
    const navlinks = [
        { url: "host", name: "Host" },
        { url: "about", name: "About" },
        { url: "vans", name: "Vans" },
        { url: "login", name: "Login" }
    ]
    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
                <Link to="/"><div className='text-5xl font-extrabold'>#VANLIFE</div></Link>
            </div>
            <Navbar links={navlinks} />
            <Button onClick={() => {
                localStorage.removeItem("loggedIn")
                window.location.href = "/"
            }}>
                Logout
            </Button>
        </div>
    )
}

export default Header
