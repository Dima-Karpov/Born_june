import React, { useState } from 'react'
import Affairs from './Affairs'
import s from './HW2.module.css'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'

export type AffairType = {
    _id: number
    name: string
    priority: string
}

export type FilterType = 'all' | AffairPriorityType

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    if (filter === 'all') return affairs
    else return affairs.filter(a => a.priority === filter);
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    return affairs.filter(a => a._id !== _id);
}

function HW2() {

    const [affairs, setAffairs] = useState<Array<AffairType>>([
        { _id: 1, name: 'React', priority: 'high' },
        { _id: 2, name: 'anime', priority: 'low' },
        { _id: 3, name: 'Redax', priority: 'low' },
        { _id: 4, name: 'work', priority: 'high' },
        { _id: 6, name: 'html & css', priority: 'middle' },
    ]);

    const [filter, setFilter] = useState<FilterType>('all');

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

    return (
        <div className={s.title}>
            <hr />

            Homeworks 2 -
            Works

            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
            <hr />
        </div>
    )
}

export default HW2
