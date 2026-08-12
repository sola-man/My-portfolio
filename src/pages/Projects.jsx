import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

const ProjectsPage = () => {
	return (
		<div className="pt-24 pb-20 font-mono">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h1 className="text-4xl sm:text-5xl font-bold mb-4">
						My{" "}
						<span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
							Projects
						</span>
					</h1>
					<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Explore my work and see how I bring ideas to life
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projectsData.map((project) => (
						<div
							key={project.id}
							className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
						>
							<div
								className="h-48 bg-cover"
								style={{ backgroundImage: `url(${project.image})` }}
							></div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
									{project.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.techStack.slice(0, 3).map((tech) => (
										<span
											key={tech}
											className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full"
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
								<div className="flex flex-wrap gap-2">
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors inline-flex items-center gap-1"
									>
										<FiGithub /> Code
									</a>
									{project.liveDemo? <a
										href={project.liveDemo ?? null}
										target="_blank"
										rel="noopener noreferrer"
										className="px-3 py-1 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors inline-flex items-center gap-1"
									>
										<FiExternalLink /> Live Demo
									</a> : null}
									<Link
										to={`/project/${project.id}`}
										className="px-3 py-1 text-sm text-blue-500 hover:text-blue-600 transition-colors"
									>
										Details &rarr;
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
//
export default ProjectsPage;
