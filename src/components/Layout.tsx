import React from 'react';
import classNames from 'classnames';

import Header from './Header';
import Sidebar from './Sidebar/Sidebar';
import Popover from './Popover/Popover';
// import ContentIframe from './ContentIframe';
import { useAppProvider } from '../providers/AppProvider';

import './Layout.scss';

const css = {
    container: 'layout-container',
    main: 'main',
    mainContent: 'main-content'
};

export default function Layout(): JSX.Element {
    const { sidebarOpen } = useAppProvider();
    const mainContentClass = classNames(css.mainContent, {
        [`${css.mainContent}--sidebar-open`]: sidebarOpen,
    });

    return (
        <div className={css.container}>
            <Header title="Trivia questions" sidebarOpen={sidebarOpen} />
            <Sidebar />
            <main className={css.main}>
                {/* <ContentIframe href="https://www.youtube.com/embed/O5e2JE_Kzh4" /> */}
                <div className={mainContentClass}>
                    {/* <video src="./resources/sample-cat-video.mp4"></video> */}
                    <img style={{width:'100%'}} src="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg" alt="" />
                    <Popover />
                </div>
            </main>
        </div>
    );
};