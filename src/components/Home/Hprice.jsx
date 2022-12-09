import React from 'react'
import './hprice.scss'
import Title from '../common/Title/Title'
import PriceCard from '../pricing/PriceCard'

const Hprice = () => {
	return (
		<>
			<section className='hprice-padding'>
				<Title subtitle={'our pricing'} title={'pricing & packages'} />
				<div className='price-container'>
					<PriceCard />
				</div>
			</section>
		</>
	)
}

export default Hprice
