import React from 'react'
import s from '../preloader/preloader.module.css'


export const Preloader = () => {

    return (
        <div className={s.section}>
            <div className={s.ring}>
                Loading
                <div className={s.span}></div>
            </div>
        </div>


    )
}