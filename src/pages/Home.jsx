import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import Homenavbar from "../components/Homenavbar";

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

	return (
		<div ref={vantaRef} className='min-h-screen w-full' id="home">
			<div className='flex min-h-screen items-start justify-between px-6 py-4 text-white flex-col space-y-6'>
                <Homenavbar/>
				<h1 className='text-[13rem] uppercase leading-44 w-full font-[Kanit]'>
					welcome to <br/>my portfolio
				</h1>
			</div>
		</div>
	);
};

export default Home;
