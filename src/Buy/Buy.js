import React from 'react'
import './Buy.scss'
import Card from './Card';

import data from './data.json';

const tests = data.data;



function Buy() {
  return (
    <div className="hel">
        <div className='filter'>

        </div>
    <div class="container">    
        {tests.map((item) => (
          <Card
            name={item.name}
           head={item.head}
            cont={item.cont}
            bg = {item.back}
          />
        ))}
    </div>
    </div>
  )
}

export default Buy