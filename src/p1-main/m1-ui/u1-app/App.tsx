import React from 'react'
import s from './App.module.css'
import HW5 from '../../../p2-homeworks/h5/HW5'
import { useSelector } from 'react-redux'
import {RootState} from "../../../p2-homeworks/h10/bll/store"

function App() {

    const theme = useSelector((state: RootState) => state.theme.theme)
    
    return (
        <div className={theme === 'dark'? `${s.AppDark}` : `${s.App}`}>
            <div>react homeworks:</div>
            {/* <HW1/>
            <HW2/>
            <HW3/>
            <HW4/> */}
            <HW5/>

        </div>
    )
}

export default App
