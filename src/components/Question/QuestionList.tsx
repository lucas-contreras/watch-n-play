import React from "react";
import QuestionView from "./QuestionView";
import { useAppProvider } from "../../providers/AppProvider";

import './QuestionList.scss';
import Spinner from "../Common/Spinner";

const css = {
    container: 'question-list',
}

export default function QuestionList(): JSX.Element | null {
    const { dataQuestion } = useAppProvider();

    if (dataQuestion.loading) {
        return <Spinner />
    }

    return (
        <ul className={css.container}>
            <li><h3>Trivia questions</h3></li>
            {dataQuestion.questions.map((d) => {
                return (
                    <QuestionView data={d} key={d.id} />
                )
            })} 
        </ul>
    );
}