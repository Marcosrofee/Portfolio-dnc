import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css'


//PAGES
import Home from './Pages/Home/Home'
import Projetos from "./Pages/Project/Projetos";
import Tecnologia from "./Pages/Tecnologia/Tecnologia";
import SobreMin from "./Pages/SobreMin/SobreMin";

function App (){
  

     return (
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Home/>}></Route> 
           <Route path="/Projetos" element={<Projetos/>}></Route> 
           <Route path="/Tecnologia" element={<Tecnologia/>}></Route> 
           <Route path="/SobreMin" element={<SobreMin/>}></Route> 
         </Routes> 
       </BrowserRouter>
  )
}

export default App
