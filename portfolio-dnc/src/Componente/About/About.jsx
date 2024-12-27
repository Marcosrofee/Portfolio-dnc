
import './About.css'
import Bola from '../../assets/Bola.svg'


function About (){
      return(
         <div className="About">
              <h1>Sobre Min</h1>
             <div>
                   
                  <p>2018<span>...................................</span>2019<span>......................................</span>2020<span>.....................................</span>   2021</p>
                    
                    
                    
               <div>
                   <div className="bolas">
                       <img src={Bola} width={1100} className="bola1" alt="" />
                  </div> 
                       
                       
                     </div>
                     <div className="title">
                        <h3>Lorem ipsum dolor sit <br /> 
                            amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor <br />
                            incididunt ut labore et dolore magna aliqua.
                     </h3>
                     <h3>Lorem ipsum dolor sit <br /> 
                            amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor <br />
                            incididunt ut labore et dolore magna aliqua.
                     </h3>
                     <h3>Lorem ipsum dolor sit <br /> 
                            amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor <br />
                            incididunt ut labore et dolore magna aliqua.
                     </h3>
                     <h3>Lorem ipsum dolor sit <br /> 
                            amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor <br />
                            incididunt ut labore et dolore magna aliqua.
                     </h3>

                     </div>


             </div>


         </div>
      )
}
export default About