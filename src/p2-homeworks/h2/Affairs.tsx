import React from 'react'
import Affair from './Affair'
import { AffairType, FilterType } from './HW2'
import s from './HW2.module.css'

 type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))


    const setAll = () =>  props.setFilter('all');
    const setHigh = () => props.setFilter('high');
    const setMiddle = () => props.setFilter('middle');
    const setLow = () => props.setFilter('low');

    return (
        <div className={s.buttonNiz}>
            {mappedAffairs}
            
            <button className={s.deleteCallback} onClick={setAll}>All</button>
            <button className={s.deleteCallback} onClick={setHigh}>High</button>
            <button className={s.deleteCallback} onClick={setMiddle}>Middle</button>
            <button className={s.deleteCallback} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
