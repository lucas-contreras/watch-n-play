import React from 'react';
import './Header.scss';

interface HeaderProps {
    title?: string,
}

const css = {
    container: 'header',
};

export default function Header({ title }: HeaderProps):JSX.Element {
    return (
        <header className={css.container}>
            <h1>{title}</h1>
        </header>
    );
}