import Image from "next/image";
import Card from "./components/card";
import LineComponent from "./components/line";
import CarouselImage from "./components/carousel";
import About, { SubAboutDescription } from "./components/about";
import CardsTestimonial from "./components/testimonial";
import LatestNews from "./components/latest_news";
import ProjectInMind from "./components/project_in_mind";

export default function Home() {
	const className: string =
		"w-72 h-72 py-10 bg-[#31313147] px-5 flex flex-col justify-center cursor-pointer ease-in duration-300 mt-12 hover:bg-[#313131] sm:w-[350px] xl:max-w-[400px]";

	const servicesClass: string =
		"bg-[#313131] w-72 h-72 py-10 px-5 flex flex-col justify-center transition cursor-pointer ease-out delay-300 hover:ease-in duration-300 mt-12 sm:mt-0 hover:bg-[#098A5B] card_service";

	return (
		<>
			<section
				className="relative flex sm:w-full items-center h-full"
				id="home">
				<Image
					src="/hero_bg.png"
					alt="hero background image"
					width={1200}
					height={900}
					className="w-screen absolute z-1 top-10 bg-white"
				/>
				<div className="w-full px-14 mt-[50px] sm:mt-[100px] z-10 md:px-28">
					<div className="flex flex-col justify-center items-center sm:items-start">
						<p className="text-[#098A5B] text-sm text-center lg:font-bold">
							CREATIVE MIND, CREATIVE WORKS.
						</p>
						<h1 className="text-4xl font-bold mt-3 text-center sm:text-start sm:text-5xl xl:text-6xl">
							We Are Digital <br /> Agency
						</h1>
						<button
							type="button"
							className="text-center border border-[#098A5B] text-[#098A5B] mt-20 p-3 hover:bg-[#098A5B] hover:text-white">
							GETTING STARTED
						</button>
					</div>
					<div className="flex space-y-24 sm:space-y-10 flex-col justify-start items-center mt-10 sm:mt-16 sm:gap-4 sm:flex-row xl:grid-cols-3 xl:gap-5">
						<Card
							icon="/airplane.svg"
							title="Future Concept"
							className={className}
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
						/>
						<Card
							icon="/brain.svg"
							className={className}
							title="Big Ideas"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
						/>
						<Card
							icon="/bulb.svg"
							title="Creative Solutions"
							className={className}
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
						/>
					</div>
				</div>
			</section>
			{/* Services */}
			<section
				id="services"
				className="flex flex-col justify-center items-center mt-[100px] py-10 lg:items-start">
				<div className="flex items-center space-x-3">
					<LineComponent className={"w-14 h-1 bg-[#098A5B]"} />
					<h2 className="font-bold text-3xl">Services</h2>
				</div>
				<p className="text-[#098A5B] text-sm my-2">OUR SERVICES FOR CLIENTS</p>
				<div className="flex flex-col justify-center items-center sm:grid sm:grid-cols-2 sm:gap-2 sm:mt-10 lg:grid-cols-3 lg:gap-4">
					<Card
						icon="/digital_strategy.svg"
						title="Digital Strategy"
						className={servicesClass}
						hiddenMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
					/>
					<Card
						icon="/ex_design.svg"
						title="UX Designs"
						className={servicesClass}
						hiddenMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
					/>
					<Card
						icon="/ui_design.svg"
						title="UI Designs"
						hiddenMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
						className={servicesClass}
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
					/>
					<Card
						icon="/social_media.svg"
						title="Social Media"
						className={servicesClass}
						hiddenMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
					/>
					<Card
						icon="/design_concept.svg"
						title="Design Concept"
						className={servicesClass}
						hiddenMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
					/>
					<Card
						icon="/media_pairing.svg"
						title="Media Pairing"
						className={servicesClass}
						hiddenMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
					/>
				</div>
				<div className="flex justify-center items-center w-full my-10">
					<LineComponent className={"w-1 h-14 bg-[#098A5B] my-10"} />
				</div>
			</section>
			{/* Works */}
			<section className="w-full flex justify-center flex-col items-center py-10 bg-[#313131]">
				<div className="mt-[50px] px-5 w-full flex justify-between items-center lg:w-[83%]">
					<div>
						<div className="flex items-center space-x-3">
							<LineComponent className={"w-14 h-1 bg-[#098A5B]"} />
							<h2 className="font-bold text-3xl ">Works</h2>
						</div>
						<p className="text-[#098A5B] text-[1rem] mt-2">
							THINGS WE&apos;VE MADE
						</p>
					</div>
					<button
						type="button"
						className="px-4 py-3 border border-[#098A5B] text-[#098A5B] text-sm my-5">
						VIEW ALL
					</button>
				</div>
				<div className=" flex justify-center items-center flex-col px-2 md:w-full md:px-0">
					<CarouselImage />
				</div>
				<LineComponent className="w-1 h-[3rem] mt-10 bg-[#098A5B]" />
			</section>
			{/* About */}
			<section className="mt-[100px] py-10 flex flex-col items-center justify-center">
				<div className="flex flex-col items-center lg:items-start md:w-[71%]">
					<div className="flex items-center space-x-3">
						<LineComponent className={"w-14 h-1 bg-[#098A5B]"} />
						<h2 className="font-bold text-3xl">About</h2>
					</div>
					<p className="text-[#098A5B] text-sm mt-2">
						WE ARE MORE THAN DIGITAL AGENCY
					</p>
				</div>
				<div className="flex flex-col gap-5 m-5 relative lg:flex-row">
					<About />
				</div>
				<SubAboutDescription />
				<div className="flex flex-col justify-center items-center w-full">
					<LineComponent className="w-1 h-32 bg-[#098A5B] my-10" />
				</div>
			</section>
			{/* Testimonials */}
			<section className="w-full flex justify-center flex-col items-center py-10 bg-[#313131] md:items-center lg:items-start md:px-12 lg:px-48 sm:px-0">
				<div className="mt-[50px] flex justify-between items-center flex-col">
					<div className="flex items-center justify-center space-x-3">
						<LineComponent className={"w-14 h-1 bg-[#098A5B]"} />
						<h2 className="font-bold text-3xl">Testimonials</h2>
					</div>
					<p className="text-[#098A5B] text-sm mt-2">
						WE ARE MORE THAN DIGITAL AGENCY
					</p>
				</div>
				<div className="mt-[50px] flex flex-col max-w-[400px] justify-center items-center md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 md:max-w-full">
					<CardsTestimonial className="flex flex-col justify-center items-center relative mb-24" />
				</div>
			</section>
			{/* Latest News */}
			<section className="w-fit my-7 px-5 flex justify-center items-center flex-col sm:w-fit">
				<LatestNews />
				<LineComponent className={"w-1 h-14 bg-[#098A5B] my-10"} />
			</section>
			{/* Project in Mind */}
			<section className="w-full flex flex-col justify-center items-center my-10">
				<ProjectInMind />
			</section>
		</>
	);
}
