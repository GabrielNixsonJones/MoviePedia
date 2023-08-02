import React from 'react';
import { useState, useEffect } from 'react';
import HeroSlider from "react-slick";
import TmdbAxios from './TmdbAxios';
import { PrevArrow, NextArrow } from './bothArrow';
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { SkelitonMainSlider } from './skelitonMainSlider';

export const MainSlider = () => {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        TmdbAxios.get('/movie/popular')
            .then((response) => {
                setMovies(response.data.results);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);


    var settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 700,
        arrow: true,
        autoplay: true,
        dots: false,
        autoplaySpeed: 4000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };

    const mainContent = () => {
        return (
            <div className='sliderContainer'>
                <HeroSlider {...settings} >

                    {
                        movies.map((movie) => (
                            <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/movie/${movie.id}`}>
                                <motion.div whileTap={{ scale: 0.97 }} className='sliderHoverContainer shadow-lg'>
                                    <img className='imgSizeMainSlider' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt='img' />
                                    <div className='sliderHover'>

                                        <div>
                                            <h1 className='text-light fs-3 hoverText'>{movie.title}</h1>
                                        </div>

                                        <div className='sliderMovieDescriptionution text-light'>
                                            <h3>
                                                Description:
                                            </h3>
                                            <p>
                                                {movie.overview}
                                            </p>
                                        </div>

                                    </div>
                                </motion.div>
                            </Link>

                        ))
                    }
                </HeroSlider >
            </div >
        )
    }

    return (
        <>

            <div>
                {
                    isLoading ? <SkelitonMainSlider /> : mainContent()
                }

            </div>

        </>
    )
}
