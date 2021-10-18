import React, { useContext, useMemo, useState } from "react";
import { QuestionInfo } from "../types/Question";

export interface AppProviderContextProps {
    sidebarOpen: boolean;
    currentQuestion?: QuestionInfo;
    toggleSidebar: (value: boolean) => void;
    setCurrentQuestion: (question?: QuestionInfo) => void;
}

interface AppProviderProps {
    children?: React.ReactNode,
}

const AppContext = React.createContext<AppProviderContextProps>({
    sidebarOpen: false,
    toggleSidebar: () => {},
    setCurrentQuestion: () => {},
});

export function useAppProvider(): AppProviderContextProps {
    return useContext(AppContext);
}

export default function AppProvider({ children }: AppProviderProps): JSX.Element {
    const [sidebarOpen, toggleSidebar] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState<QuestionInfo | undefined>(undefined);

    const value = useMemo(() => {
        return ({ 
            sidebarOpen,
            currentQuestion,
            toggleSidebar,
            setCurrentQuestion,
        });
    }, [sidebarOpen, currentQuestion]);
    
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}