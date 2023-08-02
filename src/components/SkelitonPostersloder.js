import React from 'react';
import HeroSlider from "react-slick";
import { motion } from "framer-motion";
import Placeholder from 'react-bootstrap/Placeholder';
import Card from 'react-bootstrap/Card';
import HashLoader from "react-spinners/HashLoader";
import image from './placeholderComponents/Untitled.jpg'


export const SkelitonPostersloder = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
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
            <div className=''>

                <div className='d-flex justify-content-between'>
                    <div>

                        <Placeholder as={Card.Title} animation="glow">
                            <Placeholder xs={6} />
                        </Placeholder>

                    </div>

                    <div>

                        <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={4} />
                        </Placeholder>

                    </div>
                </div>

                <div>
                    <div>
                        <HeroSlider {...settings}>


                            <motion.div className='PosterSliderImgContainer' whileTap={{ scale: 0.97 }}>
                                <div style={{ position: 'relative' }}>
                                    <img className='imgSize rounded-3 bg-secondary' src={image} alt='img' />
                                    <div className='posterSkelitonOverlay'><HashLoader

                                        color={'#0E2954'}
                                        loading={true}
                                        size={50}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    /></div>
                                </div>

                                <div style={{ overflow: 'auto' }}>
                                    <Placeholder as={Card.Title} animation="glow">
                                        <Placeholder xs={6} />
                                    </Placeholder>
                                    <Placeholder as={Card.Text} animation="glow">
                                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
                                    </Placeholder>
                                </div>
                            </motion.div>

                            <motion.div className='PosterSliderImgContainer' whileTap={{ scale: 0.97 }}>
                                <div style={{ position: 'relative' }}>
                                    <img className='imgSize rounded-3 bg-secondary' src={image} alt='img' />
                                    <div className='posterSkelitonOverlay'><HashLoader

                                        color={'#0E2954'}
                                        loading={true}
                                        size={50}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    /></div>
                                </div>

                                <div style={{ overflow: 'auto' }}>
                                    <Placeholder as={Card.Title} animation="glow">
                                        <Placeholder xs={6} />
                                    </Placeholder>
                                    <Placeholder as={Card.Text} animation="glow">
                                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
                                    </Placeholder>
                                </div>
                            </motion.div>

                            <motion.div className='PosterSliderImgContainer' whileTap={{ scale: 0.97 }}>
                                <div style={{ position: 'relative' }}>
                                    <img className='imgSize rounded-3 bg-secondary' src={image} alt='img' />
                                    <div className='posterSkelitonOverlay'><HashLoader

                                        color={'#0E2954'}
                                        loading={true}
                                        size={50}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    /></div>
                                </div>

                                <div style={{ overflow: 'auto' }}>
                                    <Placeholder as={Card.Title} animation="glow">
                                        <Placeholder xs={6} />
                                    </Placeholder>
                                    <Placeholder as={Card.Text} animation="glow">
                                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
                                    </Placeholder>
                                </div>
                            </motion.div>

                            <motion.div className='PosterSliderImgContainer' whileTap={{ scale: 0.97 }}>
                                <div style={{ position: 'relative' }}>
                                    <img className='imgSize rounded-3 bg-secondary' src={image} alt='img' />
                                    <div className='posterSkelitonOverlay'><HashLoader

                                        color={'#0E2954'}
                                        loading={true}
                                        size={50}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    /></div>
                                </div>

                                <div style={{ overflow: 'auto' }}>
                                    <Placeholder as={Card.Title} animation="glow">
                                        <Placeholder xs={6} />
                                    </Placeholder>
                                    <Placeholder as={Card.Text} animation="glow">
                                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
                                    </Placeholder>
                                </div>
                            </motion.div>

                            <motion.div className='PosterSliderImgContainer' whileTap={{ scale: 0.97 }}>
                                <div style={{ position: 'relative' }}>
                                    <img className='imgSize rounded-3 bg-secondary' src={image} alt='img' />
                                    <div className='posterSkelitonOverlay'><HashLoader

                                        color={'#0E2954'}
                                        loading={true}
                                        size={50}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    /></div>
                                </div>

                                <div style={{ overflow: 'auto' }}>
                                    <Placeholder as={Card.Title} animation="glow">
                                        <Placeholder xs={6} />
                                    </Placeholder>
                                    <Placeholder as={Card.Text} animation="glow">
                                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
                                    </Placeholder>
                                </div>
                            </motion.div>

                            <motion.div className='PosterSliderImgContainer' whileTap={{ scale: 0.97 }}>
                                <div style={{ position: 'relative' }}>
                                    <img className='imgSize rounded-3 bg-secondary' src={image} alt='img' />
                                    <div className='posterSkelitonOverlay'><HashLoader

                                        color={'#0E2954'}
                                        loading={true}
                                        size={50}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    /></div>
                                </div>

                                <div style={{ overflow: 'auto' }}>
                                    <Placeholder as={Card.Title} animation="glow">
                                        <Placeholder xs={6} />
                                    </Placeholder>
                                    <Placeholder as={Card.Text} animation="glow">
                                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
                                    </Placeholder>
                                </div>
                            </motion.div>

                            <motion.div className='PosterSliderImgContainer' whileTap={{ scale: 0.97 }}>
                                <div style={{ position: 'relative' }}>
                                    <img className='imgSize rounded-3 bg-secondary' src={image} alt='img' />
                                    <div className='posterSkelitonOverlay'><HashLoader

                                        color={'#0E2954'}
                                        loading={true}
                                        size={50}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    /></div>
                                </div>

                                <div style={{ overflow: 'auto' }}>
                                    <Placeholder as={Card.Title} animation="glow">
                                        <Placeholder xs={6} />
                                    </Placeholder>
                                    <Placeholder as={Card.Text} animation="glow">
                                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
                                    </Placeholder>
                                </div>
                            </motion.div>


                        </HeroSlider>


                    </div>
                </div>

            </div>
        </>
    )
}
