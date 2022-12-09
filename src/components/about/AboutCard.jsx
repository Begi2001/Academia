import React from 'react'
import { homeAbout } from '../../Data/dummyData'
import CardImg from './CardImg/about.png'
import Title from '../common/Title/Title'
import AWrapper from './AWrapper'
import './aboutCard.scss'

const AboutCard = () => {
	return (
		<>
			<section className='aboutHome'>
				<div className='container'>
					<img className='cardImg' src={CardImg} alt='' />
					<div className='right row'>
						<Title
							subtitle={'LEARN ANYTHING'}
							title={'Benefits About Online Learning Expertise'}
						/>
						<div className='items'>
							{homeAbout.map((res, id) => (
								<div key={id} className='item flexSB'>
									<div className='img'>
										<img src={res.img} alt='' />
									</div>
									<div className='text'>
										<h2>{res.title}</h2>
										<p>{res.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<AWrapper />
		</>
	)
}

export default AboutCard
