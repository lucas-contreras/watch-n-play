import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { QuestionInfo } from "../types/Question";

export interface QuestionProviderContextProps {
    questions: QuestionInfo[];
    loading: boolean;
}

interface QuestionProviderProps {
    children?: React.ReactNode,
}

const QuestionContext = React.createContext<QuestionProviderContextProps>({
    questions: [],
    loading: true,
});

export function useQuestionProvider(): QuestionProviderContextProps {
    return useContext(QuestionContext);
}

export default function QuestionProvider({ children }: QuestionProviderProps): JSX.Element {
    const [questions, setQuestions] = useState<QuestionInfo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const url1 = 'http://localhost:5000/questions';

    const fetchSth = useCallback(async() => {
        const response = await fetch(url1).then((res) => res.json());
        setLoading(false)
        setQuestions(response as QuestionInfo[]);
        // debugger;
    }, [setLoading, setQuestions]);

    useEffect(() => {
        fetchSth();

    }, []);

    const value = useMemo(() => {
        return ({ 
            questions,
            loading
        });
    }, [questions, loading]);
    
    return (
        <QuestionContext.Provider value={value}>
            {children}
        </QuestionContext.Provider>
    );
}