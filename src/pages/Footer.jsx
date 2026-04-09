import React from 'react'

const Footer = () => {
  return (
		<div className='h-[30vh] flex flex-col gap-2.5 px-10'>
			<div className='1 flex justify-between'>
				<div className='left w-[40%]'>
					<h1 className='text-white font-[xirod] text-[4vw] font-bold tracking-wide'>
						shivanshu
					</h1>
					<p className='font-[Montserrat] text-white/50 text-xl font-medium mt-2 text-justify'>
						Building digital experiences that matter, one line of code at
						a time. Crafting interfaces that feel alive, solving problems
						that make a difference, and turning ideas into reality. Every
						pixel has a purpose. Every interaction tells a story.
					</p>
				</div>
				<div className='right py-4 flex gap-20'>
					<div>
						<h1 className='text-white/80 text-[1.5vw] capitalize font-bold tracking-wide'>
							contact
						</h1>
						<p className='font-[Montserrat] text-white text-xl font-medium mt-2 text-justify'>
							✉️ shivanshumangal007@gmail.com
						</p>
					</div>
					<div>
						<h1 className='text-white/80 text-[1.5vw] capitalize font-bold tracking-wide'>
							General
						</h1>
						<p className='font-[Montserrat] text-white text-xl font-medium mt-2 text-justify'>
							<a href="#" className='text-white/80 hover:text-white transition-colors duration-300'>
								Home
							</a>
						</p>
						<p className='font-[Montserrat] text-white text-xl font-medium mt-2 text-justify'>
							<a href="#about" className='text-white/80 hover:text-white transition-colors duration-300'>
								About
							</a>
						</p>
						<p className='font-[Montserrat] text-white text-xl font-medium mt-2 text-justify'>
							<a href="#projects" className='text-white/80 hover:text-white transition-colors duration-300'>
								Work
							</a>
						</p>
						<p className='font-[Montserrat] text-white text-xl font-medium mt-2 text-justify'>
							<a href="#" className='text-white/80 hover:text-white transition-colors duration-300'>
								Resume
							</a>
						</p>
					</div>
				</div>
			</div>
      <div className="2 border-t-2 border-white/20 flex items-center justify-center h-full">
        <p className='text-white/50 text-center text-sm font-[Montserrat]'>
          © 2026 Shivanshu Mangal. All rights reserved.
        </p>
      </div>
		</div>
  );
}

export default Footer
