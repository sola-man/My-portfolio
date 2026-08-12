import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { projectsData } from "../data/projectsData";

const ProjectDetail = () => {
	const { id } = useParams();
	const project = projectsData.find((p) => p.id === +id);

	return (
		<div className="pt-24 pb-20 font-mono">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<Link
					to="/projects"
					className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors mb-6"
				>
					<FiArrowLeft /> Back to Projects
				</Link>

				<div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm">
					<div
						className="h-64 bg-cover"
						style={{ backgroundImage: `url(${project.image})` }}
					></div>
					<div className="p-8">
						<h1 className="text-3xl font-bold mb-4">
							Project {id} &mdash;{" "}
							<span className="text-blue-400">{project.title}</span>
						</h1>
							<p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
								{project.detailedDescription}
							</p>

						<div className="p-6">
							<h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
							<div className="flex flex-wrap gap-2 mb-4">
								{project.techStack.map((tech) => (
									<span
										key={tech}
										className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full"
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						<div className="flex flex-wrap gap-4">
							<a
								href={`${project.github}`}
								target="_blank"
								rel="noopener noreferrer"
								className="px-6 py-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors inline-flex items-center gap-2"
							>
								<FiGithub /> View Code
							</a>
							{project.liveDemo ? <a
								href={`${project.liveDemo}`}
								target="_blank"
								rel="noopener noreferrer"
								className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
							>
								<FiExternalLink /> Live Demo
							</a>: null}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetail;
