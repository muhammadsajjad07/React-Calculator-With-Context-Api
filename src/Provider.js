import React, { useReducer } from 'react'

const initialState = {
    number: 0
}

const actions = {
    CALCULATE: 'CALCULATE',
   
}

function reducer(state, action) {
    switch (action.type) {
        case actions.CALCULATE:
            return {
                ...state,
                number: eval(action.value)
            }
    }

}
export const CalculatorContext = React.createContext();

function Provider({children}) {

    const [state, dispatch] = useReducer(reducer, initialState)

    const value = {
        number:state.number,
        setCalculateEvent:(value)=>{dispatch({type:actions.CALCULATE ,value})},        
    }

    return (
        <CalculatorContext.Provider value={value}>
            {children}
        </CalculatorContext.Provider>
    )

}

export default Provider