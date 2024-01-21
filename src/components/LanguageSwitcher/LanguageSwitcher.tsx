import React, { useState } from "react"
// import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { setLanguageMode } from "../../redux/actions/LanguageModeActions"
import { useTranslation } from 'react-i18next';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import { RootState } from "../../redux/store";

const LanguageSwitcher = () => {
    const { languages, changeLanguage, originalPath } = useI18next();
    const dispatch = useDispatch()
    const darkMode = useSelector((state: RootState) => state.darkMode.darkMode)

    const selected = useSelector((state: RootState) => state.languageMode.languageMode)


    const [openDropDown, setopenDropdown] = useState(false)
    // const [selected, setSelected] = useState('')

    const changeSelected = (lng: string) => {
        dispatch(setLanguageMode(lng))
        // setSelected(lng)
        changeLanguage(lng)
    }

    return (
        <div style={{ paddingRight: '.5rem' }}>
            <div>
                <button style={{ width: 'auto' }} onClick={() => setopenDropdown((prevState) => !prevState)} className="button dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className={`dropdown-text ${darkMode ? 'dark-mode' : ''}`}>
                        {selected.toUpperCase()}
                    </span>
                </button>


            </div>
            {
                openDropDown === true ? (
                    <div style={{ border: '1.5px solid #eba937',  position: 'absolute', top: '3.3rem', textAlign: 'center', padding: '0.4rem' }} className={`dropdown ${darkMode ? 'dark-mode' : ''}`}>
                        <div className="main-menu" style={{ display: 'contents'}}>
                            {
                                languages.map((lng, index) => (
                                    <ul key={index}>
                                        <li>
                                            <Link
                                                to={originalPath}
                                                language={lng}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    changeSelected(lng);
                                                }} placeholder={undefined}>
                                                {lng}
                                            </Link>
                                        </li>
                                    </ul>
                                ))
                            }
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}

export default LanguageSwitcher