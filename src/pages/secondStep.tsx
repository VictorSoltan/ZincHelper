import { useEffect, useState } from 'react';
import Select from '../components/select';
import RoofType from '../components/roof_type'
import Modal from '../components/modal'
import DemensionInput from '../components/demensionInput'
import Trapeira from '../assets/trapeira_dimens.svg'

import GreyV from '../assets/grey_v.svg'
import Result from '../pages/result'

import '../styles/pages/secondStep.scss'
export default function SecondStep({structUnderl} : {structUnderl: number}){

    const 
        [numbHeight, setNumbHeight] = useState<number>(0),
        [numbWidth, setNumbWidth] = useState<number>(0),
        [numbWidthFirst, setNumbWidthFirst] = useState<number>(0),
        [numbWidthOther, setNumbWidthOther] = useState<number>(0),
        [amount, setAmount] = useState<number>(1), 

        [gutterType, setGutterType] = useState<number>(0), 

        dimensions = [
            {name: 'Height №1 :', min: 0, label: true, value: numbHeight, setValue: setNumbHeight},
            {name: 'Length №2 :', min: 0, label: true, value: numbWidth, setValue: setNumbWidth},
            {name: 'Sheet width :', min: 0, label: true, value: numbWidthFirst, setValue: setNumbWidthFirst},
            {name: 'Other width :', min: 0, label: true, value: numbWidthOther, setValue: setNumbWidthOther},
            {name: 'Amount :', min: 1, label: false, value: amount, setValue: setAmount}
        ],
        [checked0, setChecked0] = useState<boolean>(false),
        [checked1, setChecked1] = useState<boolean>(false),
        [result, setResult] = useState<Array<any>>([]),
        [secondResult, setSecondResult] = useState<Array<any>>([])

        const
            [roofLength, setRoofLength] = useState<number>(0),
            [addToLengthRoof, setAddToLengthRoof] = useState<number>(0),

        roof_dimensions = [
            {name: 'Roof length :',  value: roofLength, setValue: setRoofLength},
            {name: 'Add to Length :',  value: addToLengthRoof, setValue: setAddToLengthRoof}
        ]        

        const
            [numb1, setNumb1] = useState<number>(0),
            [numb2, setNumb2] = useState<number>(0),
            [numb3, setNumb3] = useState<number>(0),
            [numb4, setNumb4] = useState<number>(0),
            [addToLength, setAddToLength] = useState<number>(Number((Math.sqrt(numbHeight**2 + numbWidth**2)).toFixed(2))), 

        gutters_dimensions = [
            {name: '№1 :',  value: numb1, setValue: setNumb1},
            {name: '№2 :',  value: numb2, setValue: setNumb2},
            {name: '№3 :',  value: numb3, setValue: setNumb3},
            {name: '№4 :',  value: numb4, setValue: setNumb4},
            {name: 'Add to Length :',  value: addToLength, setValue: setAddToLength},
        ]

    useEffect(() => {
        setAddToLength(
            Number((Math.sqrt(numbHeight**2 + numbWidth**2)).toFixed(2))
            + numb1 + numb2 + numb3 + numb4
        )
    }, [numbHeight, numbWidth, numb1, numb2, numb3, numb4])

    useEffect(() => {
        setNumb1(0)
        setNumb2(0)
        setNumb3(0)
        setNumb4(0)
    }, [gutterType])

    
    function getResults(){
            let 
                height = Number(parseFloat(numbHeight as any)),
                width = Number(parseFloat(numbWidth as any)),
                w1 = Number(parseFloat(numbWidthFirst as any)),
                w2 = Number(parseFloat(numbWidthOther as any)),
            material = [],
        
            currentWeight = w1;
            if(w2 === 0) w2 = NaN

            material.push({
                width: w1,
                height: height
            });
        
            while(currentWeight < width) {
                let currentHeight = (height*(width-currentWeight))/width;
        
                if( (currentWeight + w2) > width) {
                    w2 = width - currentWeight;
                }
        
                currentWeight += w2;
        
                material.push({
                    width: w2,
                    height: currentHeight
                });
                console.log('sdfsd')
            }
            let newArr = []

        for(let i = 0; i < material.length; i++) {
            let nextHeight = ( (i+1) === material.length) ? material[i].width.toFixed(2) : material[i+1].height.toFixed(2);
            newArr.push({value: material[i].height.toFixed(2), value1: nextHeight})
            console.log(material[i].height.toFixed(2) + ' x ' + nextHeight)
        }
        setResult(newArr)
        let structUnderlay = structUnderl*newArr.length

        let gutters = [] as Array<number>;
        gutters_dimensions.forEach(function (el, i)  {
            if(((gutterType === 1 && i !== 3) || gutterType === 0 )&&gutters_dimensions.length-1!==i){
                gutters.push(el.value)
            }
        })
        roof_dimensions.forEach(el => (
            structUnderlay = structUnderlay + Number(el.value)
        ))        
        console.log(structUnderlay, addToLength, gutters)
        setSecondResult([structUnderlay, gutters])
    }

    return(
        <div className="second_step_page">
            <h1 className="blue_label">Step: 2</h1>
            <h1>Dimensions</h1>
            <div className='select'>
                <Select image={Trapeira} selected={true}/>
            </div>
            <div className='select_value'>
                {dimensions.map((item, index) => (
                    <span className='input_value' key={index}>
                        <h3>{item.name}</h3>
                        <DemensionInput min={item.min} label={item.label} numb={item.value} setNumb={item.setValue} />
                    </span>
                ))}                
                <span className='input_value'>
                    <h3>Roof №3 :</h3>
                    <span onClick={() => setChecked0(!checked0)}  className={checked0 ? 'radio active' : 'radio'} >
                        {roofLength>0&&addToLengthRoof>0  && <img src={GreyV} alt="vector" />}
                    </span>                
                </span>
            </div>
            <div className='gutters'>
                <span onClick={() => setChecked1(!checked1)}  className={checked1 ? 'radio active' : 'radio'} >
                    {numb1>0&&numb2>0&&numb3>0&&numb4>0 && <img src={GreyV} alt="vector" />}
                </span>                    
                <h2>Add Gutters</h2>
            </div>

            <button onClick={() => getResults()} className='blue_button'>Result</button>
            {checked0 && <RoofType roofTypeState={checked0} setRoofTypeState={setChecked0} roof_dimensions={roof_dimensions} />}
            {checked1 && <Modal modalState={checked1} setModalState={setChecked1} gutterType={gutterType} setGutterType={setGutterType} gutters_dimensions={gutters_dimensions} />}
            <Result arr={result} arr2={secondResult} gutterType={gutterType} amount={amount} />
        </div>
    )
}