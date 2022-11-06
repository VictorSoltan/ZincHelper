import { useState } from 'react'
import Select from '../components/select'
import DemensionInput from '../components/demensionInput'
import Close from '../assets/close.svg'

import Frame1 from '../assets/Frame2.svg'
import Frame2 from '../assets/Frame3.svg'

import '../styles/components/modal.scss'

export default function Modal({modalState, setModalState, gutterType, setGutterType, gutters_dimensions} : {modalState: boolean; setModalState: any; gutterType: number; setGutterType: any; gutters_dimensions: Array<any>}){


    const guttersSelect = [ Frame1, Frame2 ] 

    return(
        <div className="modal_component">
            <div className="background" onClick={() => setModalState(!modalState)} />
            <section>
                <img src={Close} alt="close" className='close' onClick={() => setModalState(!modalState)} />
                <h2>
                    Gutters
                    <span> type:</span>
                </h2>
                <div className="frames">
                    {guttersSelect.map((item, index) => (
                        <div className='frame_window' onClick={() => setGutterType(index)}>
                            <Select selected={gutterType===index} key={index} image={item} />
                        </div>
                    ))}
                </div>
                <div className='dimensions'>
                    {gutters_dimensions.map((item, index) => (
                            gutterType === 1&&index !== 3 ?
                            <span key={index}>
                                {item.name}
                                <DemensionInput numb={item.value} setNumb={item.setValue} />
                            </span> :
                            gutterType === 0 &&
                            <span key={index}>
                                {item.name}
                                <DemensionInput numb={item.value} setNumb={item.setValue} />
                            </span>
                    ))}
                </div>
                <button onClick={() => setModalState(!modalState)}  className='blue_button'>Save</button>
            </section>
        </div>
    )
}