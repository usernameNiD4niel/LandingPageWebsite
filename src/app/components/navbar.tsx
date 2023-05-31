import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	return (
		<>
			<Link href="/">
				<Image
					src="/next.svg"
					height={90}
					width={90}
					className="dark:invert flex justify-center align-middle bg-white"
					alt="logo"
				/>
			</Link>
			<nav className="flex flex-1 justify-end">
				<ul className="flex justify-between space-x-8 mr-3">
					<li>
						<Link
							href="/"
							className="text-[#098A5B] border-b-2 border-[#098A5B] pb-2">
							Home
						</Link>
					</li>
					<li>
						<Link href="/" className="hover:text-[#098A5B]">
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
