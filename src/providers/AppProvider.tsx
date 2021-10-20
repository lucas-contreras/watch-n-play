import React, { useContext, useEffect, useMemo, useState } from "react";
import useQuestions, { UseQuestionsOutput, questionInitialState} from "../hooks/useQuestions";

export interface AppProviderContextProps {
    sidebarOpen: boolean;
    dataQuestion: UseQuestionsOutput;
    setOpenSidebar: (value: boolean) => void;
}

interface AppProviderProps {
    children?: React.ReactNode,
}

const AppContext = React.createContext<AppProviderContextProps>({
    sidebarOpen: false,
    dataQuestion: questionInitialState,
    setOpenSidebar: (value: boolean) => undefined,
});

export function useAppProvider(): AppProviderContextProps {
    return useContext(AppContext);
}

export default function AppProvider({ children }: AppProviderProps): JSX.Element {
    const [sidebarOpen, setOpenSidebar] = useState(false);
    const [dataQuestion, setDataCuestion] = useState<UseQuestionsOutput>(questionInitialState);

    const questionResult = useQuestions(sidebarOpen);
    
    useEffect(() => {
        setDataCuestion(questionResult);
    }, [questionResult]);

    const value = useMemo(() => {
        return ({ 
            sidebarOpen,
            dataQuestion,
            setOpenSidebar,
        });
    }, [sidebarOpen, dataQuestion]);
    
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}