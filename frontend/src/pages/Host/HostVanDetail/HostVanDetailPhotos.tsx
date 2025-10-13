import { useOutletContext } from 'react-router'
import type { Van } from '../../../types';

const HostVanDetailPhotos = () => {
    const van = useOutletContext<Van>();
    return (
        <img src={van.image_url} className='van-img w-xs' alt={van.name} />
    )
}

export default HostVanDetailPhotos
