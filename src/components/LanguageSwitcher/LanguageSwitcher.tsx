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

    const selected = useSelector((state: RootState) => state.languageMode.languageMode)


    const [openDropDown, setopenDropdown] = useState(false)
    // const [selected, setSelected] = useState('')

    const changeSelected = (lng: string) => {
        dispatch(setLanguageMode(lng))
        // setSelected(lng)
        changeLanguage(lng)
    }

    return (
        <div>
            <div className="dropdown">
                <button style={{ width: 'auto' }} onClick={() => setopenDropdown((prevState) => !prevState)} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {selected}
                </button>


            </div>
            {
                openDropDown === true ? (
                    <div style={{ position: 'absolute', top: '3.3rem' }}>
                        {
                            languages.map((lng, index) => (
                                <div key={index}>
                                    <Link
                                        to={originalPath}
                                        language={lng}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            changeSelected(lng);
                                        } } placeholder={undefined}>
                                        {lng}
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </div>
    )
}

export default LanguageSwitcher