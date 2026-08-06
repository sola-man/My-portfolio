import { FiGithub, FiLinkedin, FiMail, FiPhoneCall } from "react-icons/fi";
import { SiTelegram, SiWhatsapp } from "react-icons/si";
import { Link } from "react-router-dom";
import { developerData } from "../../data/developerData";

const Footer = () => {
	const {github, linkedIn, gMail, phone, whatsapp, telegram, fullName} = developerData;
	const {gmail}  = gMail;
	return (
		<footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 font-mono">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-2xl font-bold mb-4">
							<span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
								Portfolio
							</span>
						</h3>
						<p className="text-gray-600 dark:text-gray-400 text-sm">
							Building digital experiences with passion and precision.
						</p>
					</div>

					<div>
						<h4 className="font-semibold mb-4">Quick Links</h4>
						<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
							<li>
								<Link to="/" className="hover:text-blue-500 transition-colors">
									Home
								</Link>
							</li>
							<li>
								<Link
									to="/projects"
									className="hover:text-blue-500 transition-colors"
								>
									Projects
								</Link>
							</li>
							<li>
								<Link
									to="/about"
									className="hover:text-blue-500 transition-colors"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									to="/contact"
									className="hover:text-blue-500 transition-colors"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold mb-4">Technologies</h4>
						<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
							<li>React</li>
							<li>Tailwind CSS</li>
							<li>Framer Motion</li>
							<li>React Router</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold mb-4">Connect</h4>
						<div className="flex gap-4">
							<a
								href={github}
								className="text-gray-600 dark:text-gray-400  hover:text-purple-600 transition-colors"
							>
								<FiGithub className="w-5 h-5" />
							</a>
							<a
								href={linkedIn}
								className="text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors"
							>
								<FiLinkedin className="w-5 h-5" />
							</a>
							
							<a
								href={`mailto:${gmail}`}
								className="text-gray-600 dark:text-gray-400  hover:text-purple-600 transition-colors"
							>
								<FiMail className="w-5 h-5" />
							</a>
							
							<a
								href={telegram}
								className="text-gray-600 dark:text-gray-400  hover:text-purple-600 transition-colors"
							>
								<SiTelegram className="w-5 h-5" />
							</a>
							<a
								href={whatsapp}
								className="text-gray-600 dark:text-gray-400  hover:text-purple-600 transition-colors"
							>
								<SiWhatsapp className="w-5 h-5" />
							</a>
							<a
								href={`tel:${phone}`}
								className="text-gray-600 dark:text-gray-400  hover:text-purple-600 transition-colors"
							>
								<FiPhoneCall className="w-5 h-5" />
							</a>
							
						</div>
					</div>
				</div>

				<div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
					© {new Date().getFullYear()} {fullName}. All rights reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
