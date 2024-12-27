import './Home.css'

//COMPONETES
import Header from '../../Componente/Header/Header'
import Headers from '../../Componente/Headers/Headers'
import About from '../../Componente/About/About'
import Footer from '../../Componente/Footer/Footer'
import Cards from '../../Componente/Cards/Cards'

function Home (){
     return (
         <div>
            <Header/>
            <Headers/>
            <Cards/>
            <About/>
            <Footer/>
         </div>
     )
}
export default Home