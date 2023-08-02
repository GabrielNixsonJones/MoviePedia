import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
    return (
        <div className='notFoundContainer d-flex justify-content-between align-items-center' style={{ height: '100vh' }}>
            <div className='notFoundGifContainer' style={{ width: 'min(50rem,50%)' }}>
                <img className='imgSize' src='https://cdn.dribbble.com/users/1553215/screenshots/6448827/total_for_gifs_3.gif' alt='gif' />
            </div>

            <div className='notFoundMessageContainer' style={{ width: 'min(50rem,50%)' }}>
                <p className=''><span>O</span>ops!</p>
                <p>Page You Are Searching For Not Found</p>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/'}><Button variant="primary">Go To Home</Button></Link>
            </div>
        </div>
    )
}
