import Online from './DataImg/storytelling.png'
import Certificates from './DataImg/diploma.png'
import Expert from './DataImg/athlete.png'

import Gradution from './DataImg/graduation.png'
import Athlete from './DataImg/athlete2.png'
import Calendar from './DataImg/calendar.png'
import Idea from './DataImg/idea.png'
import C1 from './DataImg/courses/c1.png'
import C2 from './DataImg/courses/c2.png'
import C3 from './DataImg/courses/c3.png'
import C4 from './DataImg/courses/c4.png'
import C5 from './DataImg/courses/c5.png'
import C6 from './DataImg/courses/c6.png'
import C7 from './DataImg/courses/c7.png'
import C8 from './DataImg/courses/c8.png'
import C9 from './DataImg/courses/c9.png'
import StarIcon from '@mui/icons-material/Star'
import BackWeb from './DataImg/back.webp'

import Img1 from './DataImg/OnlineCourseImg/1.png'
import HoverImg1 from './DataImg/OnlineCourseImg/1.1.png'
import Img2 from './DataImg/OnlineCourseImg/2.png'
import HoverImg2 from './DataImg/OnlineCourseImg/2.1.png'
import Img3 from './DataImg/OnlineCourseImg/3.png'
import HoverImg3 from './DataImg/OnlineCourseImg/3.1.png'
import Img4 from './DataImg/OnlineCourseImg/4.png'
import HoverImg4 from './DataImg/OnlineCourseImg/4.1.png'
import Img5 from './DataImg/OnlineCourseImg/5.png'
import HoverImg5 from './DataImg/OnlineCourseImg/5.1.png'
import Img6 from './DataImg/OnlineCourseImg/6.png'
import HoverImg6 from './DataImg/OnlineCourseImg/6.1.png'
import Img7 from './DataImg/OnlineCourseImg/7.png'
import HoverImg7 from './DataImg/OnlineCourseImg/7.1.png'
import Img8 from './DataImg/OnlineCourseImg/8.png'
import HoverImg8 from './DataImg/OnlineCourseImg/8.1.png'
import Img9 from './DataImg/OnlineCourseImg/9.png'
import HoverImg9 from './DataImg/OnlineCourseImg/9.1.png'
import Img10 from './DataImg/OnlineCourseImg/10.png'
import HoverImg10 from './DataImg/OnlineCourseImg/10.1.png'
import Img11 from './DataImg/OnlineCourseImg/11.png'
import HoverImg11 from './DataImg/OnlineCourseImg/11.1.png'
import Img12 from './DataImg/OnlineCourseImg/12.png'
import HoverImg12 from './DataImg/OnlineCourseImg/12.1.png'

import T1 from './DataImg/TeamImg/t1.png'
import T2 from './DataImg/TeamImg/t2.png'
import T3 from './DataImg/TeamImg/t3.png'
import T4 from './DataImg/TeamImg/t4.png'
import T5 from './DataImg/TeamImg/t5.png'
import T6 from './DataImg/TeamImg/t6.png'
import T7 from './DataImg/TeamImg/t7.png'
import T8 from './DataImg/TeamImg/t8.png'

import Person1 from './DataImg/TestimonalImg/person1.png'
import Person2 from './DataImg/TestimonalImg/person2.png'
import Person3 from './DataImg/TestimonalImg/person3.png'

import B1 from './DataImg/BlogImg/b1.png'
import B2 from './DataImg/BlogImg/b2.png'
import B3 from './DataImg/BlogImg/b3.png'
import B4 from './DataImg/BlogImg/b4.png'
import B5 from './DataImg/BlogImg/b5.png'
import B6 from './DataImg/BlogImg/b6.png'

export const homeAbout = [
	{
		id: 1,
		img: Online,
		title: 'Online Courses',
		desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
	},
	{
		id: 2,
		img: Certificates,
		title: 'Earn A Certificates',
		desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
	},
	{
		id: 3,
		img: Expert,
		title: 'Learn with Expert',
		desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
	}
]

export const awrapper = [
	{
		id: 1,
		img: Gradution,
		data: '3,000',
		title: 'SUCCESS STORIES'
	},

	{
		id: 2,
		img: Athlete,
		data: '320',
		title: 'TRUSTED TUTORS'
	},
	{
		id: 3,
		img: Calendar,
		data: '1,000',
		title: 'SCHEDULES'
	},
	{
		id: 4,
		img: Idea,
		data: '587',
		title: 'COURSES'
	}
]

