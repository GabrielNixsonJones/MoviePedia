import React from 'react'
import HeroSlider from "react-slick";
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import TmdbAxios from './TmdbAxios';
import noImage from './placeholderComponents/noCastImage.webp';

export const CastSlider = (props) => {

    const [cast, setCast] = useState([]);

    useEffect(() => {
        TmdbAxios.get(`/movie/${props.data.id}/credits`)
            .then((response) => {
                setCast(response.data.cast);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [props.data.id]);

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    initialSlide: 0,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    initialSlide: 0,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 0,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 0,
                }
            }
        ]
    };

    const handleImageError = (event) => {
        event.target.src = noImage;
    };

    return (
        <div className='container-lg'>
            <div>
                <p className='fs-3 fw-semibold mb-0 pt-3 ps-2'>Top Billed Cast</p>
            </div>

            <div>
                {cast.length > 0 && <HeroSlider {...settings}>

                    {
                        cast.map((movie) => (
                            <div className='castContainer shadow-lg'>
                                <Card className='castCard border-0 ' style={{ aspectRatio: 1 / 1.6 }}>
                                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${movie.profile_path}`} onError={handleImageError} style={{ aspectRatio: 1 / 1, objectFit: 'cover' }} />
                                    <Card.Body>
                                        <Card.Title className='fs-6'>{movie.name}</Card.Title>
                                        <Card.Text>
                                            {movie.character}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>

                        ))
                    }




                </HeroSlider>
                }
            </div>
        </div>
    )
}
