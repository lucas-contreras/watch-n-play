import React, { useCallback } from "react";
import { useAppProvider } from "../../providers/AppProvider";

import './Popover.scss';

export default function Popover(): JSX.Element | null {
    const { currentQuestion } = useAppProvider();
    if (!currentQuestion) {
        return null;
    }

    // const clickHandle = useCallback(() => {

    // }, []);

    return (
        <div className="popover-container">
            <h2>{currentQuestion.title}</h2>
            <div>
                {currentQuestion.questions.map((q) => {
                    return (
                        <button onClick={() => {}}>{q.question}</button>
                    );
                })}
            </div>
        </div>
    )
}