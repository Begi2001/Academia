import React from 'react'
import { useLocation } from 'react-router-dom'
import BackBgImg from './bg.png'
import './back.scss'
const Back = ({ title }) => {
	const location = useLocation()
	return (
		<div>
			<section
				className='back'
				style={{ backgroundImage: `url(${BackBgImg})` }}
			>
				<h2>Home / {location.pathname.split('/')[1]}</h2>
				<h1>{title}</h1>
			</section>
			<div className='marigin' />
		</div>
	)
}

export default Back
