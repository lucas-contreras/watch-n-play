import './QuestionList.scss';

import React from "react";
import QuestionView from "./QuestionView";
import QuestionAdd from "./QuestionAdd";
import Spinner from "../Common/Spinner";

import { useAppProvider } from "../../providers/AppProvider";

const css = {
    container: 'question-list',
    bodyQuestions: 'question-list__body',
}

export default function QuestionList(): JSX.Element | null {
    const { dataQuestion } = useAppProvider();

    if (dataQuestion.loading) {
        return <Spinner />
    }

    return (
        <ul className={css.container}>
            <li><h3>Trivia questions</h3></li>
            <div className={css.bodyQuestions}>
                {dataQuestion.questions.map((d) => {
                    return (
                        <QuestionView data={d} key={d.id} />
                    );
                })}
            </div>
        </ul>
    );
}