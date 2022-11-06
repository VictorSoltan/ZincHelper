import { Link } from 'react-router-dom'
import Close from '../assets/close.svg'

import Measure from '../assets/menu/measure.svg'
import Folder from '../assets/menu/folder.svg'
import Sketch from '../assets/menu/sketch.svg'
import Filter from '../assets/menu/filter.svg'
import Info from '../assets/menu/info.svg'

import Logo from '../assets/logo.svg'

import '../styles/components/menu.scss'

export default function Menu({menuState, seMenuState} : {menuState: boolean; seMenuState: any}){

    const menu_points = [
        {img: Measure, name: 'My objects', link: '/'},
        {img: Folder, name: 'Material database', link: '/'},
        {img: Sketch, name: 'Zinc drawings', link: '/'},
        {img: Filter, name: 'Settings', link: '/'},
        {img: Info, name: 'About project', link: '/about'}
    ]
    return(
        <div className={menuState ? "menu_component menu_component_active" : "menu_component"}>
            <div className='menu_component_content'>
                <img src={Close} alt="close" className='close' onClick={() => seMenuState(false)} />
                <div className='menu_points'>
                    <h1>Menu</h1>
                    {menu_points.map((item, index) => (
                        <Link to={item.link} key={index} className={window.location.pathname === item.link ? 'active' : ''}>
                            <img src={item.img} alt={item.name} />
                            {item.name}
                        </Link>
                    ))}
                </div>
                <footer>
                    <img src={Logo} alt={'Logo'} />
                    <span>Beta</span>
                </footer>
            </div>
        </div>
    )
}