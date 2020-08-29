import React from 'react'
import { nanoid } from 'nanoid'
import CatEatItemList from './CatEatItemList'
import CatEatItemWrapper from './CatEatItemWrapper'
import '../styles/CatEatContainerStyle.scss'
import { catEatData } from '../data'

const CatEatContainer = () => {


    return (
        <div className="cat-eat-container">
            <h2 className="cat-eat-title">Ты сегодня покормил кота?</h2>
            <CatEatItemList>
                {catEatData.map((card) => (<CatEatItemWrapper key={nanoid()} card={card} />))}
            </CatEatItemList>
        </div>
    )
}

export default CatEatContainer
