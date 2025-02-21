type Props = {
	leftContent: string;
	title: string;
	subTitle?: string;
	type: 'project' | 'experience';
	content: string;
	subContent?: string[];
	link?: string;
};

function Card(props: Props) {
	const { leftContent, title, type, content, subContent, link } = props;
	return (
		<div className="mb-12 flex flex-col md:flex-row gap-6 md:gap-10">
			<div className="w-[30%] overflow-hidden ">
				{type === 'project' ? (
					<div className="h-fit overflow-hidden rounded">
						<img
							src={leftContent}
							alt={title}
							className="w-full h-auto rounded shadow-lg object-center"
						/>
					</div>
				) : (
					<p className="font-semibold uppercase tracking-wide text-slate-500 text-sm">
						{leftContent}
					</p>
				)}
			</div>
			<div className="w-full md:w-[70%]">
				<a
					href={link}
					target="_blank"
					className="font-medium leading-tight text-slate-200
				hover:text-teal-300 focus-visible:text-teal-300 group/link text-base cursor-pointer mb-5"
				>
					{title}
				</a>
				<p className="mt-2 text-sm leading-normal text-slate-500">{content}</p>
				{subContent && (
					<ul className="mt-2 flex flex-wrap">
						{subContent.map((item, index) => (
							<li key={index} className="mr-1.5 mt-2">
								<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
									{item}
								</div>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}

export default Card;
