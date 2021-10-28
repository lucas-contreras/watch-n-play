import { useCallback, useEffect, useMemo, useState } from "react";
import { QuestionInfo, AnswerType } from "../types/Question";

const url1 = 'http://localhost:5000/questions';

export const questionInitialState: UseQuestionsOutput = {
    loading: true,
    questions: [],
    updateQuestion: (answer: AnswerType) => undefined,
    setCurrentQuestion: (question?: QuestionInfo) => undefined,
    setEditQuestion: (question?: QuestionInfo) => undefined,
}

export interface UseQuestionsOutput {
    currentQuestion?: QuestionInfo,
    editQuestion?: QuestionInfo,
    questions: QuestionInfo[],
    loading: boolean,
    updateQuestion: (answer: AnswerType) => void,
    setCurrentQuestion: (question?: QuestionInfo) => void,
    setEditQuestion: (question?: QuestionInfo) => void,
}

export default function useQuestions(fetching?: boolean): UseQuestionsOutput {
    const [currentQuestion, setCurrentQuestion] = useState<QuestionInfo | undefined>(undefined);
    const [editQuestion, setEditQuestion] = useState<QuestionInfo | undefined>(undefined);
    const [questions, setQuestions] = useState<QuestionInfo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const updateQuestion = useCallback((answer: AnswerType) => {
        if (!currentQuestion) {
            return;
        }

        const newAnswers = currentQuestion.answers.map((a) => {
            return (a.id === answer.id) ? answer : ({ ...a, selected: false });
        });

        const newQuestions = [...questions];
        const indexQue = newQuestions.findIndex((q) => q.id === currentQuestion.id);
        newQuestions[indexQue].answers = newAnswers;

        setQuestions(newQuestions);
        setCurrentQuestion(undefined);
    }, [currentQuestion]);

    const fetchQuestions = useCallback(async () => {
        const response = await fetch(url1).then((res) => res.json());

        setLoading(false)
        setQuestions(response as QuestionInfo[]);
    }, [setLoading, setQuestions]);

    useEffect(() => {
        if (fetching && questions.length === 0) {
            fetchQuestions();
        }

        if (!fetching) {
            setCurrentQuestion(undefined);
        }
    }, [fetching]);

    return useMemo(() => ({
        currentQuestion,
        editQuestion,
        questions,
        loading,
        updateQuestion,
        setCurrentQuestion,
        setEditQuestion,
    }), [currentQuestion, editQuestion, questions, loading]);
}
