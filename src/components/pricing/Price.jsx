import React from 'react'
import Back from '../back/Back'
import Faq from './Faq'
import './price.scss'
import PriceCard from './PriceCard'

const Price = () => {
	return (
		<>
			<Back title={'Choose The Right Plan'} />
			<section className='price-padding'>
				<div className='container'>
					<PriceCard />
				</div>
			</section>
			<Faq />
		</>
	)
}

export default Price