export const coursesCard = [
	{
		id: 1,
		img: C1,
		coursesName: 'Introducing to Software Engineering',
		icon: <StarIcon style={{ fontSize: '20px' }} />,
		courseTeacher: [
			{
				id: 1,
				dimg: BackWeb,
				name: 'by John Smith',
				totalTime: '50 lectures (190 hrs)'
			}
		],
		priceAll: '$100 All Course',
		pricePer: '$15 per month'
	},
	{
		id: 2,
		img: C2,
		coursesName: 'Enhancing Adobe Photoshop CC 2020 Skills',
		icon: <StarIcon style={{ fontSize: '20px' }} />,
		courseTeacher: [
			{
				id: 2,

				dimg: BackWeb,
				name: 'by Ram Gurung',
				totalTime: '30 lectures (125 hrs)'
			}
		],
		priceAll: '$200 All Course',
		pricePer: '$25 per month'
	},
	{
		id: 3,
		img: C3,
		coursesName: 'HTML, CSS, and Javascript for  Developers',
		icon: <StarIcon style={{ fontSize: '20px' }} />,
		courseTeacher: [
			{
				id: 3,
				dimg: BackWeb,
				name: 'by Saroj Nepal',
				totalTime: '50 lectures (50 hrs)'
			}
		],
		priceAll: '$50 All Course',
		pricePer: '$5 per month'
	},
	{
		id: 4,
		img: C4,
		coursesName: 'Introducing to Programming with W.P',
		icon: <StarIcon style={{ fontSize: '20px' }} />,
		courseTeacher: [
			{
				id: 4,
				dimg: BackWeb,
				name: 'by Prabin Mager',
				totalTime: '20 lectures (20 hrs)'
			}
		],
		priceAll: '$30 All Course',
		pricePer: '$3 per month'
	},
	{
		id: 5,
		img: C5,
		coursesName: 'Introducing to Programming with ReactJS',
		icon: <StarIcon style={{ fontSize: '20px' }} />,
		courseTeacher: [
			{
				id: 5,
				dimg: BackWeb,
				name: 'by Saroj Nepal',
				totalTime: '100 lectures (150 hrs)'
			}
		],
		priceAll: '$300 All Course',
		pricePer: '$30 per month'
	},
	{
		id: 6,
		img: C6,
		coursesName: 'Learn Frontend Programming Language',
		courseTeacher: [
			{
				id: 6,
				dimg: BackWeb,
				name: 'by John Smith',
				totalTime: '200 lectures (300 hrs)'
			}
		],
		priceAll: '$500 All Course',
		pricePer: '$80 per month'
	},
	{
		id: 7,
		img: C7,
		coursesName: 'Introducing to with HTML / CSS',
		courseTeacher: [
			{
				id: 7,
				dimg: BackWeb,
				name: 'by Price',
				totalTime: '20 lectures (50 hrs)'
			}
		],
		priceAll: '$20 All Course',
		pricePer: '$2 per month'
	},
	{
		id: 8,
		img: C8,
		coursesName: 'Introducing to with JAVA and Phyton',
		courseTeacher: [
			{
				id: 8,
				dimg: BackWeb,
				name: 'by Petter',
				totalTime: '80 lectures (200 hrs)'
			}
		],
		priceAll: '$200 All Course',
		pricePer: '$40 per month'
	},
	{
		id: 9,
		img: C9,
		coursesName: 'Introducing to with HTML / CSS / JS',
		courseTeacher: [
			{
				id: 9,
				dimg: BackWeb,
				name: 'by Petter',
				totalTime: '50 lectures (50 hrs)'
			}
		],
		priceAll: '$20 All Course',
		pricePer: '$3 per month'
	}
]

export const online = [
	{
		id: 1,
		img: Img1,
		hoverImg: HoverImg1,
		courseName: 'UI/UX Design Courses',
		course: '25 Courses'
	},
	{
		id: 2,
		img: Img2,
		hoverImg: HoverImg2,
		courseName: 'Art & Design',
		course: '25 Courses'
	},
	{
		id: 3,
		img: Img3,
		hoverImg: HoverImg3,
		courseName: 'Computer Science',
		course: '10 Courses'
	},
	{
		id: 4,
		img: Img4,
		hoverImg: HoverImg4,
		courseName: 'History & Archeologic',
		course: '15 Courses'
	},
	{
		id: 5,
		img: Img5,
		hoverImg: HoverImg5,
		courseName: 'Software Engineering',
		course: '30 Courses'
	},
	{
		id: 6,
		img: Img6,
		hoverImg: HoverImg6,
		courseName: 'Information Software',
		course: '60 Courses'
	},
	{
		id: 7,
		img: Img7,
		hoverImg: HoverImg7,
		courseName: 'Health & Fitness',
		course: '10 Courses'
	},
	{
		id: 8,
		img: Img8,
		hoverImg: HoverImg8,
		courseName: 'Marketing',
		course: '30 Courses'
	},
	{
		id: 9,
		img: Img9,
		hoverImg: HoverImg9,
		courseName: 'Graphic Design',
		course: '80 Courses'
	},
	{
		id: 10,
		img: Img10,
		hoverImg: HoverImg10,
		courseName: 'Music',
		course: '120 Courses'
	},
	{
		id: 11,
		img: Img11,
		hoverImg: HoverImg11,
		courseName: 'Business Administration',
		course: '17 Courses'
	},
	{
		id: 12,
		img: Img12,
		hoverImg: HoverImg12,
		courseName: 'Web Management',
		course: '17 Courses'
	}
]

