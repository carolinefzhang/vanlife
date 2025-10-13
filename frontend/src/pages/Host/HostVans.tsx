import { NavLink } from 'react-router-dom'
import { getHostVans } from '../../api'
import type { Van } from '../../types'
import useFetch from '../../hooks/useFetch'

const HostVans = () => {
    const { data: vans, loading, error } = useFetch<Van[]>(getHostVans)
    if (loading) {
        return <div className="p-4"><h1>Loading...</h1></div>
    }
    if (error) {
        return <div className="p-4"><h1>There was an error: {error.message}</h1></div>
    }
    return (
        <>
            <h1 className='heading'>Your listed vans</h1>
            {!vans || vans.length === 0 ? <div>No vans found</div> :

                <div className="grid grid-cols-1 gap-6 mt-6">
                    {vans.map((van: Van) => {
                        return (
                            <NavLink to={`/host/vans/${van.id}`} key={van.id}>
                                <div key={van.id} className="grid grid-cols-1 md:grid-cols-6 gap-10 bg-white van-card p-4">
                                    <img className="col-span-1 md:col-span-2 van-img" src={van.image_url} alt={van.name} />
                                    <div className="col-span-1 md:col-span-4 flex justify-between items-center">
                                        <div>
                                            <div className="text-lg font-bold mb-2">{van.name}</div>
                                            <div><span className="text-lg font-bold">${van.price}</span>/day</div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })}
                </div>
            }
        </>
    )
}

export default HostVans
