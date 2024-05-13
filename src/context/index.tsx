import { createContext, useState } from 'react'

import { ContextProviderProps, FirstTimeUserContextType, SignUpIndexContextType } from './providers';

//Creating Context
export const FirstTimeUserContext = createContext<FirstTimeUserContextType>({
    firstTimeUser: true,
    setFirstTimeUser: () => { true }
});

export const SignUpIndex = createContext<SignUpIndexContextType>({
    index: 0,
    setIndex: () => { 0 }
})

//Providers
export const FirstTimeUserProvider = ({ children }: ContextProviderProps) => {
    const [firstTimeUser, setFirstTimeUser] = useState(true);
    return (
        <FirstTimeUserContext.Provider value={{ firstTimeUser, setFirstTimeUser }}>
            {children}
        </FirstTimeUserContext.Provider>
    )
}

export const SignUpIndexProvider = ({ children }: ContextProviderProps) => {
    const [index, setIndex] = useState(0);
    return (
        <SignUpIndex.Provider value={{ index, setIndex }}>
            {children}
        </SignUpIndex.Provider>
    )
}
