import React from 'react'
import { price } from '../../Data/dummyData'
import './priceCard.scss'

const PriceCard = () => {
	return (
		<>
			{price.map((res, id) => (
				<div key={id} className='items-price'>
					<h4>{res.name}</h4>
					<h1>
						<span>$</span>
						{res.price}
					</h1>
					<p>{res.desc}</p>
					<button className='outline-btn'>GET STARTED</button>
				</div>
			))}
		</>
	)
}

export default PriceCard
