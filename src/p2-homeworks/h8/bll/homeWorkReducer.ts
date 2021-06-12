import {UserType} from '../HW8'

export type InitialStateType = typeof initialState



const initialState = {
    user: [] as Array<UserType>
};

type SortUpAT = {
    type: 'sort-up'
    payload: 'up'
}
type SortDownAT = {
    type: 'sort-down'
    payload: 'down'
}
type CheckAT = {
    type: 'check'
    payload: '18'
}

export const homeWorkReducer = (state:  Array<UserType>, action: SortUpAT | SortDownAT | CheckAT): Array<UserType> => {
    switch (action.type) {
        case 'sort-up': 
            return [ ...state].sort((a,b) => a.name < b.name? 1:  -1)
        case 'sort-down': 
            return [ ...state].sort((a,b) => a.name < b.name? -1:  1)
        case 'check':
            return state.filter((u) => u.age > 18)
        default: return state
    }
}