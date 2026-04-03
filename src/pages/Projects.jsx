import React from 'react'
import projectNORMAL from '../assets/project-normal.png'
import projectRESOLVEIT from "../assets/project-ResolveIt.png";
import projectPYQSHUB from "../assets/project-PYQhub.png";
import projectOBSIDIAN from "../assets/project-TASK-QUEUE.png";
const Projects = () => {
  return (
		<div className='min-h-screen w-full flex items-center justify-center px-4 flex-col'>
			<p className='text-xl font-[Montserrat] text-white'>PORTFOLIO</p>
			<h1 className='text-7xl font-bold text-white'>
				{" "}
				FEATURED <span className='text-[#FF9436]'>PROJECTS</span>
			</h1>
			<div className='w-3/4 min-h-96 rounded-lg my-12 flex items-center justify-center gap-[3vw] flex-wrap'>
				<div className='w-[45%] h-full  rounded-lg'>
					<h2 className='text-3xl font-bold text-white mt-8'>1. NORMAL</h2>
					<p className='text-lg text-white mt-4 px-6'>
						NORMAL is a platform that supports mental well-being and
						emotional healing. It encourages open conversations about
						mental health and helps people find calm and balance.
					</p>
					<div className='p-1 border-2 border-white/50 rounded-lg my-6 mx-6'>
						<img
							src={projectNORMAL}
							alt=''
							className='w-full h-auto rounded-lg'
						/>
					</div>
					<div classname='flex gap-5'>
						<ul className='text-lg text-white mt-4 px-6 flex gap-5 technologies'>
							<li>html</li>
							<li>CSS</li>
							<li>javascript</li>
							<li>mongoDB</li>
						</ul>
					</div>
				</div>
				<div className='w-[45%] h-full  rounded-lg'>
					<h2 className='text-3xl font-bold text-white mt-8'>
						2. RESOLVE IT
					</h2>
					<p className='text-lg text-white mt-4 px-6'>
						RESOLVE IT is A centralized complaint management system that
						streamlines reporting, tracking, and resolution of issues.
						Built to ensure transparency, faster responses, and
						accountability—so no problem goes unheard.
					</p>
					<div className='p-1 border-2 border-white/50 rounded-lg my-6 mx-6'>
						<img
							src={projectRESOLVEIT}
							alt=''
							className='w-full h-auto rounded-lg'
						/>
					</div>
					<div classname='flex gap-5'>
						<ul className='text-lg text-white mt-4 px-6 flex gap-5 technologies'>
							<li>react</li>
							<li>javascript</li>
							<li>DJANGO</li>
							<li>postgreSQL</li>
						</ul>
					</div>
				</div>
				<div className='w-[45%] h-full  rounded-lg'>
					<h2 className='text-3xl font-bold text-white mt-8'>
						3. PYQ HUB
					</h2>
					<p className='text-lg text-white mt-4 px-6'>
						A centralized platform for organizing and accessing previous
						year question papers of the college. It simplifies exam
						preparation by structuring resources in one place—making it
						easier to find, practice, and stay ahead.
					</p>
					<div className='p-1 border-2 border-white/50 rounded-lg my-6 mx-6'>
						<img
							src={projectPYQSHUB}
							alt=''
							className='w-full h-auto rounded-lg'
						/>
					</div>
					<div classname='flex gap-5'>
						<ul className='text-lg text-white mt-4 px-6 flex gap-5 technologies'>
							<li>react</li>
							<li>Gsap</li>
							<li>javascript</li>
							<li>LOCOMOTIVE JS</li>
							<li>DJANGO</li>
						</ul>
					</div>
				</div>
				<div className='w-[45%] h-full  rounded-lg'>
					<h2 className='text-3xl font-bold text-white mt-8'>
						4. OBSIDIAN MONOLITH
					</h2>
					<p className='text-lg text-white mt-4 px-6'>
						Built a distributed task queue system that processes
						background jobs asynchronously using Node.js workers and Redis
						queues. Includes a monitoring dashboard to create tasks, track
						execution status, and observe real-time queue statistics.
					</p>
					<div className='p-1 border-2 border-white/50 rounded-lg my-6 mx-6'>
						<img
							src={projectOBSIDIAN}
							alt=''
							className='w-full h-auto rounded-lg'
						/>
					</div>
					<div classname='flex gap-5'>
						<ul className='text-lg text-white mt-4 px-6 flex gap-5 technologies'>
							<li>react</li>
							<li>Redis</li>
							<li>Node Workers</li>
							<li>Express.js</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
  );
}

export default Projects
