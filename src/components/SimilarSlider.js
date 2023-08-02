import React from 'react';
import HeroSlider from "react-slick";
import { useState, useEffect } from 'react';
import TmdbAxios from './TmdbAxios';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom'
import { Catogory } from './Catogory';
import { motion } from "framer-motion";



export const SimilarSlider = (props) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        TmdbAxios.get(props.link)
            .then((response) => {
                setMovies(response.data.results);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [props.link]);

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        adaptiveHeight: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    };



    return (
        <>
            <div className='container-lg my-3'>

                <div className='d-flex justify-content-between'>
                    <div>
                        <h1>
                            {props.title}
                        </h1>
                    </div>

                    <div>
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`movieslist/${props.type}`}><p className='mt-3'>View All<MdKeyboardArrowRight className='mb-1' /></p></Link>
                    </div>
                </div>

                <div>
                    <div>
                        {movies.length > 0 && <HeroSlider {...settings}>

                            {
                                movies.map((movie) => (
                                    <motion.div className='PosterSliderImgContainer' whileTap={{ scale: 0.97 }}>

                                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/movie/${movie.id}`}>
                                            <div>
                                                <img className='imgSize rounded-3' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='img' />
                                            </div>

                                            <div style={{ overflow: 'auto' }}>
                                                <h3 className='fs-5 mt-2'>{movie.title}</h3>
                                                <Catogory genres={movie} />
                                            </div>
                                        </Link>

                                    </motion.div>

                                ))
                            }

                        </HeroSlider>
                        }

                    </div>
                </div>

            </div>
        </>
    )
}