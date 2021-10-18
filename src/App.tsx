import React from 'react';
import Header from './components/Header';
import AppProvider from './providers/AppProvider';
import Sidebar from './components/Sidebar';

import './App.scss';
import Question from './components/Questions/Question';

const css = {
    container: 'app-container',
    main: 'main'
};

export default function App(): JSX.Element {
    return (
        <div className={css.container}>
            <AppProvider>
                <Header title="a" />
                <Sidebar>
                    <Question title="test1" question1="question 1" question2= "question 2" />
                </Sidebar>
                <main className={css.main}>
                    a
                </main>
            </AppProvider>
        </div>
    );
};