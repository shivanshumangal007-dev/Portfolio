import projectNORMAL from './assets/project-normal.png'
import projectRESOLVEIT from "./assets/project-ResolveIt.png";
import projectPYQSHUB from "./assets/project-PYQhub.png";
import projectOBSIDIAN from "./assets/project-TASK-QUEUE.png";

const projects = [
	{
		id: 1,
		name: "NORMAL",
		description: "NORMAL is a platform that supports mental well-being and emotional healing. It encourages open conversations about mental health and helps people find calm and balance.",
		image: projectNORMAL,
		technologies : ["html", "CSS", "javascript", "mongoDB"]
	},
	{
		id: 2,
		name: "RESOLVE IT",
		description:
			"RESOLVE IT is a AI based centralized complaint management system where AI is used to classify problem type and assign it to the relevant department. Built to ensure transparency, faster responses, and accountability—so no problem goes unheard.",
		image: projectRESOLVEIT,
		technologies: ["react", "javascript", "DJANGO", "postgreSQL"]
	},
	{
		id: 3,
		name: "PYQ HUB",
		description:
			"A centralized platform for organizing and accessing previous year question papers of the college. It simplifies exam preparation by structuring resources in one place—making it easier to find, practice, and stay ahead.",
		image: projectPYQSHUB,
		technologies: ["react", "Gsap", "javascript", "LOCOMOTIVE JS", "FASTAPI", "postgreSQL"]
	},
	{
		id: 4,
		name: "OBSIDIAN TASK QUEUE",
		description:
			"Built a distributed task queue system that processes background jobs asynchronously using Node.js workers and Redis queues. Includes a monitoring dashboard to create tasks, track execution status, and observe real-time queue statistics.",
		image: projectOBSIDIAN,
		technologies: ["Node.js", "Redis", "React", "javascript"]
	},
];

export default projects;