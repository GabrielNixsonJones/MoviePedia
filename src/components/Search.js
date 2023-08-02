import React from 'react'
import { NavbarComponent } from './NavbarComponent';
import { useParams } from 'react-router-dom';
import { FooterComponent } from './FooterComponent';
import { SearchResults } from './SearchResults';

export const Search = () => {

    const params = useParams();
    const data = params.search

    return (
        <div className='d-flex flex-column bg-secondary-subtle'>
            <div>
                <NavbarComponent />
            </div>

            <div>
                <SearchResults search={data} />
            </div>

            <div className='mt-5'>
                <FooterComponent />
            </div>
        </div>
    )
}
