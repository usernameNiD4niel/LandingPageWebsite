import Image from "next/image";

const Footer = () => {
	return (
		<>
			<section>
				<Image
					src="/next.svg"
					width={150}
					height={150}
					alt="logo"
					className="dark:invert"
				/>

				<div>
					<h3>CONTACT US</h3>
					<p>
						<Image
							src="/phone.svg"
							width={40}
							height={40}
							className="dark:invert"
							alt="phone icon"
						/>
						<span>+63 9876543212</span>
					</p>
					<p>
						<Image
							src="/email.svg"
							width={40}
							height={40}
							className="dark:invert"
							alt="email icon"
						/>
						<span>danielrey@email.dev</span>
					</p>
					<p>
						<Image
							src="/location.svg"
							width={40}
							height={40}
							className="dark:invert"
							alt="location icon"
						/>
						<span>Camarines Norte, Ph</span>
					</p>
					<p>
						<Image
							src="/work.svg"
							width={40}
							height={40}
							className="dark:invert"
							alt="work icon"
						/>
						<span>Monday to Friday</span>
					</p>
				</div>
				<div>
					<h3>OUR SERVICES</h3>
					<p>Responsive Web App</p>
					<p>Beautiful UI/UX Design</p>
					<p>Seemless Mobile Apps</p>
					<p>Scable & Maintainable SASS</p>
				</div>
				<div>
					<h3>About Us</h3>
					<p>Who we are</p>
					<p>Our philosophy</p>
					<p>How we work</p>
				</div>
			</section>
			<hr />
			<div>
				<p>Copyright 2023 Daniel Rey</p>
				<div>{/* Social Media Icons */}</div>
			</div>
		</>
	);
};

export default Footer;
