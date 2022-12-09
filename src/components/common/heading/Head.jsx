import React from 'react'

import './head_header.scss'

import { UilFacebookF } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'
import { UilYoutube } from '@iconscout/react-unicons'

export const links = [
	{
		id: 1,
		icon: <UilFacebookF />
	},
	{
		id: 2,
		icon: <UilInstagram />
	},
	{
		id: 3,
		icon: <UilTwitter />
	},
	{
		id: 4,
		icon: <UilYoutube />
	}
]
const Head = () => {
	return (
		<>
			<section className='head'>
				<div className='container'>
					<div className='logo'>
						<h1 className='title_academia'>ACADEMIA</h1>
						<span>ONLINE EDUCATION & LEARNING</span>
					</div>
					<div className='social'>
						{links.map((res, id) => (
							<div key={id}>
								<div className='icons'>{res.icon}</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Head
