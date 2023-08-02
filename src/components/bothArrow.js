import React from "react";
import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const PrevArrow = (props) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    var arrowRes = {};

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (windowWidth <= 768) {
        arrowRes = {
            width: "7.5%",
            borderRadius: "50%",
            fontSize: "1.5rem"
        }
    }
    else {
        arrowRes = {
            width: "2%",
            fontSize: "3rem"
        }
    }

    return (
        <>
            <div
                style={{
                    ...props.style,
                    display: "flex",
                    position: "absolute",
                    zIndex: "15",
                    left: "0%",
                    top: "50%",
                    transform: 'translateY(-50%)',
                    opacity: "0.55",
                    color: "whitesmoke",
                    backgroundColor: "black",
                    aspectRatio: 1 / 1,
                    justifyContent: "center",
                    alignItems: "center",
                    ...arrowRes
                }}
                onClick={props.onClick}>
                <IoIosArrowBack />
            </div>
        </>
    );
};

export const NextArrow = (props) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    var arrowRes = {};

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (windowWidth <= 768) {
        arrowRes = {
            width: "7.5%",
            borderRadius: "50%",
            fontSize: "1.5rem"
        }
    }
    else {
        arrowRes = {
            width: "2%",
            fontSize: "3rem"
        }
    }

    return (
        <>
            <div
                style={{
                    ...props.style,
                    display: "flex",
                    position: "absolute",
                    zIndex: "15",
                    right: "0%",
                    top: "50%",
                    transform: 'translateY(-50%)',
                    opacity: "0.55",
                    color: "whitesmoke",
                    backgroundColor: "black",
                    aspectRatio: 1 / 1,
                    justifyContent: "center",
                    alignItems: "center",
                    ...arrowRes
                }}
                onClick={props.onClick}>
                <IoIosArrowForward />
            </div>
        </>
    );
};
