import React from 'react'
import { nanoid } from 'nanoid'
import Cards from '../Cards/Cards';
import Card from '../Card/Card';
import { catEatData } from '../../data';
import './AppContainer.scss';

const AppContainer = () => {
    return (
        <div className="app-container">
            <h2 className="app-title">Ты сегодня покормил кота?</h2>
            <Cards>
                {catEatData.map((card) => (<Card key={nanoid()} card={card} />))}
            </Cards>
        </div>
    )
}

export default AppContainer;
