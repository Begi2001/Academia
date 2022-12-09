import React from 'react'
import { awrapper } from '../../Data/dummyData'
import WrapperImg from './CardImg/awrapper.png'
import './awrapper.scss'

const AWrapper = () => {
	return (
		<div
			className='aw-wrapper'
			style={{ backgroundImage: `url(${WrapperImg})` }}
		>
			<section className='awrapper'>
				<div className='box-wrapper'>
					{awrapper.map((res, id) => (
						<div key={id} className='box'>
							<img src={res.img} alt='' />
							<div className='text'>
								<h1>{res.data}</h1>
								<h3>{res.title}</h3>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}

export default AWrapper
