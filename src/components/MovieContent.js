import React from 'react'
import { NavbarComponent } from './NavbarComponent'
import { MovieHeroComponent } from './MovieHeroComponent'
import { BsStarFill } from 'react-icons/bs'
import { CastSlider } from './CastSlider'
import { PosterSlider } from './PosterSlider';

export const MovieContent = (props) => {

    function formatBudgetWithNotation(budget) {
        let absBudget = Math.abs(budget);
        const abbreviations = ["H", "K", "M", "B"];
        let index = 0;

        while (absBudget >= 1000 && index < abbreviations.length - 1) {
            absBudget /= 1000;
            index++;
        }

        const suffix = abbreviations[index];

        const formattedBudget = new Intl.NumberFormat('en', {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1
        }).format(absBudget);

        return (budget >= 0 ? '' : '-') + formattedBudget + suffix;
    }

    return (
        <div className='d-flex flex-column'>
            <div>
                <NavbarComponent />
            </div>

            <div className='backgroundHeroColor'>
                <MovieHeroComponent data={props.data} />
            </div>

            <div className='container-lg mt-3'>

                <div className='smDeviceContent'>
                    <div>
                        <p className='fs-1 fw-bold mb-0'>{props.data.title}</p>
                        <p className='fs-5 fw-semibold'><BsStarFill className='fs-2 pb-2 text-danger' /> {props.data.vote_average.toFixed(1)}/10 <span className=' fw-normal'>29.6K Votes</span></p>
                    </div>

                    <div className='statusContainer'>
                        <div>
                            <p><span className='fw-semibold fs-5'>Status:</span><br />{props.data.status}</p>
                        </div>
                        <div>
                            <p><span className='fw-semibold fs-5'>Language:</span><br />english</p>
                        </div>
                        <div>
                            <p><span className='fw-semibold fs-5'>Budget:</span><br />{formatBudgetWithNotation(props.data.budget)}</p>
                        </div>
                        <div>
                            <p><span className='fw-semibold fs-5'>Revanue:</span><br />{formatBudgetWithNotation(props.data.revenue)}</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='mt-3 container-lg'>
                <p className='fs-3 fw-bold mb-2'>About The Movie</p>
                <p className='fs-6 movieDescription'>{props.data.overview}</p>
            </div>


            <div className='backgroundSpecialColor text-light'>
                <CastSlider data={props.data} />
            </div>


            <div >
                <PosterSlider title={"Similar"} link={`/movie/${props.data.id}/similar`} type={'298618/similar'} />
            </div>
        </div>
    )
}
