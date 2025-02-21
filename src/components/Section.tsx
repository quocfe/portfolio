import { motion } from 'framer-motion';

type SectionProps = {
	id: string;
	heading?: string;
	children: React.ReactNode;
};

function Section({ id, heading, children }: SectionProps) {
	return (
		<motion.section
			id={id}
			className="mt-10 max-w-4xl"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			viewport={{ once: true }}
		>
			{heading && (
				<h2 className="text-xl font-bold uppercase tracking-widest text-slate-200 mb-6">
					{heading}
				</h2>
			)}
			{children}
		</motion.section>
	);
}

export default Section;
