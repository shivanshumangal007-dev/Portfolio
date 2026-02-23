import Masonry from "../components/about_img_animation.jsx";
import img1 from "../assets/1.jpeg";
import img4 from "../assets/4.jpeg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img12 from "../assets/12.jpeg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const items = [
	{
		id: "1",
		img: img1,
		url: "#",
		height: 500,
	},
	{
		id: "2",
		img: img12,
		url: "#",
		height: 1440,
	},
	{
		id: "3",
		img: img8,
		url: "#",
		height: 700,
	},
	{
		id: "4",
		img: img4,
		url: "#",
		height: 900,
	},
	{
		id: "5",
		img: img9,
		url: "#",
		height: 700,
	},
];

const socialLinks = [
	{
		name: "LinkedIn",
		handle: "@shivanshumangal",
		url: "#",
		icon: "ri-linkedin-fill",
		hoverClass: "hover:bg-[#0A66C2]",
	},
	{
		name: "GitHub",
		handle: "@shivanshumangal007",
		url: "#",
		icon: "ri-github-fill",
		hoverClass: "hover:bg-[#171515]",
	},
	{
		name: "Instagram",
		handle: "@shivanshumangal007",
		url: "#",
		icon: "ri-instagram-fill",
		hoverClass: "hover:bg-[#E4405F]",
	},
];

const About = () => {
	const aboutSection = useRef(null);
	const aboutcontent = useRef(null);
	const mouseHovrDiv = useRef(null);
	const moveX = useRef(null);
	const moveY = useRef(null);
	useGSAP(
		() => {
			if (!aboutcontent.current) return;

			const AbtTl = gsap.timeline({
				scrollTrigger: {
					trigger: aboutSection.current,
					start: "top 20%",
				},
			});

			AbtTl.from(aboutcontent.current, {
				yPercent: 0,
				opacity: 0,
				duration: 2,
				ease: "power3.out",
			})
				.from(
					"div p",
					{
						yPercent: 20,
						opacity: 0,
						duration: 1,
						stagger: 0.2,
					},
					"-=0.5",
				)
				.from(
					".socials",
					{
						yPercent: 20,
						opacity: 0,
						duration: 1,
						stagger: 0.2,
					},
					"-=0.5",
				);

			if (!mouseHovrDiv.current) return;
			moveX.current = gsap.quickTo(mouseHovrDiv.current, "x", {
				duration: 0.2,
				ease: "power3.out",
			});
			moveY.current = gsap.quickTo(mouseHovrDiv.current, "y", {
				duration: 0.2,
				ease: "power3.out",
			});
		},
		{ scope: aboutSection },
	);

	const handleMouseMove = (e) => {
		if (!aboutcontent.current || !mouseHovrDiv.current) return;
		const rect = aboutcontent.current.getBoundingClientRect();
		const x = e.clientX - rect.left - 90;
		const y = e.clientY - rect.top - 120;
		moveX.current?.(x);
		moveY.current?.(y);
	};

	const handleMouseEnter = () => {
		if (!mouseHovrDiv.current) return;
		gsap.to(mouseHovrDiv.current, {
			scale: 1,
			opacity: 1,
			duration: 0.35,
			ease: "power3.out",
		});
	};

	const handleMouseLeave = () => {
		if (!mouseHovrDiv.current) return;
		gsap.to(mouseHovrDiv.current, {
			scale: 0,
			opacity: 0,
			duration: 0.35,
			ease: "power3.out",
		});
	};

	return (
		<div
			id='about'
			className='w-full h-screen relative overflow-y-hidden'
			ref={aboutSection}
		>
			<Masonry
				items={items}
				ease='power3.out'
				duration={1}
				stagger={0.2}
				animateFrom='bottom'
				scaleOnHover
				hoverScale={0.95}
				blurToFocus={false}
				colorShiftOnHover
			/>
			<div
				className='w-[90vw] h-[90vh] absolute top-1/2 bg-black/40  translate-x-[-50%] left-1/2 translate-y-[-50%] rounded-[20px] border border-[#FF9436] py-30 font-extrabold px-20 flex flex-col'
				ref={aboutcontent}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onMouseMove={handleMouseMove}
			>
				<div
					className='w-[10vw] h-[10vw] rounded-full absolute bg-amber-400/40 translate-x-[-50%] translate-y-[-50%] pointer-events-none scale-0 opacity-0 will-change-transform'
					ref={mouseHovrDiv}
				></div>
				<p className='text-4xl capitalize text-white'>hi, i am</p>
				<p className='text-white text-6xl name uppercase tracking-wide leading-10 pt-5'>
					shivanshu mangal
				</p>
				<p className='text-white text-xl mt-6 font-[Montserrat] '>
					<span className='text-orange-600'>Full Stack Developer</span>{" "}
					Open Source Enthusiast
				</p>
				<p className='text-white py-3 font-[Montserrat]'>
					{" "}
					✉️ shivanshumangal007@gmail.com
				</p>

				<div className='flex gap-2 flex-col'>
					<p className='text-white text-[1.4vw] font-[Montserrat] capitalize '>
						connect me on :
					</p>
					<div className='flex gap-6 pl-10 socials'>
						{socialLinks.map((social) => (
							<a
								key={social.name}
								href={social.url}
								target='_blank'
								rel='noreferrer'
								aria-label={social.name}
								className={`group relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-white bg-white text-black transition-all duration-300 hover:text-white ${social.hoverClass}`}
							>
								<i className={`${social.icon} text-2xl`} />
								<span className='pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-3 py-1 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
									{social.name} {social.handle}
								</span>
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
