import Image from "next/image";

interface CarouselProps {
	src: string[];
	className: string;
	alt: string;
}

const images: string[] = [
	"/Pic1.svg",
	"/Pic2.svg",
	"/Pic3.svg",
	"/Pic4.svg",
	"/Pic5.svg",
	"/Pic6.svg",
	"/Pic7.svg",
];

const carouselProps: CarouselProps = {
	src: images,
	className:
		"hover:scale-150 transition-transform delay-100 duration-300 cursor-pointer hover:rotate-[360deg]  md:w-64",
	alt: "watch svg",
};

const CarouselImage = () => {
	return (
		<div className="mt-14 grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-7 md:gap-0 xl:flex xl:flex-row md:w-full">
			{carouselProps.src.map((image) => (
				<Image
					src={image}
					alt={carouselProps.alt}
					width={200}
					className={carouselProps.className}
					height={200}
					key={image}
				/>
			))}
		</div>
	);
};

export default CarouselImage;
