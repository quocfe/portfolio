import { motion } from 'framer-motion';
import { position, socials, tags, title } from '../constant';

function SideBar({ activeSection }: { activeSection: string | null }) {
	return (
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
				className="ml-10 flex flex-col  gap-4"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.5 }}
			>
				<div className="flex flex-row gap-4">
					{socials.map((social, index) => (
						<a key={index} href={`${social.link}`} target="_blank">
							<i className={`${social.icon} text-[40px]`}></i>
						</a>
					))}
				</div>
				<p className="text-slate-500 text-sm italic">
					contact with me: phuquocfe@gmail.com
				</p>
			</motion.div>
		</aside>
	);
}

export default SideBar;
