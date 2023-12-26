import React, { useState, useEffect } from "react"
import SunIcon from "../SunIcon/SunIcon"
import MoonIcon from "../MoonIcon/MoonIcon"
import { useDispatch } from 'react-redux';
import { setDarkMode } from '../../redux/actions';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const DarkModeToggle = () => {
    const darkMode = useSelector((state: RootState) => state.darkMode); // Accessing darkMode from Redux store

    const dispatch = useDispatch();

    const handleDarkModeTrue = () => {
        console.log('hi')
        dispatch(setDarkMode(true));
    };

    const handleDarkModeFalse = () => {
        console.log('hello')

        dispatch(setDarkMode(false));
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);

    return (
        <>
            {
                darkMode ?
                    (<MoonIcon handleDarkModeFalse={handleDarkModeFalse} />)
                    : (<SunIcon handleDarkModeTrue={handleDarkModeTrue} />)
            }

        </>
    )
}


export default DarkModeToggle