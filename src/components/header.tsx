import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'

import Burger1 from '../assets/header/burger1.svg'
import Burger2 from '../assets/header/burger2.svg'
import Burger3 from '../assets/header/burger3.svg'

import En from '../assets/header/En.svg'
import Pt from '../assets/header/Pt.svg'
import Ru from '../assets/header/Ru.svg'

import '../styles/components/header.scss'

export default function Header({seMenuState} : {seMenuState: any}) {

    function myFunction() {
        document.getElementById("myDropdown")?.classList.toggle("show");
    }

    const langs = [
        {img: En, name: 'En'},
        {img: Pt, name: 'Pt'},
        {img: Ru, name: 'Ru'}
    ],
    [lang, setLang] = useState<{img: any, name: string}>({img: En, name: 'En'})
    

    return(
        <header className="header">
            <div className='header_content'>
                <div className='menu' onClick={() => seMenuState(true)}>
                    {[Burger1, Burger2, Burger3].map((item, index) => (
                        <img src={item} key={index} alt="burger menu" />
                    ))}
                </div>
                <Link to="/ZincHelper" className='logo'>
                    <img src={Logo} alt="logo" className='logo' />
                </Link>
                <div className="dropdown">
                    <button onClick={() => myFunction()} className="dropbtn">
                        <img src={lang.img} alt="en" />
                        <h5>{lang.name}</h5>
                    </button>
                  <div id="myDropdown" className="dropdown-content">
                        {langs.map((item, index) => (
                            item.img !== lang.img &&
                            <button key={index} onClick={() => {setLang(item); myFunction()}}>
                                <img src={item.img} alt="lang" />
                                <h6>{item.name}</h6>
                            </button>
                        ))}
                  </div>
                </div>                
            </div>
        </header>
    )
}