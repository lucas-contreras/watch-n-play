import React, { useCallback } from "react";
import { useAppProvider } from "../../providers/AppProvider";
import { QuestionType } from "../../types/Question";

import './Popover.scss';

const css = {
    container: 'popover-container',
    wrapper: 'popover-container__wrapper',
    header: 'popover-container__header',
    footer: 'popover-container__footer',
    button: 'popover-container__button',
}

export default function Popover(): JSX.Element | null {
    const { currentQuestion, setCurrentQuestion } = useAppProvider();
    const clickHandle = useCallback((q: QuestionType) => {
        setCurrentQuestion(undefined);
    }, [setCurrentQuestion]);

    if (!currentQuestion) {
        return null;
    }

    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <h2 className={css.header}>{currentQuestion.title}</h2>
                <div className={css.footer}>
                    {currentQuestion.questions.map((q) => {
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