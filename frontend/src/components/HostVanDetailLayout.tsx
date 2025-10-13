import { useParams } from 'react-router'
import Button from './Button.tsx'
import { NavLink, Outlet } from 'react-router-dom'
import { getHostVan } from '../api'
import type { Van } from '../types'
import useFetch from '../hooks/useFetch'
import Navbar from './Navbar.tsx'

const HostVanDetailLayout = () => {
    const params = useParams()
    const { data: van, loading, error } = useFetch<Van>(() => getHostVan(params.id!))

    if (loading) {
        return <div className="p-4"><h1>Loading...</h1></div>
    }
    if (error) {
        return <div className="p-4"><h1>There was an error: {error.message}</h1></div>
    }

    return (
        <>
            <NavLink to=".." relative="path"><Button className="back-button mt-5 mb-5">&larr; Back to all vans</Button></NavLink>
            {van ? (
                <div className="bg-white van-card p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <img src={van.image_url} alt="Van" className="col-span-1 van-img mb-5" />
                        <div className="col-span-1 md:col-span-2 flex flex-col justify-center">
                            <Button className="van-type simple">{van.type}</Button>
                            <h1>{van.name}</h1>
                            <div className="text-lg font-bold mb-5">${van.price}/day</div>
                        </div>
                    </div>
                    <Navbar links={[
                        {url: ".", name: "Details"},
                        {url: "pricing", name: "Pricing"},
                        {url: "photos", name: "Photos"},
                    ]} className='border-b border-gray-300 mb-5 mt-5 pb-2'/>
                    <Outlet context={van}/>
                </div>)
                : (<div>Loading...</div>)
            }
        </>
    )
}

export default HostVanDetailLayout
