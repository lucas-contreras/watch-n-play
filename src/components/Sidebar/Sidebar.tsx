import React, { useCallback, useState } from "react";
import classNames from "classnames";

import QuestionList from "../Question/QuestionList";
import { useAppProvider } from "../../providers/AppProvider";

import './Sidebar.scss';
import QuestionAdd from "../Question/QuestionAdd";

const css = {
    container: 'sidebar',
};

export default function Sidebar(): JSX.Element {
    const [openQuestionBox, setOpenQuestionBox] = useState(false);
    const { sidebarOpen, dataQuestion, setOpenSidebar } = useAppProvider();

    const toggleHandler = useCallback(() => {
        setOpenSidebar(!sidebarOpen);
    }, [sidebarOpen, setOpenSidebar]);

    const handleAddQuestion = useCallback((value: boolean) => {
        setOpenQuestionBox(value);
    }, [setOpenQuestionBox]);

    const sidebarClasses = classNames(css.container, {
        [`${css.container}--open`]: sidebarOpen,
    });

    return (
        <section className={sidebarClasses} aria-label='Trivia questions'>
            <button onClick={toggleHandler}>{sidebarOpen ? 'close': 'open'}</button>
            {sidebarOpen && <QuestionList />}
            {openQuestionBox && 
                <QuestionAdd
                    data={dataQuestion.editQuestion}
                    discard={() => setOpenQuestionBox(false)}
                    save={() => {}} 
                />
            }
            {sidebarOpen && 
                <button
                    disabled={openQuestionBox}
                    onClick={() => setOpenQuestionBox(true)}
                >
                    add question
                </button>
            }
        </section>
    )
}