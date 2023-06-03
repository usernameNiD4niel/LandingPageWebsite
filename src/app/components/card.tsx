import Image from "next/image";
import "../styles/utils.css";

interface CardProps {
	icon: string;
	title: string;
	description: string;
	className: string;
	hiddenMessage?: string;
}

const Card = ({
	icon,
	title,
	description,
	className,
	hiddenMessage,
}: CardProps) => {
	return (
		<div className={className}>
			<Image
				src={icon}
				alt="airplane paper icon"
				width={40}
				className="card_image"
				height={40}
			/>
			<h2 className="text-xl font-bold mt-3">{title}</h2>
			<div className="w-16 h-1 mt-2 bg-[#098A5B] card_line"></div>
			<p className="text-sm mt-5">
				{description}
				<span className="hidden more_text">
					{hiddenMessage && hiddenMessage}
				</span>
			</p>
		</div>
	);
};

export default Card;
