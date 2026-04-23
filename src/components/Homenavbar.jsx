import React, { useState } from "react";
import Logo from "./Logo";
import downloadIcon from "../assets/download-line.svg";

const Homenavbar = () => {
	const [active, setActive] = useState("home");
	return (
		<div className='self-center flex items-center justify-between w-full h-16 px-18 py-4 text-xl font-[Montserrat] font-medium text-[#ffffffb3] navbar'>
			<Logo />
			<div className='flex gap-2'>
				<ul className='flex space-x-10 text-[0.9vw] font-[Montserrat] font-light capitalize border border-white/20 rounded-full text-[#ffffffb3]'>
					<li>
						<a
							href='#home'
							className={active === "home" ? "active" : ""}
							onClick={() => setActive("home")}
						>
							Home
						</a>
					</li>
					<li>
						<a
							href='#about'
							className={active === "about" ? "active" : ""}
							onClick={() => setActive("about")}
						>
							About
						</a>
					</li>
					<li>
						<a
							href='#projects'
							className={active === "projects" ? "active" : ""}
							onClick={() => setActive("projects")}
						>
							Projects
						</a>
					</li>
					{/* <li>
						<a
							href='#contact'
							className={active === "contact" ? "active" : ""}
							onClick={() => setActive("contact")}
						>
							Contact
						</a>
					</li> */}
				</ul>
				<div className=' resume_btn rounded-full p-1 px-5 font-light text-lg text-black/70'>
					<a
						href='https://drive.google.com/uc?export=download&id=1Fd-6YcsK9lToRIJ23NkaX71qjdljZM7E'
						className='flex items-center gap-3'
						download='resume.pdf'
						rel='noopener noreferrer'
					>
						Resume{" "}
						<img
							className='h-5'
							src={downloadIcon}
							alt='Download Resume'
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Homenavbar;
