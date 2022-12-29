import { createContext, useReducer } from "react"
import { Data } from "../Utils/Data";

export const AppContext = createContext();

const initialState = {
    menuOn: false,
    menu: Data
}

const reducer = (state, action) => {
    if (action.type === "MENUSHOW") {
        const menuActive = state.menu.filter((item) => item.id === action.payload)
        return {...state, menuOn: true, menu: menuActive}
    }

    if (action.type === "MENUOFF") {
        return {...state, menuOn: false, menu: Data};
    }
    return state;
}

function Store({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = {state, dispatch}
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default Store
