import React, { useState } from 'react'
import Title from '../common/Title/Title'
import './faq.scss'

import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'

import { faq } from '../../Data/dummyData'
const Faq = () => {
	const [open, setClick] = useState(false)
	const toggle = index => {
		if (open === index) {
			return setClick(null)
		}
		setClick(index)
	}
	return (
		<div className='wrapper-faq'>
			<Title subtitle={'FAQS'} title={'Frequesntly Ask Questions'} />
			<section className='faq'>
				<div className='container'>
					{faq.map((res, index) => (
						<>
							<div
								className='accordion'
								onClick={() => toggle(index)}
								key={index}
							>
								<h2>{res.title}</h2>
								<span className='icon'>
									{open === index ? (
										<KeyboardArrowDownOutlinedIcon />
									) : (
										<ChevronRightOutlinedIcon />
									)}
								</span>
								{open === index ? (
									<div className='text'>
										<p>{res.desc}</p>
									</div>
								) : null}
							</div>
						</>
					))}
				</div>
			</section>
		</div>
	)
}

export default Faq
