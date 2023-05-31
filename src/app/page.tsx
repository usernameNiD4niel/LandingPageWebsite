import Image from "next/image";
import Card from "./components/card";

export default function Home() {
	return (
		<section className="relative flex justify-center align-middle h-full">
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
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
					/>
					<Card
						icon="/brain.svg"
						title="Big Ideas"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
					/>
					<Card
						icon="/bulb.svg"
						title="Creative Solutions"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
					/>
				</div>
			</div>
		</section>
	);
}
