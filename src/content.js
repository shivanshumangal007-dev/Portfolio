import projectNORMAL from './assets/project-normal.png'
import projectRESOLVEIT from "./assets/project-ResolveIt.png";
import projectPYQSHUB from "./assets/project-PYQhub.png";
import projectChitGit from "./assets/project-ChitGit.png";
import { link } from 'motion/react-client';

const projects = [
	{
		id: 1,
		name: "CHITGIT",
		description:
			"Developed a production-oriented AI repository analysis platform that transforms GitHub repositories into searchable knowledge bases. Users can upload repositories, ask context-aware questions about the codebase, and receive AI-generated responses powered by vector search, code embeddings, and retrieval-augmented generation (RAG).",
		image: projectChitGit,
		technologies: ["React", "FastAPI", "PostgreSQL", "Qdrant", "Redis", "JWT"],
		link: "https://chit-git.vercel.app/login",
	},
	{
		id: 2,
		name: "RESOLVE IT",
		description:
			"RESOLVE IT is a AI based centralized complaint management system where AI is used to classify problem type and assign it to the relevant department. Built to ensure transparency, faster responses, and accountability—so no problem goes unheard.",
		image: projectRESOLVEIT,
		technologies: ["react", "javascript", "DJANGO", "postgreSQL"],
		link: "https://resolveit-7sks.onrender.com/",
	},
	{
		id: 3,
		name: "PYQ HUB",
		description:
			"A centralized platform for organizing and accessing previous year question papers of the college. It simplifies exam preparation by structuring resources in one place—making it easier to find, practice, and stay ahead.",
		image: projectPYQSHUB,
		technologies: [
			"react",
			"Gsap",
			"javascript",
			"LOCOMOTIVE JS",
			"FASTAPI",
			"postgreSQL",
		],
		link: "https://pyqhub-2-0.vercel.app/",
	},
	{
		id: 4,
		name: "NORMAL",
		description:
			"NORMAL is a platform that supports mental well-being and emotional healing. It encourages open conversations about mental health and helps people find calm and balance.",
		image: projectNORMAL,
		technologies: ["html", "CSS", "javascript", "mongoDB"],
		link: "https://shivanshumangal007-dev.github.io/NORMAL-redegiened-/",
	},
];

export default projects;