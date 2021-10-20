import React from 'react';

import './Spinner.scss';

interface SpinnerProps {
	width?: number;
}

export default function Spinner({ width = 64 }: SpinnerProps) {
    return (
        <div
		    className="spinner"
		    style={{
                width,
                height: width,
	    	}}
	    >
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={width} data-name="Loading Animation" viewBox="0 0 64 64">
                <path id="Path_8694" fill="#ced7e0" d="M214 47a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm0 56.471A24.471 24.471 0 1 1 238.471 79 24.471 24.471 0 0 1 214 103.471z" data-name="Path 8694" transform="translate(-182 -47)" />
                <path id="Path_8695" fill="#63768a" d="M246 79a32 32 0 0 0-32-32v7.529A24.471 24.471 0 0 1 238.471 79z" data-name="Path 8695" transform="translate(-182 -47)" />
            </svg>
	    </div>
    );
}