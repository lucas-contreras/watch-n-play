import React, { useCallback } from "react";
import classNames from "classnames";

import QuestionList from "../Question/QuestionList";
import { useAppProvider } from "../../providers/AppProvider";

import './Sidebar.scss';

const css = {
    container: 'sidebar',
};

export default function Sidebar(): JSX.Element {
    const { sidebarOpen, setOpenSidebar } = useAppProvider();

    const toggleHandler = useCallback(() => {
        setOpenSidebar(!sidebarOpen);
    }, [sidebarOpen, setOpenSidebar]);

    const sidebarClasses = classNames(css.container, {
        [`${css.container}--open`]: sidebarOpen,
    });

    return (
        <section className={sidebarClasses} aria-label='Trivia questions'>
            <button onClick={toggleHandler}>{sidebarOpen ? 'close': 'open'}</button>
            {sidebarOpen ? <QuestionList /> : null}
        </section>
    )
}