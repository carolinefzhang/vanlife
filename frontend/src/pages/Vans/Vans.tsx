import Button from '../../components/Button.tsx'
import { NavLink, useSearchParams } from 'react-router'
import { getVans } from '../../api'
import type { Van } from '../../types'
import useFetch from '../../hooks/useFetch'

const Vans = () => {
    const { data: vans, loading, error } = useFetch<Van[]>(getVans)

    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get('type');
    const displayVans = typeFilter ? vans?.filter(van => van.type === typeFilter) : vans;

    function handleFilterChange(key: string, value: string|null) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key);
            } else {
                prevParams.set(key, value);
            }
            return prevParams;
        });
    }
    if (loading) {
        return <div className="p-4"><h1>Loading...</h1></div>
    }
    if (error) {
        return <div className="p-4"><h1>There was an error: {error.message}</h1></div>
    }

    return (
        <div className="p-4">
            <h1>Explore our van options</h1>
            <div className="flex justify-between">
                <div><Button onClick={() => handleFilterChange("type", "simple")} className={`mr-4 ${typeFilter === "simple" ? typeFilter : "filter-button"}`}>Simple</Button>
                    <Button onClick={() => handleFilterChange("type", "rugged" )} className={`mr-4 ${typeFilter === "rugged" ? typeFilter : "filter-button"}`}>Rugged</Button>
                    <Button onClick={() => handleFilterChange("type", "luxury" )} className={`mr-4 ${typeFilter === "luxury" ? typeFilter : "filter-button"}`}>Luxury</Button></div>
                {typeFilter && <Button onClick={() => handleFilterChange("type", null )} className="clear-filters">Clear filters</Button>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">
                {
                    displayVans?.map(van => (
                        <NavLink to={`/vans/${van.id}`} state={{search: `?${searchParams.toString()}`, type: typeFilter}} key={van.id}>
                            <div key={van.id} className="van-card">
                                <img src={van.image_url} alt={van.name} className="van-img" />
                                <div className="flex justify-between items-top mb-2">
                                    <div>
                                        <div className="text-lg font-bold mb-2">{van.name}</div>
                                        <Button className={`van-type ${van.type.toLowerCase()}`}>{van.type}</Button>
                                    </div>
                                    <div><span className="text-lg font-bold">${van.price}</span><br />/day</div>
                                </div>

                            </div>
                        </NavLink>
                    ))
                }
            </div>
        </div >
    )
}

export default Vans
