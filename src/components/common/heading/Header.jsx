import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { UilBars } from '@iconscout/react-unicons'
import { UilMultiply } from '@iconscout/react-unicons'

import Head from './Head'

export const dataLi = [
	{
		id: 1,
		link: '/',
		title: 'Home'
	},

	{
		id: 2,
		link: '/courses',
		title: 'All Courses'
	},
	{
		id: 3,
		link: '/about',
		title: 'About'
	},
	{
		id: 4,
		link: '/team',
		title: 'Team'
	},
	{
		id: 5,
		link: '/pricing',
		title: 'Pricing'
	},
	{
		id: 6,
		link: '/journal',
		title: 'Journal'
	},
	{
		id: 7,
		link: '/contact',
		title: 'Contact'
	}
]

const Header = () => {
	const [open, setOpen] = useState(false)

	function Click(event) {
		if (setOpen(event.target.className)) {
			setOpen(!open)
		}
	}
	return (
		<div className='main-wrapper'>
			<Head />
			<header>
				<nav className={`flexSB ${open ? 'active' : ''}`}>
					<div className='start'>
						<div className='button'>GET CERTIFICATE</div>
					</div>
					<ul className='wrapper-li'>
						{dataLi.map(item => (
							<NavLink
								activeclassname='active'
								className='link'
								to={item.link}
								key={item.id}
								onClick={Click}
							>
								<li>{item.title}</li>
							</NavLink>
						))}
					</ul>
					<button className='toggle' onClick={() => setOpen(!open)}>
						{open ? <UilMultiply /> : <UilBars />}
					</button>
				</nav>
			</header>
		</div>
	)
}

export default Header
