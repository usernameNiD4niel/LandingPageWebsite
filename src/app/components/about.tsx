import Image from "next/image";
import LineComponent from "./line";

export const SubAboutDescription = () => {
	return (
		<div className="flex justify-center flex-col mx-5 gap-10 items-center my-5 sm:mx-20 md:flex-row md:mx-5 md:w-[71%]">
			<div>
				<h3 className="font-bold text-1xl lg:text-2xl text-slate-100">
					Who we are
				</h3>
				<p className="text-sm font-light mt-2 text-slate-100">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore.
				</p>
			</div>
			<LineComponent className="w-2 h-32 bg-[#098A5B] mr-14 hidden lg:block" />
			<div>
				<h3 className="font-bold text-1xl lg:text-2xl text-slate-100">
					Our Philosophy
				</h3>
				<p className="text-sm font-light mt-2 text-slate-100">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore.
				</p>
			</div>
			<LineComponent className="w-2 h-32 bg-[#098A5B] mr-14 hidden lg:block" />
			<div>
				<h3 className="font-bold text-1xl lg:text-2xl text-slate-100">
					How we work
				</h3>
				<p className="text-sm font-light mt-2 text-slate-100">
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
			<div className="relative overflow-hidden">
				<Image
					src="Teamwork.svg"
					width={500}
					height={500}
					alt="Two women using laptop"
				/>
				<div className="absolute bottom-0 p-2 bg-gradient-to-r from-[#098A5B] ">
					<h3 className="text-2xl backdrop-blur-sm text-slate-100">Teamwork</h3>
					<p className="sub-text-about w-[360px] text-slate-100">
						Committed and creative
					</p>
				</div>
			</div>
			<div className="flex flex-col gap-5 relative overflow-hidden">
				<div className="relative">
					<Image
						src="Philosophy.svg"
						width={500}
						height={500}
						alt="Two person talking to each other"
					/>
					<div className="absolute bottom-0 p-2 bg-gradient-to-r from-[#098A5B]">
						<h3 className="text-2xl backdrop-blur-sm text-slate-100">
							Philosophy
						</h3>
						<p className="sub-text-about w-[360px] text-slate-100">
							Trust Pays Off
						</p>
					</div>
				</div>
				<Image
					src="Office.svg"
					width={500}
					height={500}
					alt="Note book with laptop and coffee"
				/>
				<div className="absolute bottom-0 p-2 bg-gradient-to-r from-[#098A5B]">
					<h3 className="text-2xl backdrop-blur-sm text-slate-100">Office</h3>
					<p className="sub-text-about w-[360px] text-slate-100">
						Somewhere on earth
					</p>
				</div>
			</div>
			{/* <SubAboutDescription /> */}
		</>
	);
};

export default About;
