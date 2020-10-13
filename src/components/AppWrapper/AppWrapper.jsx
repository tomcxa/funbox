import React from 'react';
import './AppWrapper.scss';

const AppWrapper = ({children}) => {
    return (
        <div className="app-wrapper">
            {children}
        </div>
    )
}

export default AppWrapper
