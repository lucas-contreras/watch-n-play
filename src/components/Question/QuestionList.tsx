import React from "react";
import { QuestionInfo } from "../../types/Question";
import QuestionView from "./QuestionView";

import './QuestionList.scss';


const css = {
    container: 'question-list',
}

// get from somewhere else
const data: QuestionInfo[] = [
    {id: 1, title: 'how to...', questions: [
        { question: '100', isCorrect: false },
        { question: '200', isCorrect: true },
    ]},
    {id: 2, title: 'another question', questions: [
        { question: 'yes', isCorrect: true },
        { question: 'no', isCorrect: false },
    ]},
];

export default function QuestionList(): JSX.Element {
    
    return (
        <ul className={css.container}>
            <li><h3>Trivia questions</h3></li>
            {data.map((d) => {
                return (
                    <QuestionView data={d} key={d.id} />
                )
            })} 
        </ul>
    );
}