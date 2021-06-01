import {UserType} from '../HW8'

export type InitialStateType = typeof initialState



const initialState = {
    user: [] as Array<UserType>
};

export const homeWorkReducer = (state:  Array<UserType>, action: any): Array<UserType> => { // need to fix any
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