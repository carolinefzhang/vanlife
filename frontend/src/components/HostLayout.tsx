import { Outlet } from 'react-router'
import Navbar from './Navbar'

const HostLayout = () => {
    return (
        <div className='p-4'>
            <Navbar links={[
                {url: ".", name: "Dashboard"},
                {url: "income", name: "Income"},
                {url: "vans", name: "Vans"},
                {url: "reviews", name: "Reviews"}
            ]} />
            <Outlet />
        </div>
    )
}

export default HostLayout
