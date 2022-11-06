import { useState } from 'react'
import Select from '../components/select'
import DemensionInput from '../components/demensionInput'
import Trapeira from '../assets/trapeira.svg'
import { Link } from 'react-router-dom'

import '../styles/pages/firstStep.scss'
export default function FirstStep({structUnderl, setStructUnderl} : {structUnderl: number; setStructUnderl: any}){

    return(
        <div className="first_step_page">
            <h1 className="blue_label">Step: 1</h1>
            <h1>Element selection</h1>
            <div className='select'>
                <Select image={Trapeira} selected={true} />
            </div>
            <div className='select_value'>
                <DemensionInput label={true} numb={structUnderl} setNumb={setStructUnderl} />
                <h3>structural underlay</h3>
            </div>
            <Link to="/second_step" className='blue_button'>Next step</Link>
        </div>
    )
}