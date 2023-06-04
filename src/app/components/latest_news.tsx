import Image from "next/image";

interface CardProps {
	src: string;
	title: string;
	description: string;
	alt: string;
}

const LatestNewsCard = ({
	src,
	title,
	description,
	alt,
}: CardProps): JSX.Element => {
	return (
		<div className="group border border-[#098A5B] overflow-hidden cursor-pointer">
			<Image
				src={src}
				width={450}
				height={400}
				alt={alt}
				className="transition delay-75 group-hover:scale-105"
			/>
			<div className="p-5 max-w-[400px]">
				<p className="font-bold text-slate-100">{title}</p>
				<p className="font-thin py-5 text-slate-100">{description}</p>
				<button
					type="button"
					className="border transition text-slate-100 delay-100 border-[#098A5B] p-3 hover:bg-[#098A5B] hover:text-slate-100">
					Read More
				</button>
			</div>
		</div>
	);
};

const LatestNews = (): JSX.Element => {
	return (
		<>
			<div className="w-full flex flex-col justify-center items-center py-10">
				<h3 className="font-bold text-3xl text-center text-slate-100">
					Latest News
				</h3>
				<p className="text-center text-sm text-[#098A5B]">
					CHECK OUT SOME OF OUR NEWS
				</p>
			</div>
			<div className="w-full flex flex-col justify-between gap-3 sm:gap-y-10 md:flex-row">
				<LatestNewsCard
					src="/vr.svg"
					title="Could this VR sketching tool be coming of age for the designers in future ?"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
					alt="vr image svg"
				/>
				<LatestNewsCard
					src="/manipulative.svg"
					title="8 cities that show you what the future will look like"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
					alt="vr image svg"
				/>
				<LatestNewsCard
					src="/gift.svg"
					title="15 gift ideas for your mom and dad. Wherever they are this year"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
					alt="vr image svg"
				/>
			</div>
		</>
	);
};

export default LatestNews;
