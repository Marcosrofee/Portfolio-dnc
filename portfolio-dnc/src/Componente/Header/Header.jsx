import './Header.css'
import { Link } from 'react-router-dom'

import { useState } from 'react'

//ASSETS
import Git from '../../assets/Git.svg'
import Lin from '../../assets/Linkedin.svg'
import Button from '../Button/Button'

function Header (){
    const [isOpen, setIsOpen] = useState(false)
   
     return(
         <header>
             <div  className="mobile-menu" onClick={()=> setIsOpen(!isOpen)}>
                  <Button buttonStyle="btn-secondary" >Menu</Button>
              </div>
           
              <nav className={`${isOpen ? 'open' : '' }`}>
            
                 
             <ul>
                 <li> <Link to="/Projetos">Projetos</Link></li>
                  <li><Link to="/tecnologia">Tecnologias </Link>  </li>    
                  <li><Link to="SobreMin" >Sobre min</Link>  </li>  
                     
             </ul>
             <div className="icones">
                
                  
                <a href=" https://github.com/"><img src={Git}  alt="" srcset="" />         </a> 
           
                <a href="linkedin.com/in/marcos-rogerio-b34b4b219"> <img src={Lin} alt="" srcset="" />  </a>
             </div>
             
              
          
         </nav>






</header>

        
     )
}
export default Header