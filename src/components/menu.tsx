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
        {img: Measure, name: 'My objects'},
        {img: Folder, name: 'Material database'},
        {img: Sketch, name: 'Zinc drawings'},
        {img: Filter, name: 'Settings'},
        {img: Info, name: 'About project'}
    ]
    return(
        <div className={menuState ? "menu_component menu_component_active" : "menu_component"}>
            <div className='menu_component_content'>
                <img src={Close} alt="close" className='close' onClick={() => seMenuState(false)} />
                <div className='menu_points'>
                    <h1>Menu</h1>
                    {menu_points.map((item, index) => (
                        <div key={index} className={menu_points.length - 1 === index ? 'active' : ''}>
                            <img src={item.img} alt={item.name} />
                            {item.name}
                        </div>
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