import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import Homenavbar from "../components/Homenavbar";
import SplitText from "../components/HomeTextAnimation.jsx";

const Home = () => {
	const vantaRef = useRef(null);
	const vantaEffectRef = useRef(null);

	useEffect(() => {
		let isCancelled = false;

		if (!window.THREE) {
			window.THREE = THREE;
		}

		const initVanta = async () => {
			if (!vantaRef.current || vantaEffectRef.current) {
				return;
			}

			try {
				const { default: DOTS } = await import("vanta/dist/vanta.dots.min");

				if (isCancelled || !vantaRef.current) {
					return;
				}

				vantaEffectRef.current = DOTS({
					el: vantaRef.current,
					THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200,
					minWidth: 200,
					scale: 1,
					scaleMobile: 1,
					color: 0xff0421,
					color2: 0xdecbb9,
					backgroundColor: 0x0,
					size: 2.8,
					spacing: 29,
					showLines: false,
				});
			} catch (error) {
				console.error("[VANTA] Init error", error);
			}
		};

		initVanta();

		return () => {
			isCancelled = true;

			if (vantaEffectRef.current) {
				try {
					vantaEffectRef.current.destroy();
				} catch (error) {
					console.warn("[VANTA] Destroy warning", error);
				}
				vantaEffectRef.current = null;
			}
		};
	}, []);
	const handleAnimationComplete = () => {
		console.log("All letters have animated!");
	};
	return (
		<div ref={vantaRef} className='min-h-screen w-full' id='home'>
			<div className='flex min-h-screen items-start justify-between px-6 py-4 text-white flex-col'>
				<Homenavbar />
				{/* <div className='flex gap-0 flex-col '>
					<h1 className='text-[13rem] uppercase w-full font-[Kanit] leading-40 bg-amber-700 m-0 p-0'>
						welcome to
					</h1>
					<h1 className='text-[13rem] uppercase w-full font-[Kanit] m-0 p-0 leading-40 bg-amber-900'>
						my portfolio
					</h1>
				</div> */}

				<SplitText
					text='WELCOME TO MY PORTFOLIO'
					className='text-[13vw] font-[Kanit] uppercase font-semibold text-start leading-36 w-full'
					delay={140}
					duration={3}
					ease='power3.out'
					splitType='words'
					from={{ opacity: 0, y: 40 }}
					to={{ opacity: 1, y: 0 }}
					threshold={0.1}
					rootMargin='-100px'
					textAlign='left'
					onLetterAnimationComplete={handleAnimationComplete}
					showCallback
				/>
			</div>
		</div>
	);
};

export default Home;
