
export interface QuestionType {
    question: string;
    isCorrect?: boolean;
    selected?: boolean;
}

export interface QuestionInfo {
    id: number,
    title: string;
    questions: QuestionType[];
}