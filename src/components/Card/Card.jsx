/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './Card.scss';

const Card = ({ card }) => {
    const [selected, setSelected] = useState(false)

    const toogleSelected = () => {
        if (card.inStoke) setSelected(prev => !prev)
    }

    const linkClickHandler = (event) => {
        event.preventDefault()
        toogleSelected()
    }

    return (
        <div className="card-wrapper">
            <div
                onClick={toogleSelected}
                className={`card ${card.inStoke ? '' : 'disabled'} ${selected ? 'selected' : ''}`}
            >
                <div className="card-header">
                    <span className="card-header__description">{card.description}</span>
                </div>
                <div className="card-body">
                    <h2 className="card-body__title">{card.title}</h2>
                    <span className="card-body__with">{card.whitWhat}</span>
                    <div className="card-body__promo">
                        {card.promotion.map((promo, i) => <div key={i}>{promo}</div>)}
                    </div>
                </div>
                <div className="card-weight">{card.weight}<br /><div className="card-weight__unit">кг</div></div>
            </div>
            <div className={`card-info ${card.inStoke ? '' : 'info-disabled'}`}>
                {
                    (selected
                        && <span>{card.selectedText}</span>)
                    || (!card.inStoke
                        && <span>Печалька, {card.whitWhat} закончился</span>)
                    || <span>Чего сидишь? Порадуй котэ, <a onClick={linkClickHandler} className='card-info__link' href='#'>купи</a>.</span>
                }
            </div>
        </div>
    )
}

export default Card;
