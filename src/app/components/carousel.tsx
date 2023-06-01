"use client";

import Image from "next/image";
import { useState } from "react";

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
		"hover:scale-150 transition-transform delay-100 duration-300 cursor-pointer hover:rotate-[360deg]",
	alt: "watch svg",
};

const CarouselImage = () => {
	return (
		<div className="flex mt-14">
			{carouselProps.src.map((image) => (
				<Image
					src={image}
					alt={carouselProps.alt}
					width={250}
					className={carouselProps.className}
					height={250}
					key={image}
				/>
			))}
		</div>
	);
};

export default CarouselImage;
