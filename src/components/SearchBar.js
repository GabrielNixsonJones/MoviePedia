import React from 'react'
import { useState } from 'react';
import { motion } from "framer-motion";
import { HiSearch } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


const variants = {
    open: {
        display: "none"
    },
    closed: {
        display: "flex"
    }
};

const variants2 = {
    open: {
        display: "flex",
        visibility: {
            opacity: 1,
        },
        transition: { delay: 0.3, opacity: { duration: 0.2 } }
    },
    closed: {
        display: "none",
        visibility: {
            opacity: 0
        }
    }
};

const variants3 = {
    open: {
        width: "230px"
    },
    closed: {
        width: "40px"
    }
};

export const SearchBar = () => {

    const [isOpen, setIsopen] = useState(false);
    const [searchInput, setSearchInput] = useState('')

    const history = useNavigate();

    const handleRedirect = () => {
        if (searchInput !== '') {
            history(`/search/${searchInput}`);
        }
    };

    return (
        <div>
            <motion.div className='searchBox' whileTap={{ scale: 0.97 }} animate={isOpen ? "open" : "closed"} initial={{ width: '40px' }} variants={variants3} >

                <motion.div className='searchIcon' animate={isOpen ? "open" : "closed"} initial={{ display: 'flex' }} variants={variants}>
                    <HiSearch size={"1.5rem"} onClick={() => setIsopen(!isOpen)} />
                </motion.div>

                <motion.div className='searchOpen' animate={isOpen ? "open" : "closed"} initial={{ display: 'none' }} variants={variants2}>
                    <div>
                        <input onChange={(e) => { setSearchInput(e.target.value) }} className='searchBar' placeholder='search for movies' />
                    </div>

                    <div className='searchArrowIcon'>
                        <AiOutlineArrowRight onClick={handleRedirect} />
                    </div>

                    <div className='searchCloseIcon'>
                        <GrClose onClick={() => setIsopen(!isOpen)} />
                    </div>
                </motion.div>

            </motion.div>
        </div>
    )
}
