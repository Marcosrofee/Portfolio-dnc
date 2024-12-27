import './Footer.css'
//ASSETS
import Git from '../../assets/Git.svg'
import Lin from '../../assets/Linkedin.svg'
import Fig from '../../assets/Figma.svg'

function Footer (){
      return(
             <footer>
                <div className="footer-contact">
                             <h5>Meu contato: <br />14 997561971 </h5>
                       <div>
                         <h6>Email:</h6>  
                           <p>Marcroger61@gmail.com</p>

                       </div>
                         
               </div>
             <div className="icon">
                    <a href=" https://github.com/"><img src={Git}  alt="" srcset="" />         </a> 
                    <a href="linkedin.com/in/marcos-rogerio-b34b4b219"> <img src={Lin} alt="" srcset="" />  </a>    
                    <a href="https://www.figma.com/files/team/1012217658664074556/recents-and-sharing?fuid=1012217653781994010">   <img src={Fig} alt="" srcset="" /></a> 
              </div>      
            
        </footer>
     )
}
export default Footer