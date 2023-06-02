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
				<header className="flex m-14 mt-10 justify-between scroll-smooth">
					<Navbar />
				</header>
				<main className="flex flex-col justify-center items-center">
					{children}
				</main>
				<footer className="w-full my-6">
					<Footer />
				</footer>
			</body>
		</html>
	);
}
