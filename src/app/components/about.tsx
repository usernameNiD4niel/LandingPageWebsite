import Image from "next/image";
import LineComponent from "./line";

export const SubAboutDescription = () => {
	return (
		<div className="flex justify-center items-center my-10">
			<div>
				<h3 className="font-bold text-1xl">Who we are</h3>
				<p className="text-sm font-light mt-2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore.
				</p>
			</div>
			<LineComponent className="w-2 h-32 bg-[#098A5B] mr-14" />
			<div>
				<h3 className="font-bold text-1xl">Our Philosophy</h3>
				<p className="text-sm font-light mt-2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore.
				</p>
			</div>
			<LineComponent className="w-2 h-32 bg-[#098A5B] mr-14" />
			<div>
				<h3 className="font-bold text-1xl">How we work</h3>
				<p className="text-sm font-light mt-2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore.
				</p>
			</div>
		</div>
	);
};

const About = () => {
	return (
		<>
			<Image
				src="Teamwork.svg"
				width={450}
				height={250}
				alt="Two women using laptop"
				className="row-span-3 about-image"
			/>

			<div className="absolute bottom-0 p-2 bg-gradient-to-r from-[#098A5B] ">
				<h3 className="text-2xl backdrop-blur-sm">Teamwork</h3>
				<p className="sub-text-about w-[360px]">Committed and creative</p>
			</div>
			<div className="flex flex-col gap-5 relative">
				<div className="relative">
					<Image
						src="Philosophy.svg"
						width={500}
						height={500}
						className="row-span-1 about-image"
						alt="Two person talking to each other"
					/>
					<div className="absolute bottom-0 p-2 bg-gradient-to-r from-[#098A5B] ">
						<h3 className="text-2xl backdrop-blur-sm">Philosophy</h3>
						<p className="sub-text-about w-[360px]">Trust Pays Off</p>
					</div>
				</div>
				<Image
					src="Office.svg"
					width={500}
					height={500}
					className="row-span-2 about-image"
					alt="Note book with laptop and coffee"
				/>
				<div className="absolute bottom-0 p-2 bg-gradient-to-r from-[#098A5B] ">
					<h3 className="text-2xl backdrop-blur-sm">Office</h3>
					<p className="sub-text-about w-[360px]">Somewhere on earth</p>
				</div>
			</div>
			{/* <SubAboutDescription /> */}
		</>
	);
};

export default About;
