/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import '../styles/CatEatItemStyle.scss'

const CatEatItemWrapper = ({ card }) => {
    const [selected, setSelected] = useState(false)

    const toogleSelected = () => {
        if (card.inStoke) setSelected(prev => !prev)
    }

    const linkClickHandler = (event) => {
        event.preventDefault()
        toogleSelected()
    }

    return (
        <div className="cat-eat-wrapper">
            <div
                onClick={toogleSelected}
                className={`cat-eat-card ${card.inStoke ? '' : 'disabled'} ${selected ? 'selected' : ''}`}
            >
                <div className="cat-eat-card__card-header">
                    <span className="cat-eat-card__card-header__description">{card.description}</span>
                </div>
                <div className="cat-eat-card__card-body">
                    <h2 className="cat-eat-card__card-body__title">{card.title}</h2>
                    <span className="cat-eat-card__card-body__with">{card.whitWhat}</span>
                    <div className="cat-eat-card__card-body__promo">
                        {card.promotion.map((promo, i) => <div key={i}>{promo}</div>)}
                    </div>
                </div>
                <div className="cat-eat-card__weight">{card.weight}<br /><div className="unit">кг</div></div>
            </div>
            <div className="cat-eat-footer">
                {
                    (selected
                        && <span>{card.selectedText}</span>)
                    || (!card.inStoke
                        && <span>Печалька, {card.whitWhat} закончился</span>)
                    || <span>Чего сидишь? Порадуй котэ, <a onClick={linkClickHandler} className='cat-eat-footer__link' href='#'>купи</a>.</span>
                }
            </div>
        </div>
    )
}

export default CatEatItemWrapper
