import './Cards.css'
import Butonn from '../../Componente/Button/Button'

//PUBLIC
import Aq from  '../../assets/Aq.png'
import Boot from '../../assets/boots.png'
import Dnc from '../../assets/Dnc.png'
import Prev from '../../assets/Prev.png'

function Cards (){
   return (
     
     <div>
       <div className="card" >
         <div className="Cards"   >
           <img src={Aq} width={410} alt="" srcset="" />   
             <div>
               <h6>PROJETO 1</h6>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                   <a href="https://projetolandingpages.netlify.app/"> <Butonn buttonStyle="btn-primary" ><p>Saiba Mais </p></Butonn>                  </a> 
             </div>     
         </div>
         <div className="Cards">
           <img src={Boot} width={390} height={230} alt="" srcset="" />
           <div>
               <h6>PROJETO 2</h6>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                   <a href="https://bootcampss.netlify.app/"><Butonn buttonStyle="btn-primary" ><p>Saiba Mais </p></Butonn>     </a>  
             </div> 
         </div>
       </div>

       <div className="card">
         <div className="Cards"   >
           <img src={Dnc} width={420} alt="" srcset="" />     
           <div>
               <h6>PROJETO 3</h6>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                   <a href="https://landingpage-00.netlify.app/">   <Butonn buttonStyle="btn-primary" ><p>Saiba Mais </p></Butonn>   </a> 
             </div>    
         </div>
         <div className="Cards"   >
           <img src={Prev} width={420} alt="" srcset="" />    
           <div>
               <h6>PROJETO 4</h6>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                   <a href="https://weathersnet.netlify.app">  <Butonn buttonStyle="btn-primary" ><p>Saiba Mais </p></Butonn>    </a> 
             </div>     
         </div> 

       </div>
     </div>
     
     
     )
}
export default Cards