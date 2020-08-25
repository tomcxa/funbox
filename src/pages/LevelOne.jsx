import React from 'react'
import { asks } from '../asks/asks'

const LevelOne = () => {
    return (
        <div>
           <h2>LevelOne</h2>
           <ul>
               {
                    asks.map((item, index) => (
                        <li key={index} >
                            <h3>Q{index+1}</h3>
                            <p>{item.q}</p>
                            <h3>A{index + 1}</h3>
                            <p>{item.a}</p>
                        </li>
                    ))
                }
           </ul>
        </div>
    )
}

export default LevelOne
