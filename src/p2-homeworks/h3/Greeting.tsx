import React, { ChangeEvent, KeyboardEvent } from 'react'
import s from './Greeting.module.css'

export type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    { name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler } // деструктуризация пропсов
) => {
    const inputClass = s.error ? s.errorMessages : s.error  // need to fix with (?:)

    return (
        <div className={s.blok}>
            <div className={s.input}>
                <input
                    value={name}
                    onChange={setNameCallback}
                    onKeyDown={onKeyPressHandler}
                // className={inputClass} 
                />

            
                <button className={s.btn} onClick={addUser}>add</button>
                <div className={s.total}>{totalUsers}</div>
            </div>
            {/* <div className={s.error}>{error}</div> */}

            {error && <div className={s.errorMessages}>Name is requred</div>}
        </div>
    )
}

export default Greeting

