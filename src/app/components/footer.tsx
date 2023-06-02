import Image from "next/image";
import Link from "next/link";

interface ContactUsProps {
	icon: string;
	text: string;
	alt: string;
}

const ContactUsRow = ({ icon, text, alt }: ContactUsProps): JSX.Element => {
	return (
		<>
			<p className="flex my-3">
				<Image src={icon} width={20} height={20} alt={alt} />
				<span className="ml-2 font-extralight text-sm">{text}</span>
			</p>
		</>
	);
};

const Footer = (): JSX.Element => {
	const servicesClass: string = "font-extralight mb-4 text-sm";
	return (
		<>
			<section className="flex justify-center gap-[8rem] my-5">
				<Image src="/logo.svg" width={70} height={70} alt="logo" />

				<div>
					<h3 className="font-bold">CONTACT US</h3>
					<ContactUsRow
						icon="/phone.svg"
						text="+63 9876543212"
						alt="phone icon"
					/>
					<ContactUsRow
						icon="/email.svg"
						text="danielrey@email.dev"
						alt="email icon"
					/>
					<ContactUsRow
						icon="/location.svg"
						text="Camarines Norte, Ph"
						alt="location icon"
					/>
					<ContactUsRow
						icon="/work.svg"
						text="Monday to Friday"
						alt="work icon"
					/>
				</div>
				<div>
					<h3 className="font-bold mb-4">OUR SERVICES</h3>
					<p className={servicesClass}>Responsive Web App</p>
					<p className={servicesClass}>Beautiful UI/UX Design</p>
					<p className={servicesClass}>Seemless Mobile Apps</p>
					<p className={servicesClass}>Scable & Maintainable SASS</p>
				</div>
				<div>
					<h3 className="font-bold mb-4">About Us</h3>
					<p className={servicesClass}>Who we are</p>
					<p className={servicesClass}>Our philosophy</p>
					<p className={servicesClass}>How we work</p>
				</div>
			</section>
			<hr />
			<div className="w-full flex justify-evenly my-3">
				<p className="font-light text-sm">Copyright 2023 Daniel Rey</p>
				<div className="flex w-[60%] gap-3 justify-end">
					{/* Social Media Icons */}
					<Link href="https://www.instagram.com/dany3lr3y/" target="_blank">
						<Image
							src="/instagram.svg"
							width={25}
							height={25}
							alt="instagram logo"
						/>
					</Link>

					<Link href="https://web.facebook.com/daniel.rey.9440" target="_blank">
						<Image
							src="/facebook.svg"
							width={25}
							height={25}
							alt="facebook logo"
						/>
					</Link>

					<Link href="https://twitter.com/rey__daniel__" target="_blank">
						<Image
							src="/twitter.svg"
							width={25}
							height={25}
							alt="twitter logo"
						/>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Footer;
