import { motion } from 'framer-motion';
import Card from './components/Card';
import { about, interests } from './constant';
import SideBar from './components/SideBar';
import { useEffect, useState } from 'react';
import KeywordHighlighter from './utils/KeywordHighlighter';

export default function App() {
	const [activeSection, setActiveSection] = useState<string | null>(null);

	useEffect(() => {
		const sections = document.querySelectorAll('section');
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.getAttribute('id'));
					}
				});
			},
			{ threshold: 0.5 } // Khi section xuất hiện 50% trên màn hình thì kích hoạt
		);

		sections.forEach((section) => observer.observe(section));

		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	}, []);
	return (
		<div className="relative bg-gray-900 text-white min-h-screen flex flex-col md:flex-row overflow-hidden">
			{/* Sidebar - Name, Position, and Titles */}
			<SideBar activeSection={activeSection} />

			{/* Main Content */}
			<main className="w-full md:w-2/3 md:ml-auto p-6 md:p-10 md:mt-20">
				{/* About Section */}

				<motion.section
					id="about"
					className="max-w-4xl md:mb-40 block"
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<p className="text-gray-300 mt-4 leading-[2]">
						{<KeywordHighlighter content={about} />}
					</p>
				</motion.section>

				{/* Projects Section */}
				<motion.section
					id="projects"
					className="mt-10 max-w-4xl"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h2 className="text-xl font-bold uppercase tracking-widest text-slate-200 mb-6">
						Projects
					</h2>
					<Card
						content="This is a freelance project, a blog website introducing interior products and providing interior design consultation. The website is built with Next.JS."
						leftContent="/noithatzone.png"
						type="project"
						title="Noithatzone"
						link="https://noithatzone.vn"
						subContent={['Next.JS', 'TailwindCSS']}
					/>
					<Card
						content="This is my first freelance project, a website for selling hair wax, allowing users to view products and add them to the cart. The admin page allows the admin to manage products and check orders. The application is built with Next.JS and NestJS."
						leftContent="10/2024 - Present"
						type="experience"
						title="Powerkeentrend"
						subContent={['Next.JS', 'Nest.JS']}
					/>
					<Card
						content="This is my graduation project, a social networking website that allows users to log in, create posts, interact with other users' posts, and perform other basic operations. The application is built with React.JS and Express.JS."
						leftContent="05/2024 – 09/2024"
						type="experience"
						title="DevBook"
						subContent={['React.JS', 'Express.JS']}
					/>
					<Card
						content="I am a book lover, and I enjoy writing reviews about the books I have read. Therefore, I built a web application that allows users to log in, search for books, and write reviews about them. The application is built with React.JS and Express.JS."
						leftContent="10/2024 – 12/2024"
						type="experience"
						link="https://bookstore-frontend-wheat.vercel.app"
						title="Book Review"
						subContent={['React.JS', 'Express.JS']}
					/>
				</motion.section>

				{/* Experience Section */}
				<motion.section
					id="experience"
					className="mt-10 max-w-4xl"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h2 className="text-xl font-bold uppercase tracking-widest text-slate-200 mb-6">
						Experience
					</h2>
					<Card
						content="During my two-month internship at CNPT Company as a Front-end Developer, I participated in developing a Chat App project assigned by the company. I was responsible for building the user interface, optimizing the user experience, and ensuring good performance for the application. Using Next.js and TypeScript, I developed key features such as real-time messaging, user list display, and API integration with the backend.
            Additionally, I worked with Socket.IO to handle real-time messaging, ensuring smooth application performance. I had the opportunity to collaborate with the backend team to optimize APIs and gained experience in state management using React Context and Redux."
						leftContent="05/2024 — 07/2024"
						type="experience"
						title="Internship Frontend · CNPT"
						subContent={['Da Nang']}
					/>
				</motion.section>
				{/*  */}
				<motion.section
					id="interests"
					className="mt-10 max-w-4xl"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h2 className="text-xl font-bold uppercase tracking-widest text-slate-200 mb-6">
						Interests
					</h2>
					<ul className="flex flex-wrap gap-2">
						{interests.map((item, index) => (
							<li
								key={index}
								className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 "
							>
								{item}
							</li>
						))}
					</ul>
				</motion.section>
			</main>
		</div>
	);
}
