import { useState } from 'react';

import Vector from '../assets/Vector.svg'
import '../styles/components/select.scss'

export default function Select({image, selected} : {image: any; selected: boolean}){
    const [checked, setChecked] = useState<boolean>(false);

    return(
        <div onClick={() => setChecked(!checked)} className={selected ? 'select_component select_component_active' : 'select_component'}>
            <span className={selected ? 'active' : ''} >
                {selected ? <img src={Vector} alt="vector" /> : null}
            </span>
            <img src={image} alt="trapeira" className='trapeira' />
        </div>
    )
}