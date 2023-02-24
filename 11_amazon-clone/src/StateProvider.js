import React from 'react'
import { createContext, useContext, useReducer } from 'react';

// Prepares the dataLayer
export const StateContext = createContext();

export default function StateProvider({ reducer, initalStage, children }) {
    return (
        <StateContext.Provider value={useReducer(reducer, initalStage)} >{children}</StateContext.Provider>
    )
}

// pull info frm the data layer
export const useStateValue = () => useContext(StateContext);