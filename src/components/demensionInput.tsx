import '../styles/components/demensionInput.scss'

export default function DemensionInputelect({label, numb, setNumb, min} : {label: boolean; numb: number; setNumb: any; min: number}){
    return(
        <div className="demension_input_component">
            <div className={label ? 'input' : 'naked_input'}>
                <input value={numb} onChange={(e) => Number(e.target.value) >= min && setNumb(e.target.value)} /> 
                {label && 'cm'}
            </div>
            <button onClick={() => setNumb(Number(numb) + 1)}>+</button>
            <button onClick={() => numb > min && setNumb(Number(numb) - 1)}>-</button>
        </div>
    )
}