import React from 'react'
import './blogCard.scss'
import { blog } from '../../Data/dummyData'

import PersonIcon from '@mui/icons-material/Person'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'

const BlogCard = () => {
	return (
		<>
			{blog.map((res, id) => {
				return (
					<div key={id} className='items-shadow'>
						<div className='img'>
							<img src={res.img} alt='' />
						</div>
						<div className='text'>
							<div className='admin'>
								<span>
									<PersonIcon className='blog-icon' />
									<label htmlFor=''>{res.type}</label>
								</span>
								<span>
									<CalendarMonthIcon className='blog-icon' />
									<label htmlFor=''>{res.date}</label>
								</span>
								<span>
									<QuestionAnswerIcon className='blog-icon' />
									<label
										style={{ color: '#1eb2a6' }}
										htmlFor=''
									>
										{res.com}
									</label>
								</span>
							</div>
							<h1>{res.title}</h1>
							<p>{res.desc}</p>
						</div>
					</div>
				)
			})}
		</>
	)
}

export default BlogCard
