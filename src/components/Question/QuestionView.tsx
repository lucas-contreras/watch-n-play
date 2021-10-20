import React, { useCallback } from "react";
import classNames from "classnames";

import Edit from '../assets/edit.svg';
import Trash from '../assets/trash.svg';
import CheckMarkIcon from "../assets/CheckMarkIcon";
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

export default function QuestionView({ data }: QuestionViewProps): JSX.Element | null {
    const { dataQuestion } = useAppProvider();
    const { id, title, answers } = data;

    if (!dataQuestion) {
        return null;
    }

    const { currentQuestion, setCurrentQuestion } = dataQuestion;

    const clickHandle = useCallback(() => {
        setCurrentQuestion(data);
    }, [setCurrentQuestion]);

    const liClass = classNames(css.container, {
        [`${css.container}--current`]: currentQuestion?.id === id,
    });

    return (
        <li className={liClass}>
            <div className={css.questionsList}>
                <h4>{title}</h4>
                {answers.map((a) => {
                    const qClass = classNames(css.question, {
                        [`${css.question}--correct`]: a.isCorrect,
                        [`${css.question}--selected`]: a.selected,
                    });

                    return (
                        <label 
                            key={a.question}
                            className={qClass} 
                        >
                            {a.question}
                            {a.isCorrect ? (
                                <CheckMarkIcon color='#02661c' />
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