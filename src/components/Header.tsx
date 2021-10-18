import React from 'react';

interface HeaderProps {
    children?: React.ReactNode,
}

export default function Header(
{ children }: HeaderProps,
):JSX.Element {
    return (
        <header>
            <h1>
                {children}
            </h1>
        </header>
    );
}