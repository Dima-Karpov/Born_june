
const SET_IS_LOADING = 'SET-IS-LOADING';

const initState = {
    isLoading: false
};

type InitialStateType = typeof initState;
type ActionType = ReturnType<typeof loadingAC>


export const loadingReducer = (state: InitialStateType = initState, action: ActionType): InitialStateType => { 
    switch (action.type) {
        case SET_IS_LOADING: {
            return {...state, isLoading: !state.isLoading}
        }
        default: return state;
    }
};

export const loadingAC = () => {
    return {
        type: SET_IS_LOADING,
    } as const
}; 