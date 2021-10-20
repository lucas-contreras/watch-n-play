import React, { useCallback } from "react";
import { useAppProvider } from "../../providers/AppProvider";
import { QuestionInfo, AnswerType } from "../../types/Question";

import './Popover.scss';

const css = {
    container: 'popover-container',
    wrapper: 'popover-container__wrapper',
    header: 'popover-container__header',
    footer: 'popover-container__footer',
    button: 'popover-container__button',
}

export default function Popover(): JSX.Element | null {
    const { dataQuestion } = useAppProvider();
    const { currentQuestion, updateQuestion } = dataQuestion;

    const clickHandle = useCallback((a: AnswerType) => {
        if (currentQuestion) {
            updateQuestion({...a, selected: true});
        }
    }, [updateQuestion]);

    if (!currentQuestion) {
        return null;
    }

    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <h2 className={css.header}>{currentQuestion?.title}</h2>
                <div className={css.footer}>
                    {currentQuestion?.answers.map((q) => {
                        return (
                            <button
                                key={q.question}
                                onClick={() => clickHandle(q)}
                                className={css.button}
                            >
                                {q.question}
                            </button>
                        );
                    })}
                </div>
            </div>            
        </div>
    );
}