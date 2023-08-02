import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import TmdbAxios from './TmdbAxios';

export const Catogory = (props) => {

    const [genreNames, setGenreNames] = useState([]);

    useEffect(() => {
        TmdbAxios.get('/genre/movie/list')
            .then((response) => {
                const genreMap = {};
                response.data.genres.forEach((genre) => {
                    genreMap[genre.id] = genre.name;
                });

                const genres = props.genres.genre_ids.map((id) => genreMap[id]);
                setGenreNames(genres);
            })
            .catch((error) => {
                console.error('Error fetching genres:', error);
            });
    }, [props.genres.genre_ids]);

    const formattedGenres = genreNames.join(' /');

    return (
        <div>
            <p>{formattedGenres}</p>
        </div>
    )
}
