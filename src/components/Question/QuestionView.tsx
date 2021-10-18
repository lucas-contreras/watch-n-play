import React, { useCallback } from "react";
import classNames from "classnames";

import Edit from '../assets/edit.svg';
import Trash from '../assets/trash.svg';
import CheckMark from '../assets/check-mark.svg';
import { QuestionInfo } from "../../types/Question";
import { useAppProvider } from "../../providers/AppProvider";

interface QuestionViewProps {
    data: QuestionInfo;
}

const css = {
    container: 'question-view',
    questionsList: 'question-view-list',
    question: 'question-view__label',
    footer: 'question-view-footer',
    buttonTrash: 'question-view-footer__button-trash',
}

export default function QuestionView({ data }: QuestionViewProps): JSX.Element {
    const { setCurrentQuestion } = useAppProvider();
    const { id, title, questions } = data;

    const clickHandle = useCallback(() => {
        setCurrentQuestion(data);
    }, [setCurrentQuestion]);

    return (
        <li className={css.container}>
            <div className={css.questionsList}>
                <h4>{title}</h4>
                {questions.map((q) => {
                    const qClass = classNames(css.question, {
                        [`${css.question}--correct`]: q.isCorrect,
                    });

                    return (
                        <label key={q.question} className={qClass}>
                            {q.question}
                            {q.isCorrect ? (
                                <img src={CheckMark} alt={q.question} />
                            ): null}
                        </label>
                    )
                })}
            </div>
            <div className={css.footer}>
                <button onClick={clickHandle}>open</button>
                <button className={css.buttonTrash}>
                    <img src={Trash} alt="" />
                </button>
                <button>
                    <img src={Edit} alt="" />
                </button>
            </div>
        </li>
    );
}