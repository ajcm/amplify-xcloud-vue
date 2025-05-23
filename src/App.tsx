import { Route, Routes } from 'react-router-dom';

import Home from "./components/Home"

import One from "./components/One"
import Two from "./components/Two"


import MainGrid from "./layout/MainGrid"

function App() {


  return (

      <Routes>
        <Route path="/" element={<MainGrid><Home /></MainGrid>} />
        <Route path="/one" element={<MainGrid><One /></MainGrid>} />
        <Route path="/two" element={<MainGrid><Two /></MainGrid>} />
      </Routes>
  

  );
}

export default App;
