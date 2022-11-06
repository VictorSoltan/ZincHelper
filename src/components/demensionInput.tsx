import '../styles/components/demensionInput.scss'

export default function DemensionInputelect({numb, setNumb} : {numb: number; setNumb: any}){
    return(
        <div className="demension_input_component">
            <div className='input'>
                <input value={numb} onChange={(e) => setNumb(e.target.value)} /> 
                cm
            </div>
            <button onClick={() => setNumb(numb + 1)}>+</button>
            <button onClick={() => numb >= 1 && setNumb(numb - 1)}>-</button>
        </div>
    )
}