import Image from "next/image";

interface CardProps {
	icon: string;
	title: string;
	description: string;
}

const Card = ({ icon, title, description }: CardProps) => {
	return (
		<div className="w-64 h-64 bg-[#31313147] px-5 flex flex-col justify-center align-middle cursor-pointer ease-in duration-300 rounded-lg mt-12 hover:bg-[#313131]">
			<Image src={icon} alt="airplane paper icon" width={50} height={50} />
			<h2 className="text-xl font-bold mt-3">{title}</h2>
			<div className="w-16 h-1 mt-2 bg-[#098A5B]"></div>
			<p className="text-sm mt-5">{description}</p>
		</div>
	);
};

export default Card;
