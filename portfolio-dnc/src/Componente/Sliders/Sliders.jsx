import './Sliders.css'

import { Swiper, SwiperSlide  } from 'swiper/react';
import { register } from 'swiper/element';
import { useState } from 'react';
import { useEffect } from 'react';



register();

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Sliders (){
    const [slidesPerView, setSlidePerView] = useState(2)
    const data = [
        {id:'1', image:'https://i.pinimg.com/736x/5f/44/a5/5f44a5a057ada029b4593728b3208465.jpg '   },
        {id:'2', image:'https://i.pinimg.com/736x/e1/fa/3c/e1fa3c899e6e24b9b5d885b0d6eb4fde.jpg'   },
        {id:'3', image:'https://i.pinimg.com/736x/5d/96/aa/5d96aa746ea8416fcc42e220ac8a3190.jpg'   },
        {id:'4', image:'https://i.pinimg.com/736x/a5/8e/09/a58e09dde5fe444c01713f694490e362.jpg'   },
        {id:'5', image:'https://i.pinimg.com/736x/56/96/ef/5696ef74dfcfad947a277ba722f99412.jpg'   },    
        {id:'6', image:'https://i.pinimg.com/736x/53/e8/22/53e8223b373d072b6c965ae4214c4819.jpg'   }, 

    ]
     useEffect (() =>{
        function handleResize(){
            if(window.innerWidth < 720){
                setSlidePerView(1);
            }else{
                setSlidePerView(2)
            }
        }
        handleResize();

        window.addEventListener("resize", handleResize)
        return() =>{
            window.removeEventListener("resize", handleResize)
        }
     },[])
       

     return(
         <div className="slider">
             <Swiper 
                 slidesPerView={slidesPerView}
                     pagination={{ clickable: true }} 
                  navigation='' 
             >
               
                 {data.map((item) =>(
                     <SwiperSlide key={item.id} >
                         <img  
                             src={item.image}
                                 alt="Slider"
                             className="slider-item"/>
                             
                              
                     </SwiperSlide>
                 ))}
             </Swiper>   
         
         </div> 
    )
}
export default Sliders