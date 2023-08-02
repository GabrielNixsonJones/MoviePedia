import React from 'react';
import { NavbarComponent } from './NavbarComponent';
import { MainSlider } from './MainSlider';
import { PosterSlider } from './PosterSlider';
import { FooterComponent } from './FooterComponent';

export const HomePage = () => {
    return (
        <div className='d-flex flex-column bg-secondary-subtle'>

            <div>
                <NavbarComponent />
            </div>

            <div className='d-flex justify-content-center backgroundSpecialColor'>
                <MainSlider />
            </div>

            <div className='mt-3'>
                <PosterSlider title={"Popular"} link={'/movie/popular'} type={'popular'} />
            </div>

            <div className='backgroundSpecialColor text-light'>
                <PosterSlider title={"Top Rated"} link={'movie/top_rated'} type={'top_rated'} />
            </div>

            <div>
                <PosterSlider title={"Now Playing"} link={'movie/now_playing'} type={'now_playing'} />
            </div>

            <div>
                <PosterSlider title={"Upcoming"} link={'movie/upcoming'} type={'upcoming'} />
            </div>

            <div className='mt-5'>
                <FooterComponent />
            </div>

        </div>
    )
}
