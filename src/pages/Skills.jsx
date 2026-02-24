import React from "react";
import SkillsAnimation from "../components/SkillsAnimation";

const Skills = () => {
	return (
		<div
			id='skills'
			className='min-h-screen w-full flex items-center justify-center px-4 flex-col'
		>
			<p className='text-xl font-[Montserrat]'>TECH STACK</p>
			<h1 className='text-7xl font-bold text-white'> My <span className='text-[#FF9436]'>Skills</span></h1>

			<div className='w-full '>
				<SkillsAnimation />
			</div>
		</div>
	);
};

export default Skills;
