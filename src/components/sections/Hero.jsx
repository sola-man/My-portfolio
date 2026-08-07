import { motion } from "framer-motion";
import {
	FiDownload,
	FiGithub,
	FiLinkedin,
	FiMail,
	FiPhoneCall
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { developerData } from "../../data/developerData";
import { handleDownloadCV } from "../../utils/helpers";
import { SiTelegram, SiWhatsapp } from "react-icons/si";

const Hero = () => {
	const { github, linkedIn, gMail, phone, fullName, image, whatsapp, telegram } = developerData;
	const { gmail } = gMail;

	return (
		<section className="min-h-screen flex items-center relative overflow-hidden pt-16 mt-10 font-mono">
			<div className="absolute inset-0 -z-10">
				<motion.div
					className="absolute top-[-50%] right-[-20%] w-150 h-150 rounded-full bg-linear-to-r from-blue-500/20 to-purple-600/20 blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						x: [0, 50, 0],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute bottom-[-30%] left-[-10%] w-125 h-125 rounded-full bg-linear-to-r from-cyan-500/20 to-emerald-500/20 blur-3xl"
					animate={{
						scale: [1, 1.3, 1],
						x: [0, -30, 0],
					}}
					transition={{
						duration: 10,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<div className="space-y-6">
							<h6 className=" sm:text-4xl lg:text-5xl font-bold leading-tight">
								<span className="block">Hey, I'm</span>
								<span className="bg-linear-to-r from-amber-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
									{fullName}
								</span>
							</h6>

							<div className="text-1xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300 h-12">
								<TypeAnimation
									sequence={[
										"Junior Full Stack Developer",
										2000,
										"React & Next.js Expert",
										2000,
										"UI/UX Developer",
										2000,
										"Problem Solver",
										2000,
										"Passionate Coder",
										2000,
										"Python developer",
										2000,
										"AI/ML Enthusiast",
										2000,
									]}
									wrapper="span"
									speed={50}
									repeat={Infinity}
									className="bg-linear-to-r from-amber-500 to-blue-600 bg-clip-text text-transparent"
								/>
							</div>

							<p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
								I build exceptional digital experiences with modern
								technologies. Passionate about creating beautiful, performant,
								and user-friendly applications.
							</p>

							<div className="flex flex-wrap gap-4">
								<button
									onClick={handleDownloadCV}
									className="px-8 py-3 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
								>
									<FiDownload /> Download Resume
								</button>
								<Link to="/contact">
									<button className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-full font-medium hover:bg-blue-500 hover:text-white transition-all duration-300">
										Contact Me
									</button>
								</Link>
							</div>

							<div className="flex gap-4 pt-4">
								{[
									{
										icon: FiGithub,
										label: "GitHub",
										url: github,
									},
									{
										icon: FiLinkedin,
										label: "LinkedIn",
										url: linkedIn,
									},
									{
										icon: FiMail,
										label: "Email",
										url: `mailto:${gmail}`,
									},
									{
										icon: FiPhoneCall,
										label: "Call",
										url: `tel:${phone}`,
									},
									{
										icon: SiWhatsapp,
										label: "Call",
										url: whatsapp,
									},
									{
										icon: SiTelegram,
										label: "Call/text",
										url: telegram,
									},
								].map((social, index) => (
									<motion.a
										key={social.label}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										className="text-gray-600 dark:text-gray-400  hover:text-purple-600 transition-colors p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30"
										whileHover={{ y: -3 }}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.4 + index * 0.1 }}
										aria-label={social.label}
									>
										<social.icon className="w-6 h-6" />
									</motion.a>
								))}
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="relative flex justify-center lg:justify-end"
					>
						<motion.div
							className="relative w-72 h-72 sm:w-96 sm:h-96"
							animate={{
								y: [0, -20, 0],
							}}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						>
							<div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-green-600 p-1">
								<div className="absolute inset-1 rounded-full bg-white dark:bg-gray-900 overflow-hidden bg-cover">
									<div>
										<img
											src={image}
											alt="Solaman"
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>

							<motion.div
								className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg text-sm font-medium"
								animate={{
									scale: [1, 1.1, 1],
								}}
								transition={{
									duration: 2.5,
									repeat: Infinity,
									ease: "easeInOut",
									delay: 0.5,
								}}
							>
								⚡ 10+ Projects
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
