import Footer from '../../Componente/Footer/Footer'
import Header from '../../Componente/Header/Header'
import Sliders from '../../Componente/Sliders/Sliders'
import './Tecnologia.css'


function Tecnologia (){
     return(
         <div>
             <Header/>
                 <div className="tecn" >
                     <h1 data-text="TECNOLOGIA"></h1>   
                 </div> 
                  <Sliders/>
                 <div className="CardA">
                     <div className ="card-a"> 
                         <h2>Eu tive experiências com</h2>
                             <p>
                               |  Firebase Database <br />
                               |  MySQL Database <br />
                               |  GIT, GitHub, Bitbucket <br />
                               |  Coding PHP  <br />
                               |  Figma, Adobe XD, Sketch <br />
                               |  CSS Preprocessors<br />
                               |  Digital Marketing <br />
                               |  Coding Python (Django)
                             </p>

                     </div>
                     <div className="card-a"> 
                     <h2>Eu trabalho e estudo sobre </h2>
                             <p>
                               |  Coding React.js <br />
                               |  Coding JavaScript <br />
                               |   Coding TypeScript <br />
                               |   Studying Node.js basics <br />
                               |   Studying API RESTful <br />
                               |   Studying User Experience


                             </p>


                     </div>
                     <div className="card-a"> 
                     <h2>Tenho anos de experiência com</h2>
                             <p>
                               |  Coding HTML5    <br />
                               |  Coding CSS         <br />
                               |  Coding WordPress <br />
                               |  Coding JavaScript            <br />
                               |  Using Elementor <br />
                               |  Using adobe Package      <br />
                               |  Creating Brand and Logo      <br />
                               |  Creating User Interface
                             </p>


                     </div>
                       
                 </div> 
                   
                     <Footer/>
                    

         </div>
         
     )
}
export default Tecnologia