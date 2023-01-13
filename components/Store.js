import { createContext, useReducer } from "react"
import { Data, dataTwo } from "../Utils/Data";

export const AppContext = createContext();

const initialState = {
    menuOn: false,
    menu: Data,
    imageData: [],
    companyMenu: false,
    mediaMenu: false,
    sponsorMenu: false,
}

const reducer = (state, action) => {
    if (action.type === "MENUSHOW") {
        const menuActive = state.menu.filter((item) => item.id === action.payload)
        return {...state, menuOn: true, menu: menuActive}
    }

    if (action.type === "MENUOFF") {
        return {...state, menuOn: false, menu: Data};
    }
    if (action.type === "IMAGECHANGER") {
        const currentImage = dataTwo.filter((item) => item.id === action.payload)
        return {...state, imageData: currentImage}
    }
    if (action.type === "COMPANYMENU") {
        return state.companyMenu === false
          ? { ...state, companyMenu: true }
          : { ...state, companyMenu: false };
    }
    if (action.type === "MEDIAMENU") {
        return state.mediaMenu === false
          ? { ...state, mediaMenu: true }
          : { ...state, mediaMenu: false };
    }
    if (action.type === "SPONSORMENU") {
        return state.sponsorMenu === false
          ? { ...state, sponsorMenu: true }
          : { ...state, sponsorMenu: false };
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
