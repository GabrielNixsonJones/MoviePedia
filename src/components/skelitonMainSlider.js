import React from 'react'
import HeroSlider from "react-slick";
import { PrevArrow, NextArrow } from './bothArrow';
import { motion } from "framer-motion";
import Placeholder from 'react-bootstrap/Placeholder';
import Card from 'react-bootstrap/Card';
import HashLoader from "react-spinners/HashLoader";
import image from './placeholderComponents/whiteBackdrop.jpg'

export const SkelitonMainSlider = () => {

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


    return (
        <>

            <div className='sliderContainer'>
                <HeroSlider {...settings} >

                    <motion.div whileTap={{ scale: 0.97 }} className='sliderHoverContainer shadow-lg'>
                        <img className='imgSizeMainSlider' src={image} alt='img' />
                        <div className='posterSkelitonOverlay'><HashLoader

                            color={'#0E2954'}
                            loading={true}
                            size={50}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        /></div>
                        <div className='sliderHover'>

                            <div>
                                <Placeholder as={Card.Text} animation="glow">
                                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
                                </Placeholder>
                            </div>


                        </div>
                    </motion.div>

                    <motion.div whileTap={{ scale: 0.97 }} className='sliderHoverContainer shadow-lg'>
                        <img className='imgSizeMainSlider' src={image} alt='img' />
                        <div className='posterSkelitonOverlay'><HashLoader

                            color={'#0E2954'}
                            loading={true}
                            size={50}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        /></div>
                        <div className='sliderHover'>

                            <div>
                                <Placeholder as={Card.Text} animation="glow">
                                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
                                </Placeholder>
                            </div>


                        </div>
                    </motion.div>

                    <motion.div whileTap={{ scale: 0.97 }} className='sliderHoverContainer shadow-lg'>
                        <img className='imgSizeMainSlider' src={image} alt='img' />
                        <div className='posterSkelitonOverlay'><HashLoader

                            color={'#0E2954'}
                            loading={true}
                            size={50}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        /></div>
                        <div className='sliderHover'>

                            <div>
                                <Placeholder as={Card.Text} animation="glow">
                                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
                                </Placeholder>
                            </div>


                        </div>
                    </motion.div>

                    <motion.div whileTap={{ scale: 0.97 }} className='sliderHoverContainer shadow-lg'>
                        <img className='imgSizeMainSlider' src={image} alt='img' />
                        <div className='posterSkelitonOverlay'><HashLoader

                            color={'#0E2954'}
                            loading={true}
                            size={50}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        /></div>
                        <div className='sliderHover'>

                            <div>
                                <Placeholder as={Card.Text} animation="glow">
                                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
                                </Placeholder>
                            </div>


                        </div>
                    </motion.div>

                    <motion.div whileTap={{ scale: 0.97 }} className='sliderHoverContainer shadow-lg'>
                        <img className='imgSizeMainSlider' src={image} alt='img' />
                        <div className='posterSkelitonOverlay'><HashLoader

                            color={'#0E2954'}
                            loading={true}
                            size={50}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        /></div>
                        <div className='sliderHover'>

                            <div>
                                <Placeholder as={Card.Text} animation="glow">
                                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
                                </Placeholder>
                            </div>


                        </div>
                    </motion.div>

                    <motion.div whileTap={{ scale: 0.97 }} className='sliderHoverContainer shadow-lg'>
                        <img className='imgSizeMainSlider' src={image} alt='img' />
                        <div className='posterSkelitonOverlay'><HashLoader

                            color={'#0E2954'}
                            loading={true}
                            size={50}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        /></div>
                        <div className='sliderHover'>

                            <div>
                                <Placeholder as={Card.Text} animation="glow">
                                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
                                </Placeholder>
                            </div>


                        </div>
                    </motion.div>

                </HeroSlider >
            </div >
        </>
    )
}
