import React from 'react'
import './blog.scss'
import Back from '../back/Back'
import BlogCard from './BlogCard'

const Blog = () => {
	return (
		<>
			<Back title={'Blog Posts'} />
			<section className='blog-padding'>
				<div className='container'>
					<BlogCard />
				</div>
			</section>
		</>
	)
}

export default Blog
