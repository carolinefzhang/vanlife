import { useOutletContext } from 'react-router'

interface Van {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    type: string;
    description: string;
}

const HostVanDetailInfo = () => {
    const van = useOutletContext<Van>();
    return (
        <div className="flex flex-col gap-2">
            <p><span className="font-bold">Name: </span>{van.name}</p>
            <p><span className="font-bold">Type: </span>{van.type}</p>
            <p><span className="font-bold">Description: </span>{van.description}</p>
            <p><span className="font-bold">Visibility: </span>Public</p>
        </div>
    )
}

export default HostVanDetailInfo
