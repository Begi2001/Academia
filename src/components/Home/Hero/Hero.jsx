import React from 'react'
import './hero.scss'
import { UilArrowRight } from '@iconscout/react-unicons'
import HerBgImg from './BgImg/bg.png'
import Title from '../../common/Title/Title'
const Hero = () => {
	return (
		<>
			<section
				className='hero'
				style={{ backgroundImage: `url(${HerBgImg})` }}
			>
				<div className='row'>
					<Title
						subtitle={'WELCOME TO ACADEMIA'}
						title={'Best Online Education'}
					/>
					<p className='title'>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Nobis deleniti, iure architecto nam dolorem
						repellat ipsa placeat recusandae corporis odit
						temporibus vero consequuntur eaque quo tenetur quaerat
						debitis labore fugit.
					</p>
					<div className='button'>
						<button className='primary-btn'>
							GET STARTED NOW <UilArrowRight />
						</button>
						<button>
							VIEW COURSE <UilArrowRight />
						</button>
					</div>   
				</div>
			</section>
			<div className='margin' />
		</>
	)
}

export default Hero
