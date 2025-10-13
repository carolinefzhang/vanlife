import { NavLink } from 'react-router'
import type { NavbarProps } from '../types'

const Navbar = ({links, className='' }: {links: NavbarProps[], className?: string}) => {
    return (
        <div className={`${className} flex items-center`}>
            {links.map((link: NavbarProps, index: number) => {
                return <NavLink key={index} end={link.url === '.'} to={link.url} className={({ isActive }) => `mr-4 ${isActive ? 'active' : ''}`}>{link.name}</NavLink>
            })}
        </div>
    )
}

export default Navbar