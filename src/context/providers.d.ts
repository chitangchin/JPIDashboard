import { ReactNode, SetStateAction, Dispatch } from "react";

export type ContextProviderProps = {
    children: ReactNode
}

export interface FirstTimeUserContextType {
    firstTimeUser: boolean;
    setFirstTimeUser: Dispatch<SetStateAction<boolean>>
}

export interface SignUpIndexContextType {
    index: number;
    setIndex: Dispatch<SetStateAction<number>>
}