/* eslint-disable react-hooks/set-state-in-effect */
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { skillsData } from "../../data/skillsData";


const SkillBar = ({ skill, index }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const [width, setWidth] = useState(0);

	useEffect(() => {
		if (isInView) {
			setWidth(skill.percentage);
		}
	}, [isInView, skill.percentage]);

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 20 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.5, delay: index * 0.05 }}
			className="rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
			style={{
				backgroundColor: "var(--color-bg)",
				border: "1px solid var(--color-border)",
			}}
		>
			<div className="flex items-center gap-3 mb-2">
				<skill.icon className="w-6 h-6" style={{ color: skill.color }} />
				<span
					className="font-medium flex-1"
					style={{ color: "var(--color-text-heading)" }}
				>
					{skill.name}
				</span>
				<span
					className="text-sm font-bold"
					style={{ color: "var(--color-accent)" }}
				>
					{skill.percentage}%
				</span>
			</div>

			{/* Progress Bar */}
			<div
				className="h-2 rounded-full overflow-hidden"
				style={{ backgroundColor: "var(--color-border)" }}
			>
				<motion.div
					className="h-full rounded-full"
					style={{
						background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
						width: `${width}%`,
						boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)",
					}}
					initial={{ width: 0 }}
					animate={{ width: `${width}%` }}
					transition={{ duration: 1, delay: index * 0.05 }}
				/>
			</div>
		</motion.div>
	);
};

const Skills = () => {
	return (
		<section
			className="py-20 font-mono"
			style={{
				backgroundColor: "var(--color-bg)",
				borderTop: "1px solid var(--color-border)",
				borderBottom: "1px solid var(--color-border)",
			}}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						My <span className="gradient-text">Skills</span>
					</h2>
					<p
						style={{ color: "var(--color-text)" }}
						className="max-w-2xl mx-auto"
					>
						Technologies I work with and my proficiency level
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{skillsData.map((skill, index) => (
						<SkillBar key={skill.name} skill={skill} index={index} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
