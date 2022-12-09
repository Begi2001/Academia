import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/common/heading/Header'
import Home from './components/Home/Home'
import About from './components/about/About'
import CourseHome from './components/allcourse/CourseHome'
import Team from './components/team/Team'
import Price from './components/pricing/Price'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Footer from './components/common/footer/Footer'

function App() {
	if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
		window.document.addEventListener(
			'touchmove',
			e => {
				if (e.scale !== 1) {
					e.preventDefault()
				}
			},
			{ passive: false }
		)
	}
	return (
		<>
			<Header />
			<Routes>
				<Route path={'/'} element={<Home />} />
				<Route path={'/about'} element={<About />} />
				<Route path={'/courses'} element={<CourseHome />} />
				<Route path={'/team'} element={<Team />} />
				<Route path={'/pricing'} element={<Price />} />
				<Route path={'/journal'} element={<Blog />} />
				<Route path={'/contact'} element={<Contact />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
