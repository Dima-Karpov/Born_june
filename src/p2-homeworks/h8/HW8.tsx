import React, { useState } from 'react'
import { homeWorkReducer } from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}


const initialPeople = [
    { _id: 0, name: 'Кот', age: 3 },
    { _id: 1, name: 'Александр', age: 66 },
    { _id: 2, name: 'Коля', age: 16 },
    { _id: 3, name: 'Виктор', age: 44 },
    { _id: 4, name: 'Дмитрий', age: 40 },
    { _id: 5, name: 'Ирина', age: 55 },
] as Array<UserType>

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={s.item}>
            <span>{p.name}</span>
            <span>{p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, { type: 'sort-up', payload: 'up' }))



    const sortDown = () => setPeople(homeWorkReducer(initialPeople, { type: 'sort-down', payload: 'down' }))
    const check = () => setPeople(homeWorkReducer(initialPeople, { type: 'check', payload: '18' }))

    return (
        <div>
            <hr />
            homeworks 8
            <hr />

            {/*should work (должно работать)*/}
            {finalPeople}
            <hr />
            
                <SuperButton className={s.button} onClick={sortUp}>sort up</SuperButton>
                <SuperButton className={s.button} onClick={sortDown}>sort down</SuperButton>
                <SuperButton className={s.button} onClick={check}>check 18</SuperButton>
            

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr />
        </div>
    )
}

export default HW8
