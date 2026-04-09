import React, { useEffect, useState } from "react";


const getCardStyle = (relativePosition) => {
	const absPosition = Math.abs(relativePosition);
	const isCenter = relativePosition === 0;
	const isBehind = relativePosition > 0;

	const translateX = isCenter ? 0 : relativePosition * 72;
	const translateZ = isCenter ? 90 : -70 * absPosition;
	const rotateY = isCenter
		? 0
		: isBehind
			? -18 - absPosition * 6
			: 18 + absPosition * 6;
	const scale = isCenter ? 1 : Math.max(0.72, 0.92 - absPosition * 0.1);
	const opacity = isCenter ? 1 : Math.max(0.25, 0.82 - absPosition * 0.18);
	const blur = isCenter ? 0 : Math.min(1.5, absPosition * 0.5);

	return {
		transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
		opacity,
		filter: `blur(${blur}px)`,
		zIndex: 50 - absPosition,
	};
};

const ThreeDCardCarousel = ({ cards = defaultCards, interval = 1500 }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	useEffect(() => {
		if (isPaused || cards.length <= 1) return undefined;

		const timer = window.setInterval(() => {
			setActiveIndex((currentIndex) => (currentIndex + 1) % cards.length);
		}, interval);

		return () => window.clearInterval(timer);
	}, [cards.length, interval, isPaused]);

	return (
		<div className='w-[60%] sm:px-6 lg:px-8'>
			<div
				className='mx-auto flex w-full max-w-6xl items-center justify-center overflow-hidden rounded-2xl p-6 shadow-lg'
				onMouseEnter={() => setIsPaused(true)}
				onMouseLeave={() => setIsPaused(false)}
			>
				<div
					className='relative flex w-full items-center justify-center overflow-visible '
					style={{ perspective: "1600px" }}
				>
					<div className='relative lg:h-[80vh] w-full max-w-80 sm:h-112 sm:max-w-88 md:h-128 md:max-w-md lg:max-w-lg '>
						{cards.map((card, index) => {
							const totalCards = cards.length;
							let relativePosition = index - activeIndex;

							if (relativePosition > totalCards / 2) {
								relativePosition -= totalCards;
							}

							if (relativePosition < -totalCards / 2) {
								relativePosition += totalCards;
							}

							const isActive = relativePosition === 0;
							const cardStyle = getCardStyle(relativePosition);

							return (
								<article
									key={card.id}
									className='absolute left-1/2 top-1/2 h-full w-60 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_25px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/10 transition-[transform,opacity,filter] duration-700 ease-out will-change-transform sm:w-72 md:w-88 lg:w-lg'
									style={cardStyle}
								>
									<div className='absolute inset-0 bg-linear-to-b from-white/10 via-transparent to-black/30' />
									<img
										src={card.img}
										alt={`Project ${card.id}`}
										className='h-full w-full object-cover'
										draggable='false'
									/>
									{isActive ? (
										<div className='pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-white/30' />
									) : null}
								</article>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThreeDCardCarousel;
