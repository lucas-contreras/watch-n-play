import React, { useContext, useMemo, useState } from "react";

export interface AppProviderContextProps {
    sidebarOpen: boolean,
    toggleSidebar: (value: boolean) => void,
}

interface AppProviderProps {
    children?: React.ReactNode,
}

const AppContext = React.createContext<AppProviderContextProps>({
    sidebarOpen: false,
    toggleSidebar: (value: boolean) => undefined,
});

export function useAppProvider(): AppProviderContextProps {
    return useContext(AppContext)
}

export default function AppProvider({ children }: AppProviderProps): JSX.Element {
    const [sidebarOpen, toggleSidebar] = useState(false);
    const value = useMemo(() => {
        return ({ sidebarOpen, toggleSidebar })
    }, [sidebarOpen]);
    
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}