import React from 'react'
import Back from '../back/Back'
import './contact.scss'

import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'

const dataBox = [
	{
		id: 1,
		adress: 'Adress',
		info: '112 west 2nd street'
	},
	{
		id: 2,
		adress: 'Email',
		info: 'test@gamil.com'
	},
	{
		id: 3,
		adress: 'Phone',
		info: '+998 90 123 45 67'
	}
]

const Contact = () => {
	const dataMap =
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386723.466533543!2d72.04817709314668!3d40.7779222520751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc939c2cc9f571%3A0xf677ebc7b76654c8!2z0JDQvdC00LjQttCw0L3RgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1670397242715!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
	const summary = 'Create a message here...'
	return (
		<>
			<Back title={'Contact Us'} />
			<section className='contact-padding'>
				<div className='left-row'>
					<iframe className='left-map' src={dataMap}></iframe>
					<div className='right-row'>
						<div className='about'>
							<h1>Contact us</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit ?
							</p>
						</div>
						<div className='items-grid'>
							{dataBox.map((res, id) => (
								<div key={id} className='box'>
									<h4>{res.adress}:</h4>
									<p>{res.info}</p>
								</div>
							))}
						</div>
						<div className='inputs'>
							<div className='flexInp'>
								<input type='text' placeholder='Name' />
								<input type='email' placeholder='Email' />
							</div>
							<input type='email' placeholder='Subject' />
							<textarea
								cols='30'
								rows='10'
								defaultValue={summary}
							/>
							<button>SEND MESSAGE</button>
						</div>
						<h3>Follow us here</h3>
						<div className='social-icons'>
							<FacebookIcon className='icon' />
							<TwitterIcon className='icon' />
							<InstagramIcon className='icon' />
							<YouTubeIcon className='icon' />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Contact
