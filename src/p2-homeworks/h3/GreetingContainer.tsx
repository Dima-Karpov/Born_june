import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}


// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const addUser = () => {

        if (name.trim() !== ('')) {
            addUserCallback(name)
            alert(`Hello  ${name}!`) // need to fix
            setName('')
        } else{
            setError('Name is requred')
        }
    }

    const onKeyPressHandler =(e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if(e.key === 'Enter' && name){
            addUser();
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressHandler={onKeyPressHandler}
        />
    )
}

export default GreetingContainer
