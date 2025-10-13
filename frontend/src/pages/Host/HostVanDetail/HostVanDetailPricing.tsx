import { useOutletContext } from 'react-router'

interface Van {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    type: string;
    description: string;
}

const HostVanDetailPricing = () => {
    const van = useOutletContext<Van>();
    return (
        <div><span className="text-lg font-bold">${van.price}</span>/day</div>
    )
}

export default HostVanDetailPricing
