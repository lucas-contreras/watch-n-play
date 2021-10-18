import classNames from 'classnames';
import React from 'react';
import { useAppProvider } from '../providers/AppProvider';
import Popover from './Popover/Popover';


const css = {
    container: 'content-iframe',
    iframe: 'content-iframe__iframe'
};

interface ContentIframeProps {
    href: string;
}

export default function ContentIframe({ href }: ContentIframeProps): JSX.Element {
    const { sidebarOpen } = useAppProvider();
    const containerClass = classNames(css.container, {
        [`${css.container}--sidebar-open`]: sidebarOpen,
    });

    return (
        <div className={containerClass}>
            <iframe
                src={href}
                title='testing video'
                className={css.iframe}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            ></iframe>
        </div>
    );


};



{/* <iframe
    width="727"
    height="409"
    src="https://www.youtube.com/embed/O5e2JE_Kzh4?list=RDjN2AdOjI4FI"
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe> */}