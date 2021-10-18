import React from 'react';
import AppProvider from './providers/AppProvider';
import Layout from './components/Layout';

export default function App(): JSX.Element {
    return (
        <AppProvider>
            <Layout />
        </AppProvider>
    );
};