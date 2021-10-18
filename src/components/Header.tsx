import React from 'react';
import classNames from 'classnames';

import './Header.scss';

interface HeaderProps {
    title?: string;
    sidebarOpen: boolean;
}

export default function Header({ title, sidebarOpen }: HeaderProps):JSX.Element {
    const headerClass = classNames('header', {
        'header--sidebar-open': sidebarOpen,
    });

    return (
        <header className={headerClass}>
            <h1>{title}</h1>
        </header>
    );
}