export const team = [
	{
		img: T1,
		name: 'Ph.D Adrian Molises',
		work: 'DEVELOPER AND LEAD INSTRUCTOR'
	},
	{
		img: T2,
		name: 'Ph.D Arthur MaGregor',
		work: 'DEVELOPER AND LEAD INSTRUCTOR'
	},
	{
		img: T3,
		name: 'Ph.D Anna Hanzen',
		work: 'DEVELOPER AND LEAD INSTRUCTOR'
	},
	{
		img: T4,
		name: 'Ph.D Brian Wooden',
		work: 'DEVELOPER AND LEAD INSTRUCTOR'
	},
	{
		img: T5,
		name: 'Ph.D Adrian Molises',
		work: 'DEVELOPER AND LEAD INSTRUCTOR'
	},
	{
		img: T6,
		name: 'Ph.D Arthur MaGregor',
		work: 'DEVELOPER AND LEAD INSTRUCTOR'
	},
	{
		img: T7,
		name: 'Ph.D Anna Hanzen',
		work: 'DEVELOPER AND LEAD INSTRUCTOR'
	},
	{
		img: T8,
		name: 'Ph.D Brian Wooden',
		work: 'DEVELOPER AND LEAD INSTRUCTOR'
	}
]

export const testimonal = [
	{
		id: 1,
		name: 'ROGER SCOTT',
		post: 'MARKETING MANAGER',
		desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
		img: Person1
	},
	{
		id: 2,
		name: 'ROGER SCOTT',
		post: 'MARKETING MANAGER',
		desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
		img: Person2
	},
	{
		id: 3,
		name: 'ROGER SCOTT',
		post: 'MARKETING MANAGER',
		desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
		img: Person3
	}
]

export const price = [
	{
		name: 'BASIC PLAN',
		price: '49K',
		desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
	},
	{
		name: 'BEGINNER PLAN',
		price: '79K',
		desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
	},
	{
		name: 'PREMIUM PLAN',
		price: '109k',
		desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
	},
	{
		name: 'ULTIMATE PLAN',
		price: '149K',
		desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
	}
]

export const faq = [
	{
		id: 1,
		title: 'How to Enroll This Online Courses?',
		desc: "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
	},
	{
		id: 2,
		title: 'Where It is hidden by default, until the collapse?',
		desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
	},
	{
		id: 3,
		title: 'How It is hidden by default, until the collapse?',
		desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
	},
	{
		id: 4,
		title: 'How to Enroll This Online Courses?',
		desc: "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
	},
	{
		id: 5,
		title: 'Where It is hidden by default, until the collapse?',
		desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
	},
	{
		id: 6,
		title: 'How It is hidden by default, until the collapse?',
		desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
	}
]

export const blog = [
	{
		id: 1,
		type: 'admin',
		date: 'JAN. 18, 2021',
		com: '3 COMMENTS ',
		title: 'Build your Dream Software & Engineering Career',
		desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
		img: B1,
	},
	{
		id: 2,
		type: 'admin',
		date: 'API. 25, 2022',
		com: '5 COMMENTS ',
		title: 'Build your Dream Software & Engineering Career',
		desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
		img: B2,
	},
	{
		id: 3,
		type: 'user',
		date: 'MAY. 15, 2022',
		com: '10 COMMENTS ',
		title: 'Build your Dream Software & Engineering Career',
		desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
		img: B3,
	},
	{
		id: 4,
		type: 'admin',
		date: 'JAN. 02, 2022',
		com: '3 COMMENTS ',
		title: 'Build your Dream Software & Engineering Career',
		desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
		img: B4,
	},
	{
		id: 5,
		type: 'admin',
		date: 'DEC. 14, 2022',
		com: '3 COMMENTS ',
		title: 'Build your Dream Software & Engineering Career',
		desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
		img: B5,
	},
	{
		id: 6,
		type: 'user',
		date: 'JAN. 18, 2021',
		com: '12 COMMENTS ',
		title: 'Build your Dream Software & Engineering Career',
		desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
		img: B6,
	}
]
