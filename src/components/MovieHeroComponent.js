import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import { GiSandsOfTime } from 'react-icons/gi'
import { VscCalendar } from 'react-icons/vsc'
import { MovieGenre } from './MovieGenre'

export const MovieHeroComponent = (props) => {

    function convertDurationToHoursMinutes(durationInMinutes) {
        if (isNaN(durationInMinutes)) {
            return "Invalid duration";
        }

        const hours = Math.floor(durationInMinutes / 60);
        const minutes = durationInMinutes % 60;

        const formattedDuration = `${hours}h ${minutes}m`;
        return formattedDuration;
    }


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
        <div className='container-lg'>

            <div className='movieHeroContainer'>

                <div className='movieBackDropContainer'>
                    <img className='imgSize' src={`https://image.tmdb.org/t/p/original${props.data.backdrop_path}`} alt='img' />
                    <div className='movieBackDropOverlay'></div>
                </div>

                <div className='moviePosterContainer'>
                    <img className='imgSize rounded-4' src={`https://image.tmdb.org/t/p/original${props.data.poster_path}`} alt='img' />


                </div>

                <div className='largeDeviceContainer text-light'>

                    <div>
                        <p className='fs-1 fw-bold mb-0 text-light'>{props.data.title}</p>
                        <p className='fs-5 fw-semibold'><BsStarFill className='fs-2 pb-2 text-danger' /> {props.data.vote_average.toFixed(1)}/10 <span className=' fw-normal'>{formatBudgetWithNotation(props.data.vote_count)} Votes</span></p>
                    </div>

                    <div className='statusContainer'>
                        <div>
                            <div>
                                <p><span className='fw-semibold fs-5'>Status:</span><br />{props.data.status ? props.data.status : 'no data'}</p>
                            </div>
                            <div>
                                <p><span className='fw-semibold fs-5'>Language:</span><br />English</p>
                            </div>
                        </div>

                        <div>
                            <div>
                                <p><span className='fw-semibold fs-5'>Budget:</span><br />{formatBudgetWithNotation(props.data.budget)}</p>
                            </div>
                            <div>
                                <p><span className='fw-semibold fs-5'>Revanue:</span><br />{formatBudgetWithNotation(props.data.revenue)}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p><GiSandsOfTime className='fs-4 mb-2' /> <span className='fs-5'>{convertDurationToHoursMinutes(props.data.runtime)}</span> &bull; <span className='fs-4'><MovieGenre data={props.data} /></span></p>
                        <p className='fs-4'><VscCalendar className='mb-2' /> {props.data.release_date}</p>
                    </div>

                </div>

            </div>


        </div>
    )
}
