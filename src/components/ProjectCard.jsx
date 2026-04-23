import React from "react";

const ProjectCard = ({Project}) => {
    console.log(Project);
	return (
		<div className='lg:w-[47%] min-w-115 w-[99%] h-full  rounded-lg'>
			<h2 className='text-3xl font-bold text-white mt-8'>
				{Project.id }. {Project.name}
			</h2>
			<p className='text-lg text-white mt-4 px-6'>
				{Project.description}
			</p>
			<div className='p-1 border-2 border-white/50 rounded-lg my-6 mx-6 cursor-pointer' onClick={() => window.open(Project.link, "_blank")}>
				<img
					src={Project.image}
					alt=''
					className='w-full h-auto rounded-lg'
				/>
			</div>
			<div classname='flex gap-5'>
				<ul className='text-lg text-white mt-4 px-6 flex gap-5 technologies'>
                    {
                        Project.technologies.map((tech) => <li>{tech}</li>)
                    }
				</ul>
			</div>
		</div>
	);
};

export default ProjectCard;
