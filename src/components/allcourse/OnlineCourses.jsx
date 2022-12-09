import React from 'react'
import Title from '../common/Title/Title'
import './onlineCourse.scss'

import { online } from '../../Data/dummyData'
const OnlineCourses = () => {
	return (
		<>
			<section className='online'>
				<div className='container'>
					<Title
						subtitle={'COURSES'}
						title={'Browse Our Online Course'}
					/>
					<div className='grid'>
						{online.map((res, id) => (
							<div key={id} className='box'>
								<div className='img'>
									<img src={res.img} />
									<img src={res.hoverImg} className='show' />
								</div>
								<h1>{res.courseName}</h1>
								<span>{res.course}</span>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default OnlineCourses
