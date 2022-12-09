import React from 'react'
import Back from '../back/Back'
import './team.scss'
import TeamCard from './TeamCard'
const Team = () => {
	return (
		<>
			<Back title={'Team'} />
			<section className='team-padding'>
				<div className='container'>
					<TeamCard />
				</div>
			</section>
		</>
	)
}

export default Team
