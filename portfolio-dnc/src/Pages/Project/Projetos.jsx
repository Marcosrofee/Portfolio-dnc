
//COMPONENTES

import Cards from "../../Componente/Cards/Cards"
import Footer from "../../Componente/Footer/Footer"
import Header from "../../Componente/Header/Header"


function Projetos(){
     return (
         <div>
             <Header/>    
                 <div>
                     <h1>Meus Projetos</h1>
                          <Cards/> 
                        
                 </div>     

                 <Footer/> 
         </div>
     )
}
export default Projetos