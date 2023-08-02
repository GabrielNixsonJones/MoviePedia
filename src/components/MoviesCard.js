import React from 'react'
import { useState, useEffect } from 'react';
import TmdbAxios from './TmdbAxios';
import ReactPaginate from 'react-paginate';
// import LazyLoad from 'react-lazy-load';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Loading } from './Loading';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


export const MoviesCard = (props) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected + 1);
        setIsLoading(true);
    };

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    useEffect(() => {
        TmdbAxios.get(`/movie/${props.type}`, {
            params: {
                page: currentPage,
            }
        })
            .then((response) => {
                setMovies(response.data.results);
                setIsLoading(false);
                handleScrollToTop();
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [currentPage, props.type]);


    const cardDone = () => {
        return (
            <>
                <div className='cardListContainer'>

                    {
                        movies.map((movie) => (
                            <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/movie/${movie.id}`}>
                                <motion.div whileTap={{ scale: 0.97 }} className='Cardcontainer fw-medium'>
                                    <div className='cardImgContainer'>
                                        {/* <LazyLoad >
                                            <img className='imgSize rounded-top rounded-4' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={'img'} />
                                        </LazyLoad> */}
                                        <LazyLoadImage
                                            alt={'img'}
                                            effect="blur"
                                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                            width={'100%'}
                                            className='rounded-3' />
                                    </div>

                                    <div className='cardTitleContainer fs-5 mt-2'>
                                        <p>{movie.title}</p>
                                    </div>
                                </motion.div>
                            </Link>

                        ))
                    }
                </div>
            </>
        )
    }




    return (
        <div className='container-lg'>

            <div className='my-3'>
                <h1>
                    Movies
                </h1>
            </div>

            {isLoading ? <Loading /> : cardDone()}

            <div className='my-2'>
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    pageCount={500}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </div>



        </div>
    )
}
