import { useState } from 'react';
import { useAppContext } from '../AppContext';
import TestCard from "../components/TestCard";
import style from './CarouselStyle.module.css'


const SimpleCarousel = () => {
    const { countries } = useAppContext();
    const [currentSlide, setCurrentSlide] = useState(0);


    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % countries.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + countries.length) % countries.length);
    };

    const transformValue = -currentSlide * 100 + '%';

    return (
        <div className={style.carouselContainer}>
            <div className={style.carousel} style={{ transform: `translateX(${transformValue})` }}>
                {countries.map((country, index) => {

                    return (
                        <div key={index} className={index === currentSlide ? style.slideActive : style.slide}>
                            <TestCard country={country} nextSlide={nextSlide}/>
                        </div>
                    )
                })}
            </div>
            <div className={style.btnContainer}>
                <button className={`${style.prevBtn} ${style.button}`} onClick={() => {prevSlide()}}>Previous</button>
                <button className={`${style.nextBtn} ${style.button}`} onClick={() => {nextSlide()}}>Next</button>
            </div>
        </div>
    );
};

export default SimpleCarousel;

// const SlideShow = () => {

//     const { countries } = useAppContext();

//     let slideIndex = 1;

//     function plusSlides(n) {
//         showSlides(slideIndex += n);
//     }

//     function currentSlide(n) {
//         showSlides(slideIndex = n);
//     }

//     function showSlides(n) {
//         let i;
//         let slides = document.getElementsByClassName("mySlides");
//         let dots = document.getElementsByClassName("dot");
//         if (n > slides.length) {slideIndex = 1}
//         if (n < 1) {slideIndex = slides.length}
//         for (i = 0; i < slides.length; i++) {
//           slides[i].style.display = "none";
//         }
//         for (i = 0; i < dots.length; i++) {
//           dots[i].className = dots[i].className.replace(" active", "");
//         }
//         slides[slideIndex-1].style.display = "block";
//         dots[slideIndex-1].className += " active";
//       }

// return(
//     <>
//     <div className={style.slideShowContainer}>
//         {
//             countries.map(( country, index )=>{
//                 return(
//                     <div className={`${style.mySlides} ${style.fade}`}>
//                         <div className={style.numbertext}>{index}/{countries.length}</div>
//                         <TestCard country={country} />
//                     </div>
//                 )
//             })
//         }
//         <button className={style.prev} onClick={()=> {plusSlides(-1)}}>&#10094;</button>
//         <button className={style.next} onClick={()=> {plusSlides(1)}}>&#10095;</button>
//     </div>
//     </>
// )

// }

// export default SlideShow

