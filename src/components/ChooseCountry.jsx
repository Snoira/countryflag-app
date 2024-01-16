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
                        <div key={index} className={index === currentSlide ? style.slideActive : style.slide }>
                            <TestCard country={country} />
                        </div>
                        
                    )
                })}
            </div>
            <button className={`${style.prevBtn} ${style.button}`} onClick={prevSlide}>Previous</button>
            <button className={`${style.nextBtn} ${style.button}`} onClick={nextSlide}>Next</button>
        </div>
    );
};

export default SimpleCarousel;
