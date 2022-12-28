import React from 'react'
import Title from '../../common/Title/Title'
import './test.scss'
import { FaQuoteLeft } from 'react-icons/fa'
import { testimonal } from '../../../Data/dummyData'
const Test = () => {
	return (
		<>
			<section className='testimonal-padding'>
				<div className='container'>
					<Title
						subtitle={'testimonal'}
						title={'our successful students'}
					/>
					<div className='content-flex'>
						{testimonal.map((res, id) => (
							<div key={id} className='items-shadow'>
								<div className='box-flex'>
									<div className='img'>
										<img src={res.img} alt='' />
										<div className='bg-quote'>
											<FaQuoteLeft className='quote' />
										</div>
									</div>
									<div className='name'>
										<h2>{res.name}</h2>
										<span>{res.post}</span>
									</div>
								</div>
								<p>{res.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Test
