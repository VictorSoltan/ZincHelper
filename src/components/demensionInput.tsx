import '../styles/components/demensionInput.scss'

export default function DemensionInputelect({label, numb, setNumb} : {label: boolean; numb: number; setNumb: any}){
    return(
        <div className="demension_input_component">
            <div className={label ? 'input' : 'naked_input'}>
                <input value={numb} onChange={(e) => setNumb(e.target.value)} /> 
                {label && 'cm'}
            </div>
            <button onClick={() => setNumb(Number(numb) + 1)}>+</button>
            <button onClick={() => numb >= 1 && setNumb(Number(numb) - 1)}>-</button>
        </div>
    )
}