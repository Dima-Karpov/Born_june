const initState = {
    theme: 'light'
};

type initialStateType = {
    theme: string
}

type ActionType = ReturnType<typeof changeThemeC>

export const themeReducer = (state = initState, action: ActionType): initialStateType => { 
    switch (action.type) {
        case 'SET_THEME': {
            return {
                ...state,
                theme: action.theme,
            };
        }
        default: return state;
    }
};

export const changeThemeC = (theme: string) => {
    return{
        type: 'SET_THEME',
        theme,
    } as const
}; 