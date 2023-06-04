"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
	const [isActive, setIsActive] = useState(false);

	const activeClass: string =
		"text-[#098A5B] border-b-2 border-[#098A5B] pb-2 font-bold text-1xl";
	const normalButton: string = "hover:text-[#098A5B] text-1xl text-slate-100";

	const handleEvent = (e: any) => {
		setIsActive(false);
	};

	return (
		<>
			<Link href="/" className="px-2 flex gap-1 items-center">
				<Image src="/logo.svg" height={35} width={35} alt="logo" />
				<p className="font-bold text-2xl text-slate-100">DVR</p>
			</Link>
			<div className="flex flex-1 justify-end">
				<ul
					className={`flex justify-center h-screen z-30 bg-black gap-8 flex-col absolute w-full top-0 left-0 right-0 items-center ${
						!isActive && "hidden"
					} lg:w-fit lg:h-fit lg:justify-end lg:relative lg:flex lg:flex-row`}>
					<li className="absolute top-1 right-1 m-3">
						<Image
							src="/close.svg"
							width={25}
							height={25}
							alt="close image"
							onClick={() => setIsActive(false)}
							className="lg:hidden"
						/>
					</li>
					<li>
						<Link
							href="#home"
							className={activeClass}
							onClick={(event) => handleEvent(event)}>
							Home
						</Link>
					</li>
					<li>
						<Link
							href="#services"
							className={normalButton}
							onClick={(event) => handleEvent(event)}>
							Services
						</Link>
					</li>
					<li>
						<Link
							href="/"
							className={normalButton}
							onClick={(event) => handleEvent(event)}>
							Work
						</Link>
					</li>
					<li>
						<Link
							href="/"
							className={normalButton}
							onClick={(event) => handleEvent(event)}>
							About Us
						</Link>
					</li>
					<li>
						<Link
							href="/"
							className={normalButton}
							onClick={(event) => handleEvent(event)}>
							Blog
						</Link>
					</li>
					<li>
						<Link
							href="/"
							className="hover:bg-[#246d53] bg-[#098A5B] px-5 py-4 rounded-md text-1xl md:mx-5 text-slate-100"
							onClick={() => setIsActive(false)}>
							Contact
						</Link>
					</li>
				</ul>
				<Image
					src="/search.svg"
					width={25}
					height={25}
					alt="search icon"
					className="mr-5 cursor-pointer md:mr-3"
				/>
				<Image
					src="/menu.svg"
					width={35}
					height={35}
					alt="menu burger icon"
					className="lg:hidden"
					onClick={() => setIsActive((prev) => !prev)}
				/>
			</div>
		</>
	);
}
