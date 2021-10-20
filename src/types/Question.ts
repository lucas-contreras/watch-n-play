
export interface AnswerType {
    id: string;
    question: string;
    isCorrect?: boolean;
    selected?: boolean;
}

export interface QuestionInfo {
    id: number,
    title: string;
    answers: AnswerType[];
}