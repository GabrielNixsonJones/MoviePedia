import React from 'react'

export const MovieGenre = (props) => {

    const genreNames = props.data.genres.map((genre) => genre.name);
    console.log(genreNames);

    const formattedGenres = genreNames.join('/');
    return (
        <>
            <span>
                {formattedGenres}
            </span>
        </>
    )
}
