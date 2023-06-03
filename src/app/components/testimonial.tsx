import Image from "next/image";

interface CardProps {
	first_name: string;
	last_name: string;
	src: string;
}

const IndividualCard = ({ first_name, last_name, src }: CardProps) => {
	return (
		<>
			<div className="bg-[#101017] flex flex-col justify-center items-center py-10 px-12 pb-16 mx-10 mb-8 md:mx-0">
				<Image src="/comment.svg" width={90} height={90} alt="comment icon" />
				<p className="font-normal text-sm my-8 text-justify">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non deserunt
					fuga sapiente molestiae quos, aspernatur iste dolores animi odit
					nesciunt ducimus beatae, sint assumenda.
				</p>
				<div className="flex justify-center items-center gap-2">
					<Image src="/star.svg" width={20} height={20} alt="comment icon" />
					<Image src="/star.svg" width={20} height={20} alt="comment icon" />
					<Image src="/star.svg" width={20} height={20} alt="comment icon" />
					<Image src="/star.svg" width={20} height={20} alt="comment icon" />
					<Image src="/star.svg" width={20} height={20} alt="comment icon" />
				</div>
			</div>
			<div className="absolute -bottom-10 flex flex-col justify-center items-center">
				<Image src={src} width={60} height={60} alt="person picture" />
				<p className="font-bold text-sm text-center">
					{first_name} <br />
					{last_name}
				</p>
			</div>
		</>
	);
};

const CardsTestimonial = ({ className }: any) => {
	return (
		<>
			<div className={className}>
				<IndividualCard
					first_name="Dikshant"
					last_name="Designation"
					src="/person_one.svg"
				/>
			</div>
			<div className={className}>
				<IndividualCard
					first_name="Daniel"
					last_name="Rey"
					src="/person_two.svg"
				/>
			</div>
			<div className={className}>
				<IndividualCard
					first_name="Chona"
					last_name="Mae"
					src="/person_three.svg"
				/>
			</div>
		</>
	);
};

export default CardsTestimonial;
