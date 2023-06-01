import Image from "next/image";
import Card from "./components/card";
import LineComponent from "./components/line";
import CarouselImage from "./components/carousel";
import About, { SubAboutDescription } from "./components/about";
import CardsTestimonial from "./components/testimonial";

export default function Home() {
	const className: string =
		"w-72 h-72 bg-[#31313147] px-5 flex flex-col justify-center cursor-pointer ease-in duration-300 mt-12 hover:bg-[#313131]";

	const servicesClass: string =
		"bg-[#313131] w-72 h-72 px-5 flex flex-col justify-center cursor-pointer ease-out hover:ease-in duration-300 mt-12 hover:bg-[#098A5B] card_service";

	return (
		<>
			<section className="relative flex  h-full" id="home">
				<Image
					src="/hero_bg.png"
					alt="hero background image"
					width={1400}
					height={900}
					className="w-full absolute -z-50"
				/>
				<div className="w-5/6 px-14 mt-[50px]">
					<div>
						<p className="text-[#098A5B] text-base">
							CREATIVE MIND, CREATIVE WORKS.
						</p>
						<h1 className="text-6xl font-bold mt-3">
							We Are Digital <br /> Agency
						</h1>
						<button
							type="button"
							className="text-center border border-[#098A5B] text-[#098A5B] mt-10 p-3 hover:bg-[#098A5B] hover:text-white">
							GETTING STARTED
						</button>
					</div>
					<div className="flex space-x-24">
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
			<section id="services" className="w-[1050px] mt-[100px] py-10">
				<div className="flex items-center space-x-3">
					<LineComponent className={"w-14 h-1 bg-[#098A5B]"} />
					<h2 className="font-bold text-3xl">Services</h2>
				</div>
				<p className="text-[#098A5B] text-sm my-2">OUR SERVICES FOR CLIENTS</p>
				<div className="grid grid-cols-[1fr_1fr_1fr] mr-10">
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
				<div className="w-[1050px] mt-[50px] flex justify-between items-center">
					<div>
						<div className="flex items-center space-x-3">
							<LineComponent className={"w-14 h-1 bg-[#098A5B]"} />
							<h2 className="font-bold text-3xl">Works</h2>
						</div>
						<p className="text-[#098A5B] text-[1rem] mt-2">
							THINGS WE&apos;VE MADE
						</p>
					</div>
					<button
						type="button"
						className="px-4 py-3 border border-[#098A5B] text-[#098A5B] text-sm">
						VIEW ALL
					</button>
				</div>
				<div className="overflow-hidden flex justify-center items-center flex-col">
					<CarouselImage />
					<LineComponent className="w-1 h-[3rem] mt-10 bg-[#098A5B]" />
				</div>
			</section>
			{/* About */}
			<section className="w-[1050px] mt-[100px] py-10">
				<div>
					<div className="flex items-center space-x-3">
						<LineComponent className={"w-14 h-1 bg-[#098A5B]"} />
						<h2 className="font-bold text-3xl">About</h2>
					</div>
					<p className="text-[#098A5B] text-[1rem] mt-2">
						WE ARE MORE THAN DIGITAL AGENCY
					</p>
				</div>
				<div className="flex gap-5 mt-8 relative">
					<About />
				</div>
				<SubAboutDescription />
				<div className="flex flex-col justify-center items-center w-full">
					<LineComponent className="w-1 h-32 bg-[#098A5B] my-10" />
				</div>
			</section>
			{/* Testimonials */}
			<section className="w-full flex justify-center flex-col items-center py-10 bg-[#313131]">
				<div className="w-[1050px] mt-[50px] flex justify-between items-center">
					<div>
						<div className="flex items-center space-x-3">
							<LineComponent className={"w-14 h-1 bg-[#098A5B]"} />
							<h2 className="font-bold text-3xl">Testimonials</h2>
						</div>
						<p className="text-[#098A5B] text-[1rem] mt-2">
							WE ARE MORE THAN DIGITAL AGENCY
						</p>
					</div>
				</div>
				<div className="flex w-[1050px] mt-[50px] justify-center items-center">
					<CardsTestimonial className="flex flex-col justify-center items-center relative mb-10" />
				</div>
			</section>
		</>
	);
}
