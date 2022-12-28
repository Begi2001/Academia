import React from 'react'
import { coursesCard } from '../../Data/dummyData'
import './courses.scss'
const CourseCard = () => {
	return (
		<section className='course-card'>
			<div className='grid'>
				{coursesCard.map((res, id) => (
					<div key={id} className='cards'>
						<div className='content'>
							<div className='circle'>
								<div className='bg-img'>
									<img src={res.img} alt='' />
								</div>
								<h1>{res.coursesName}</h1>
							</div>
							<div className='text'>
								<div className='rate'>
									{coursesCard.map((res, id) => (
										<div key={id}>
											<p style={{ color: '#1eb2a6' }}>
												{res.icon}
											</p>
										</div>
									))}
									<label htmlFor=''>(5.0)</label>
								</div>
								<div className='details'>
									{res.courseTeacher.map(details => (
										<>
											<div className='box'>
												<div className='d-img'>
													<img
														src={details.dimg}
														alt=''
													/>
												</div>
												<div className='name'>
													<h4>{details.name}</h4>
												</div>
											</div>
											<span>{details.totalTime}</span>
										</>
									))}
								</div>
							</div>
						</div>
						<div className='price'>
							<h3>
								{res.priceAll} / {res.pricePer}
							</h3>
							<button className='outline-btn'>
								ENROLL NOW !
							</button>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default CourseCard
