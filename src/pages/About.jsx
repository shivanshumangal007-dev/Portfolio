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
const About = () => {
	const aboutSection = useRef(null);
	const aboutcontent = useRef(null);
	useGSAP(
		() => {
			if (!aboutcontent.current) return;
			gsap.from(aboutcontent.current, {
				scrollTrigger: {
					trigger: aboutSection.current,
					start: "top 20%",
				},
                yPercent: 0,
				opacity: 0,
				duration: 2,
				ease: "power3.out",
			});
		},
		{ scope: aboutSection },
	);
	return (
		<div id='about' className='w-full h-screen relative' ref={aboutSection}>
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
				className='w-[90vw] h-[90vh] absolute top-1/2 bg-black/40  translate-x-[-50%] left-1/2 translate-y-[-50%] rounded-[20px] border border-[#FF9436]'
				ref={aboutcontent}
			></div>
		</div>
	);
};

export default About;
