import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	return (
		<>
			<Link href="/" className="flex gap-2 justify-center items-center">
				<Image src="/logo.svg" height={35} width={35} alt="logo" />
				<p className="font-bold text-[#098A5B] text-2xl">DVR</p>
			</Link>
			<nav className="flex flex-1 justify-end">
				<ul className="flex justify-between space-x-8 mr-3">
					<li>
						<Link
							href="#home"
							className="text-[#098A5B] border-b-2 border-[#098A5B] pb-2">
							Home
						</Link>
					</li>
					<li>
						<Link href="#services" className="hover:text-[#098A5B]">
							Services
						</Link>
					</li>
					<li>
						<Link href="/" className="hover:text-[#098A5B]">
							Work
						</Link>
					</li>
					<li>
						<Link href="/" className="hover:text-[#098A5B]">
							About Us
						</Link>
					</li>
					<li>
						<Link href="/" className="hover:text-[#098A5B]">
							Blog
						</Link>
					</li>
					<li>
						<Link
							href="/"
							className="hover:bg-[#246d53] bg-[#098A5B] px-4 py-3 rounded-md mx-5">
							Contact
						</Link>
					</li>
				</ul>
				<Image
					src="/search.svg"
					width={25}
					height={25}
					alt="search icon"
					className="ml-7 cursor-pointer"
				/>
			</nav>
		</>
	);
}
