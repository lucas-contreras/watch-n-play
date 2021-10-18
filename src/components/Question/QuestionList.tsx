import React from "react";
import QuestionView from "./QuestionView";
import { useQuestionProvider } from "../../providers/QuestionProvider";
import { useAppProvider } from "../../providers/AppProvider";

import './QuestionList.scss';

const css = {
    container: 'question-list',
}

export default function QuestionList(): JSX.Element {
    const { loading, questions } = useQuestionProvider();
    const { sidebarOpen } = useAppProvider();

    if (loading) {
        return <div>loading...</div>
    }

    return (
        <ul className={css.container} style={{ display: `${sidebarOpen ? 'block': 'none'}`}}>
            <li><h3>Trivia questions</h3></li>
            {questions.map((d) => {
                return (
                    <QuestionView data={d} key={d.id} />
                )
            })} 
        </ul>
    );
}