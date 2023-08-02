import React from 'react'
import { NavbarComponent } from './NavbarComponent';
import { MoviesCard } from './MoviesCard';
import { useParams } from 'react-router-dom';
import { FooterComponent } from './FooterComponent';

export const MoviesList = () => {

    const params = useParams();
    const type = params.type
    return (
        <div className='d-flex flex-column bg-secondary-subtle'>
            <div>
                <NavbarComponent />
            </div>

            <div>
                <MoviesCard type={type} />
            </div>

            <div className='mt-5'>
                <FooterComponent />
            </div>
        </div>
    )
}
