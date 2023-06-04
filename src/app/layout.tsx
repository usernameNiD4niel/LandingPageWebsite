import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "DVR Landing Page",
	description:
		"This website is a Landing Page that helps user to their day to day experience",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<header className="flex justify-between bg-black py-5 px-3 sticky top-0 left-0 right-0 z-20 lg:py-10 md:px-[6rem] text-white">
					<Navbar />
				</header>
				<main className="flex flex-col justify-center items-center overflow-hidden bg-black text-white">
					{children}
				</main>
				<footer className="w-full my-6 overflow-hidden bg-black text-white">
					<Footer />
				</footer>
			</body>
		</html>
	);
}
