import React from 'react'
import { useState, useEffect } from 'react';
import TmdbAxios from './TmdbAxios';
import { useParams } from 'react-router-dom'
import { MovieContent } from './MovieContent';
import { Loading } from './Loading';
import { FooterComponent } from './FooterComponent';

export const Movie = () => {

    const [movies, setMovies] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    const params = useParams();
    const id = params.id

    useEffect(() => {
        TmdbAxios.get(`/movie/${id}`)
            .then((response) => {
                setMovies(response.data);
                setIsLoading(false);
                handleScrollToTop();
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [id]);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className='d-flex flex-column'>

            {isloading && <Loading />}

            {!isloading && <MovieContent data={movies} />}

            <div className='mt-5'>
                <FooterComponent />
            </div>

        </div>



    )
}
