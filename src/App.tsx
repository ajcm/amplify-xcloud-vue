import { Route, Routes } from 'react-router-dom';

import Home from "./components/Home"

import One from "./components/One"
import Two from "./components/Two"



function App() {


  return (
    <div>
      <h3>Links</h3>
      <Routes>
        <Route path="" element={<One />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
      </Routes>
      <Home></Home>
    </div>
  );
}

export default App;
