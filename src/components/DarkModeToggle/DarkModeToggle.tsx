import React, { useState, useEffect, useRef } from "react"
import SunIcon from "../SunIcon/SunIcon"
import MoonIcon from "../MoonIcon/MoonIcon"
import { useDispatch } from 'react-redux';
import { setDarkMode } from '../../redux/actions';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
// @ts-ignore
import audio from "../../sound/darkMode.wav"

const DarkModeToggle = () => {
    const darkMode = useSelector((state: RootState) => state.darkMode); // Accessing darkMode from Redux store
    const audioRef = useRef(new Audio(audio))
    const playSound = () => {
        audioRef.current.play()
    }

    const dispatch = useDispatch();

    const handleDarkModeTrue = () => {
        playSound()
        dispatch(setDarkMode(true));
    };

    const handleDarkModeFalse = () => {
        playSound()

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