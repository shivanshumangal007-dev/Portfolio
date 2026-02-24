import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Text } from "@react-three/drei";
import * as THREE from "three";

const SKILLS = [
	"JavaScript",
	"React.js",
	"Tailwind CSS",
	"Responsive Web Design",
	"Git",
	"GitHub",
	"Python",
	"Django",
	"REST API Development",
	"JWT Authentication",
	"MongoDB",
	"Deployment (Render / Railway)",
	"C++",
	"Data Structures & Algorithms",
];

function getEvenPointsOnSphere(count, radius = 1.02) {
	const points = [];
	const goldenAngle = Math.PI * (3 - Math.sqrt(5));

	for (let index = 0; index < count; index += 1) {
		const y = 1 - (index / (count - 1)) * 2;
		const r = Math.sqrt(1 - y * y);
		const theta = goldenAngle * index;
		const x = Math.cos(theta) * r;
		const z = Math.sin(theta) * r;

		points.push([x * radius, y * radius, z * radius]);
	}

	return points;
}

function SkillLabel({ text, position, index }) {
	const labelRef = useRef(null);
	const [isHovered, setIsHovered] = useState(false);
	const normal = useMemo(() => {
		const vector = new THREE.Vector3(position[0], position[1], position[2]);
		return vector.normalize();
	}, [position]);

	const tempPosition = useRef(new THREE.Vector3());
	const tempScale = useRef(new THREE.Vector3(1, 1, 1));

	useFrame((state) => {
		if (!labelRef.current) {
			return;
		}

		const t = state.clock.getElapsedTime();
		const floatOffset = Math.sin(t * 1.25 + index * 0.7) * 0.018;

		tempPosition.current.copy(normal).multiplyScalar(1.25 + floatOffset);
		labelRef.current.position.copy(tempPosition.current);
		labelRef.current.lookAt(state.camera.position);

		if (labelRef.current.material) {
			labelRef.current.material.transparent = true;
			labelRef.current.material.opacity = isHovered ? 1 : 0.96;
			labelRef.current.material.depthTest = false;
			labelRef.current.material.depthWrite = false;
		}

		const targetScale = isHovered ? 1.16 : 1;
		tempScale.current.setScalar(targetScale);
		labelRef.current.scale.lerp(tempScale.current, 0.14);
	});

	return (
		<Text
			ref={labelRef}
			position={position}
			fontSize={0.12}
			color={isHovered ? "#ff9436" : "#e2e8f0"}
			anchorX='center'
			anchorY='middle'
			outlineWidth={0.004}
			outlineColor='#ff9436'
			onPointerOver={() => setIsHovered(true)}
			onPointerOut={() => setIsHovered(false)}
		>
			{text}
		</Text>
	);
}

function GlobeCore() {
	const globeGroupRef = useRef(null);
	const skillPositions = useMemo(
		() => getEvenPointsOnSphere(SKILLS.length),
		[],
	);

	useFrame((state) => {
		if (!globeGroupRef.current) {
			return;
		}

		const t = state.clock.getElapsedTime();
		globeGroupRef.current.rotation.y += 0.0015;
		globeGroupRef.current.rotation.x = Math.sin(t * 0.2) * 0.04;
	});

	return (
		<group ref={globeGroupRef}>
			<mesh>
				<sphereGeometry args={[1, 64, 64]} />
				<meshPhysicalMaterial
					color='#93c5fd'
					metalness={0.2}
					roughness={0.35}
					clearcoat={1}
					clearcoatRoughness={0.2}
				/>
			</mesh>

			<mesh>
				<sphereGeometry args={[1.02, 40, 40]} />
				<meshBasicMaterial
					color='#ff9436'
					wireframe
					transparent
					opacity={0.18}
				/>
			</mesh>

			{SKILLS.map((skill, index) => (
				<SkillLabel
					key={skill}
					text={skill}
					position={skillPositions[index]}
					index={index}
				/>
			))}
		</group>
	);
}

export default function SkillsAnimation() {
	return (
		<div className='relative h-125 w-full'>
			<Canvas
				dpr={[1, 2]}
				camera={{ position: [0, 0, 4.2], fov: 48 }}
				className='h-full w-full'
			>
				<ambientLight intensity={0.5} />
				<pointLight position={[4, 3, 5]} intensity={1.1} />
				<pointLight
					position={[-3, -2, -4]}
					intensity={0.35}
					color='#93c5fd'
				/>

				<Stars
					radius={80}
					depth={35}
					count={1600}
					factor={3}
					saturation={0}
					fade
					speed={0.5}
				/>

				<GlobeCore />

				<OrbitControls
					enableZoom={false}
					autoRotate
					autoRotateSpeed={0.55}
					enablePan={false}
					rotateSpeed={0.65}
					minPolarAngle={Math.PI / 2 - 0.8}
					maxPolarAngle={Math.PI / 2 + 0.8}
				/>
			</Canvas>
		</div>
	);
}
