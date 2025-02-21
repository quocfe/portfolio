import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Card from './components/Card';

const title = 'Nguyen Phu Quoc';
const position = 'Software Engineer | Node.JS | React.JS';
const tags = ['About', 'Projects', 'Experience'];

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
			<aside className="w-full md:w-1/3 p-10 flex flex-col justify-around items-start md:fixed md:h-full">
				<motion.div>
					<motion.h1
						className="text-4xl font-bold"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						{title}
					</motion.h1>
					<motion.p
						className="text-lg text-gray-400 mt-4 mb-10"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.5 }}
					>
						{position}
					</motion.p>

					<motion.div
						className="ml-10 flex flex-col gap-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.5 }}
					>
						{tags.map((tag, index) => (
							<a
								key={index}
								href={`#${tag.toLowerCase()}`}
								className={`text-sm duration-300 font-semibold hidden md:block cursor-pointer ${
									activeSection === tag.toLowerCase()
										? 'text-white-500'
										: 'text-slate-500'
								}`}
							>
								{tag}
							</a>
						))}
					</motion.div>
				</motion.div>
				<motion.div
					className="ml-10 flex flex-row gap-4"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
				>
					<p>github</p>
					<p>linked</p>
					<p>instagram</p>
				</motion.div>
			</aside>

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
						I’m a developer passionate about crafting accessible, pixel-perfect
						user interfaces that blend thoughtful design with robust
						engineering. My favorite work lies at the intersection of design and
						development, creating experiences that not only look great but are
						meticulously built for performance and usability. Currently, I'm a
						Senior Front-End Engineer at Klaviyo, specializing in accessibility.
						I contribute to the creation and maintenance of UI components that
						power Klaviyo’s frontend, ensuring our platform meets web
						accessibility standards and best practices to deliver an inclusive
						user experience. In the past, I've had the opportunity to develop
						software across a variety of settings — from advertising agencies
						and large corporations to start-ups and small digital product
						studios. Additionally, I also released a comprehensive video course
						a few years ago, guiding learners through building a web app with
						the Spotify API. In my spare time, I’m usually climbing, reading,
						hanging out with my wife and two cats, or running around Hyrule
						searching for Korok seeds K o r o k s e e d s .
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
						content="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
						leftContent="/noithatzone.png"
						type="project"
						title="Noithatzone"
						link="https://noithatzone.vn"
						subContent={['Next.JS']}
					/>
					<Card
						content="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
						leftContent="10/2024 - Present"
						type="experience"
						title="Powerkeentrend"
						subContent={['Next.JS', 'Nest.JS']}
					/>
					<Card
						content="This is graduation project. The project is a social network for developers. It allows developers to create a profile/portfolio, share posts, and get help from other developers. The project is built with the MERN stack and Redux for state management."
						leftContent="05/2024 – 09/2024"
						type="experience"
						title="DevBook"
						subContent={['React.JS', 'Express.JS']}
					/>
				</motion.section>

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

				{/* Experience Section */}
			</main>
		</div>
	);
}
