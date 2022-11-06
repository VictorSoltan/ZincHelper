import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import './App.scss';

import Header from './components/header'
// pages 
import FirstStep from './pages/firstStep'
import SecondStep from './pages/secondStep'

import About from './pages/about'

import Menu from './components/menu'

import Background from './assets/background.png'

import Result from './pages/result'


function App() {

  const 
    [menuState, seMenuState] = useState<boolean>(false),
    [structUnderl, setStructUnderl] = useState<number>(0)

  return (
    <div className="App" style={{ backgroundImage: `url(${Background})` }}>
      {/* <Result /> */}
      
      <Header seMenuState={seMenuState}/>
      <Routes>
        <Route path="/ZincHelper" element={<FirstStep structUnderl={structUnderl} setStructUnderl={setStructUnderl} />} /> 
        <Route path="/second_step" element={<SecondStep structUnderl={structUnderl} />} /> 
        <Route path="/about" element={<About />} /> 
      </Routes>
      <Menu menuState={menuState} seMenuState={seMenuState} />
    </div>
  );
}

export default App;
