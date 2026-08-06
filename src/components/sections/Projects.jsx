import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import { projectsData } from "../../data/projectsData";
import { useState } from "react";

const Projects = () => {
	const [isExpanded] = useState(false);

	const displayProjects = isExpanded ? projectsData : projectsData.slice(0, 6);

	return (
		<section className="py-20 font-mono">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						Featured{" "}
						<span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
							Projects
						</span>
					</h2>
					<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Some of my recent work that showcases my skills and creativity
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{displayProjects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							whileHover={{ y: -8 }}
							className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
						>
							<Link to={`/project/${project.id}`}>
								<div
									className="relative h-48 bg-cover overflow-hidden bg-linear-to-br from-blue-500 to-purple-600 "
									style={{ backgroundImage: `url(${project.image})` }}
								>
									<div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
									<div className="absolute bottom-0 left-0 right-0 p-4">
										<div className="flex flex-wrap gap-2">
											{project.techStack.slice(0, 3).map((tech) => (
												<span
													key={tech}
													className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white"
												>
													{tech}
												</span>
											))}
											{project.techStack.length > 3 && (
												<span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">
													+{project.techStack.length - 3}
												</span>
											)}
										</div>
									</div>
								</div>
							</Link>

							<div className="p-6">
								<Link to={`/project/${project.id}`}>
									<h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
										{project.title}
									</h3>
								</Link>
								<p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2">
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors inline-flex items-center gap-1"
									>
										<FiGithub /> Code
									</a>
									<a
										href={project.liveDemo}
										target="_blank"
										rel="noopener noreferrer"
										className="px-3 py-1 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors inline-flex items-center gap-1"
									>
										<FiExternalLink /> Live Demo
									</a>
									<Link
										to={`/project/${project.id}`}
										className="px-3 py-1 text-sm text-blue-500 hover:text-blue-600 transition-colors"
									>
										Details &rarr;
									</Link>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				<div className="text-center mt-12">
					<Link
						to="/projects"
						className="inline-block px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
					>
						View All Projects &rarr;
					</Link>
				</div>
			</div>
		</section>
	);
};
export default Projects;
