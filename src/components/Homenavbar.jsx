import React from 'react'

const Homenavbar = () => {
  return (
		<div className='self-center'>
			<ul className='flex space-x-4  px-10 py-4 text-xl rounded-full font-[Montserrat] font-medium uppercase'>
				<li>
					<a href='#home'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#projects'>Projects</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>
		</div>
  );
}

export default Homenavbar
