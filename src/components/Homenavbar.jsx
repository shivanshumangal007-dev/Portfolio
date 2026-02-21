import React from 'react'

const Homenavbar = () => {
  return (
		<div className='self-center navbar'>
			<ul className='flex space-x-10  px-10 py-4 text-xl font-[Montserrat] font-medium uppercase  rounded-full text-[#ffffffb3]'>
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
