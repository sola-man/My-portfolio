import { developerData } from "../data/developerData";

const About = () => {
	const {image} = developerData;

	return (
		<div className="pt-24 pb-20 font-mono">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h1 className="text-4xl sm:text-5xl font-bold mb-4">
						About{" "}
						<span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
							Me
						</span>
					</h1>
				</div>

				<div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
					<div className="flex flex-col md:flex-row gap-8 items-start">
						<div className="w-full md:w-1/3">
							<div className=" bg-linear-to-br from-blue-500 to-green-600 flex items-center justify-center text-6xl mx-auto rounded-2xl">
								<img
									src={image}
									alt="Solaman"
									className="rounded-3xl "
								/>
							</div>
						</div>
						<div className="w-full md:w-2/3">
							<h2 className="text-2xl font-bold mb-4">Who I Am</h2>
							<p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
								I'm a passionate Full Stack Developer with expertise in React,
								Node.js, and modern web technologies. I love creating beautiful,
								functional, and user-friendly applications that solve real-world
								problems.
							</p>
							<p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
								With a strong foundation in both frontend and backend
								development, I bring ideas to life through clean code and
								thoughtful design.
							</p>

							<p className="text-gray-600 dark:text-gray-400 leading-relaxed">
								Beyond web development, I'm deeply fascinated by Artificial
								Intelligence and Machine Learning. I love exploring how AI can
								solve real-world problems and enhance user experiences.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
