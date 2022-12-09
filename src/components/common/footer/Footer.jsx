import React from 'react'
import './footer.scss'
import SendIcon from '@mui/icons-material/Send'
const Footer = () => {
	return (
		<footer className='wrapper-footer'>
			<section className='new-letter'>
				<div className='container-flex'>
					<div className='left'>
						<h1>
							Newsletter - Stay tune and get the latest update
						</h1>
						<span>Far far away, behind the word mountains</span>
					</div>
					<div className='right'>
						<input type='text' placeholder='Enter email addres' />
						<SendIcon className='send-icon' />
					</div>
				</div>
			</section>

			<section className='copyright'>
				<p>
					Copyright ©2022 All rights reserved | This template is made
					with by Bexzodbek
				</p>
			</section>
		</footer>
	)
}

export default Footer
