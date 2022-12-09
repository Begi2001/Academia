import React from 'react'
import { team } from '../../Data/dummyData'
import './teamCard.scss'
import { UilFacebookF } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'
import { UilYoutube } from '@iconscout/react-unicons'

export const links = [
	{
		id: 1,
		icon: <UilFacebookF style={{ width: '25px' }} />
	},
	{
		id: 2,
		icon: <UilInstagram style={{ width: '20px' }} />
	},
	{
		id: 3,
		icon: <UilTwitter style={{ width: '20px' }} />
	},
	{
		id: 4,
		icon: <UilYoutube style={{ width: '20px' }} />
	}
]
const TeamCard = () => {
	return (
		<>
			{team.map((res, id) => (
				<div key={id} className='card'>
					<div className='img'>
						<img src={res.img} alt='' />
						<div className='overlay'>
							{links.map((res, id) => (
								<div key={id}>
									<div className='icons'>{res.icon}</div>
								</div>
							))}
						</div>
					</div>
					<div className='details'>
						<h2>{res.name}</h2>
						<p>{res.work}</p>
					</div>
				</div>
			))}
		</>
	)
}

export default TeamCard
