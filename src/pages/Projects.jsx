import React from 'react'
import projects from "../content.js";
import ProjectCard from '../components/ProjectCard';
const Projects = () => {
  return (
		<div className='min-h-screen w-full flex items-center justify-center px-4 flex-col' id='projects'>
			<p className='text-xl font-[Montserrat] text-white'>PORTFOLIO</p>
			<h1 className='text-7xl font-bold text-white text-center'>
				{" "}
				FEATURED <span className='text-[#FF9436]'>PROJECTS</span>
			</h1>
			<div className='md:w-9/10 w-full min-h-96 rounded-lg my-12 flex items-center justify-center gap-[3vw] flex-wrap'>
				{
					projects.map((project) => {
						return <ProjectCard key={project.id} Project={project} />;
					})
				}
			</div>
		</div>
  );
}

export default Projects
