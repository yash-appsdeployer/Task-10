import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import PageOne from './Components/PageOne';
import PageTwo from './Components/PageTwo';
import NavMenu from './Components/NavMenu';
import { useState } from 'react';
import FForm from './Components/FForm';

function App() {

  const [A, setA] = useState(0);
  const [B, setB] = useState(0);
  const clickA = () => {
    setA(A + 1);
  }
  const clickB = () => {
    setB(B + 1);
  }
  let decA = () => {
    setA(A - 1);
  }
  let decB = () => {
    setB(B - 1);
  }

  if (A & B <= 0) {
    decA = () => setA(1);
    decB = () => setB(1);
  }
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path='/' element={<Home A={A} B={B} clickA={clickA} clickB={clickB} />} />
        <Route path='/a' element={<PageOne A={A} B={B} clickA={clickA} clickB={decB} />} />
        <Route path='/b' element={<PageTwo A={A} B={B} clickA={decA} clickB={clickB} />} />
        <Route path='/form' element={<FForm />} />
      </Routes>
    </div>
  );
}

export default App;
