import { createContext, useReducer } from 'react';
import redusers from './Reducers';

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const initialState = { notify: {}, auth: {}}
    const [state, dispatch] = useReducer(redusers, initialState)

    return(
        <DataContext.Provider value={[state, dispatch]}>
            {children}
        </DataContext.Provider>
    )
}