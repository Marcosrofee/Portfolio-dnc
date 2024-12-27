import Button from '../Button/Button'
import './Headers.css'

 

function Headers (){
     return(
         <div >
             <h1>Olá, eu sou Marcos <br />Desenvolvedor Full-stack </h1> 
                 <p>Sou mais do que um apaixonado por Front-End. Minha experiência com design de interface me torna extremamente <br />criterioso com
                     alinhamentos, margens, cores e muitos outros recursos em CSS. Hoje trabalho com projetos em um mundo inteiro. 
                         Codificando no meu
                           <br />  escritório em casa, em um tranquilo interior de São Paulo, Brasil.</p>            
             <div>
                 <Button buttonStyle="btn-primary">
                    <p> Saiba Mais   </p> 
                 </Button>
                  
             </div>    
             <div>
                  <h2>Projetos</h2>
              </div>
         </div>
     )
}
export default Headers