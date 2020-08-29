import React from 'react'
import '../styles/CatEatItemListStyle.scss'

const CatEatCardList = ({ children }) => {
    return (
        <div className="cat-eat-cards">
            {children}
        </div>
    )
}

export default CatEatCardList
