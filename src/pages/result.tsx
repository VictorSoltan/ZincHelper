import { useState, useEffect, useCallback, useRef } from 'react';
import Background from '../assets/result/Frame7.svg'
import Logo from '../assets/logo.svg'

import Vector0 from '../assets/result/Vector26.svg'
import Vector1 from '../assets/result/Vector27.svg'
// import { toPng } from 'html-to-image';
import html2canvas from "html2canvas";

import '../styles/pages/result.scss'
export default function SecondStep({arr, arr2} : {arr: Array<any>, arr2: Array<any>}){

    useEffect(() => {
        const fetchData = async () => {
            console.log(arr)
            let result_page = document.querySelector('.result_page') as any
            result_page.style.display = 'flex'
            await onButtonClick()
            result_page.style.display = 'none'
        }

        if(arr.length||arr2.length){
            fetchData()
        }
    }, [arr])

    const 
        dimensions = [
            {name: 'Height №1 :'},
            {name: 'Length №2 :'},
            {name: 'Sheet width :'}
        ],
        ref = useRef<HTMLDivElement>(null),
        
        onButtonClick = useCallback( async () => {
            if (ref.current === null) {
              return
            }
        
            // await toPng(ref.current, { cacheBust: true, })
            //   .then((dataUrl) => {
            //     const link = document.createElement('a')
            //     link.download = 'my-image-name.png'
            //     link.href = dataUrl
            //     link.click()
            //   })
            //   .catch((err) => {
            //     console.log(err)
            //   })

              await html2canvas(ref.current, {
                // // dpi: 144,
                backgroundColor: "#FFFFFF",
                // allowTaint: false,
                // taintTest: false,
            })
                .then((canvas) => {
                    console.log(canvas);
                    canvas.style.display = 'none';
                    var image = canvas.toDataURL("png")
                    var a = document.createElement("a");
                    a.setAttribute('download', 'myImage.png');
                    a.setAttribute('href', image);
                    a.click();
        }              )
          }, [ref])     

    return(
        <div className="result_page" ref={ref} style={{ backgroundImage: `url(${Background})` }}>
            <h1>Trapeira № 1</h1>
            <div className='stats'>
                <header>
                    <h2>Lateral</h2>
                    <h2>lado</h2>
                    <h2>Quantidade</h2>
                </header>
                <section>
                    {arr.map((item, index) => (
                        <div className='item' key={index} style={{background: index%2===0 ? '#F7EBEB' : 'rgba(125, 170, 211, 0.5)' }}>
                            <span className='values'>
                                <div>
                                    <h6>№{index+1}  :</h6>
                                    <h6>{item.value + ' x ' + item.value1 }</h6>
                                </div>
                                <img src={index === 0 ? Vector0 : Vector1} alt="" />
                            </span>
                            <span className='names'>
                                <h3>Esquerda</h3>
                                <h3>Direita</h3>
                            </span>
                            <span className='lists'>
                                <div>
                                    {Array.from(Array(arr.length).keys()).map((item, index) => (
                                        <h6>{index}</h6>
                                    ))}
                                </div>
                                <div>
                                    {Array.from(Array(arr.length).keys()).map((item, index) => (
                                        <h6>{index}</h6>
                                    ))}                                    
                                </div>
                            </span>
                        </div>
                    ))}
                </section>
                <footer>
                    Total: {(arr.reduce((partialSum, a) => partialSum + Number(a.value) + Number(a.value1), 0) / arr.length).toFixed(2)}
                </footer>
            </div>
            <h1>Telhado das trapeiras   № 1</h1>
            <div className='stats2'>
                <header>
                    <h2>Lateral</h2>
                    <h2>Quantidade</h2>
                </header>
                <section>
                    {arr2.map((item, index) => (
                        <div className='item' key={index} style={{background: index%2===0 ? '#F7EBEB' : 'rgba(125, 170, 211, 0.5)' }}>
                            <span className='values'>
                                <h6>{item}</h6>
                                <img src={index === 0 ? Vector0 : Vector1} alt="" />
                            </span>
                            <span className='lists'>
                                {arr2.length-1 === index ?
                                    <div>
                                        {Array.from(Array(arr.length*6).keys()).map((item, index) => (
                                            <h6>{index}</h6>
                                        ))}
                                    </div> :
                                <>
                                    <div>
                                        {Array.from(Array(arr.length).keys()).map((item, index) => (
                                            <h6>{index}</h6>
                                        ))}
                                    </div>
                                    <div>
                                        {Array.from(Array(arr.length).keys()).map((item, index) => (
                                            <h6>{index}</h6>
                                        ))}                                    
                                    </div>                                
                                </>}
                            </span>
                        </div>
                    ))}
                </section>
                <footer>
                    Total: 
                </footer>
            </div>            
            <img src={Logo} alt="Logo" className='logo' />
            {/* <button onClick={() => onButtonClick()}>Click me</button>             */}
        </div>
    )
}