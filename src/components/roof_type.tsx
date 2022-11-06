import Select from '../components/select'
import DemensionInput from '../components/demensionInput'
import Close from '../assets/close.svg'

import Frame0 from '../assets/trapeira_flat.svg'
import Frame1 from '../assets/trapeira_circle.svg'
import Frame2 from '../assets/trapeira_flat_double.svg'

import '../styles/components/roof_type.scss'

export default function RoofType({roofTypeState, setRoofTypeState, roof_dimensions} : {roofTypeState: boolean; setRoofTypeState: any; roof_dimensions: Array<any>}){

    const dimensions = [
        {name: 'Roof length :'},
        {name: 'Add to length :'}
    ]

    return(
        <div className="roof_type_component">
            <div className="background" onClick={() => setRoofTypeState(!roofTypeState)} />
            <section>
                <img src={Close} alt="close" className='close' onClick={() => setRoofTypeState(!roofTypeState)} />
                <h2>
                    Roof
                    <span> type:</span>
                </h2>
                <div className="frames">
                    <Select selected={true} image={Frame0} />
                    <Select selected={false} image={Frame1} />
                    <Select selected={false} image={Frame2} />
                </div>
                <div className='dimensions'>
                    {roof_dimensions.map((item, index) => (
                        <span key={index}>
                            <h3>{item.name}</h3>
                            <DemensionInput numb={item.value} setNumb={item.setValue} />
                        </span>
                    ))}
                </div>
                <button onClick={() => setRoofTypeState(!roofTypeState)} className='blue_button'>Save</button>
            </section>
        </div>
    )
}