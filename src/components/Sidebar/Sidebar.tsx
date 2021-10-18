import React, { useCallback } from "react";
import classNames from "classnames";

import { useAppProvider } from "../../providers/AppProvider";

import './Sidebar.scss';

interface SidebarProps {
    sidebarOpen: boolean;
    children?: React.ReactNode;
}

const css = {
    container: 'sidebar',
};

export default function Sidebar({ children, sidebarOpen }: SidebarProps): JSX.Element {
    const { toggleSidebar } = useAppProvider();

    const toggleHandler = useCallback(() => {
        toggleSidebar(!sidebarOpen);
    }, [toggleSidebar, sidebarOpen]);

    const sidebarClasses = classNames(css.container, {
        [`${css.container}--open`]: sidebarOpen,
    });

    return (
        <section className={sidebarClasses} aria-label='Trivia questions'>
            <button onClick={toggleHandler}>{sidebarOpen ? 'close': 'open'}</button>
            {sidebarOpen ? children : null}
        </section>
    )
}