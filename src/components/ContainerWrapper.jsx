import React from 'react'
import '../styles/ContainerWrapperStyle.scss'

const ContainerWrapper = ({children}) => {
    return (
        <div className="container-wrapper">
            {children}
        </div>
    )
}

export default ContainerWrapper
