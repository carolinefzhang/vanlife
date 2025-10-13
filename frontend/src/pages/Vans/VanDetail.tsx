import { useParams } from 'react-router'
import Button from '../../components/Button.tsx'
import { NavLink, useLocation } from 'react-router-dom'
import { getVan } from '../../api'
import type { Van } from '../../types'
import useFetch from '../../hooks/useFetch'

const VanDetail = () => {
    const params = useParams()
    const location = useLocation()
    const search = location.state?.type || "all"
    
    if (!params.id) {
        return <div className="p-4"><h1>Van ID not found</h1></div>
    }
    
    const { data: van, loading, error } = useFetch<Van>(() => getVan(params.id!))

    if (loading) {
        return <div className="p-4"><h1>Loading...</h1></div>
    }
    if (error) {
        return <div className="p-4"><h1>There was an error: {error.message}</h1></div>
    }

    return (
        <div className="p-4">
            <NavLink to={`..${location.state?.search}`} relative="path"><Button className="back-button mt-5 mb-5">&larr; Back to {search} vans</Button></NavLink>
            {van ? (<div className="van-detail-card">
                <img src={van.image_url} alt="Van" className="van-img mb-5" />
                <Button className="van-type simple">{van.type}</Button>
                <h1>{van.name}</h1>
                <div className="text-lg font-bold mb-5">${van.price}/day</div>
                <p className="van-detail-description mb-5">{van.description}</p>
                <Button className="yellow-button">Rent this van</Button>
            </div>)
                : (<div>Loading...</div>)
            }
        </div >
    )
}

export default VanDetail
