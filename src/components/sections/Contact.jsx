import { motion } from "framer-motion";
import { useState } from "react";
import { FaNoteSticky } from "react-icons/fa6";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { developerData } from "../../data/developerData";

const initialState = {
	name: "",
	email: "",
	message: "",
};

const Contact = () => {
	const [formData, setFormData] = useState(initialState);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const { gMail, location, phone } = developerData;
	const { gmail, instituteEmail } = gMail;
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitted(true);
		setTimeout(() => setIsSubmitted(false), 3000);
		setFormData(initialState);
	};

	return (
		<section className="py-20 bg-gray-50 dark:bg-gray-900/50 font-mono">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						Get In{" "}
						<span className="bg-linear-to-r from-red-100 to-purple-200 bg-clip-text text-transparent">
							Touch
						</span>
					</h2>
					<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Have a question or want to work together? Let's connect!
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="space-y-6"
					>
						<div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
							<h3 className="text-2xl font-bold mb-6">Contact Information</h3>

							<div className="space-y-4">
								<div className="flex items-start gap-4">
									<div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
										<FiMail className="text-blue-500 text-xl" />
									</div>
									<div>
										<h4 className="font-semibold">Email</h4>
										<p className="text-gray-600 dark:text-gray-400">
											<span><FaNoteSticky/>&#10003; {gmail}</span>
											<br />
											&#10003; {instituteEmail}
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
										<FiMapPin className="text-blue-500 text-xl" />
									</div>
									<div>
										<h4 className="font-semibold">Location</h4>
										<p className="text-gray-600 dark:text-gray-400">
											{location}
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
										<FiPhone className="text-blue-500 text-xl" />
									</div>
									<div>
										<h4 className="font-semibold">Phone</h4>
										<p className="text-gray-600 dark:text-gray-400">{phone}</p>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
							<h3 className="text-2xl font-bold mb-6">Send a Message</h3>

							<form onSubmit={handleSubmit} className="space-y-4">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium mb-2"
									>
										Your Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
										placeholder="John Doe"
									/>
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium mb-2"
									>
										Email Address
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
										placeholder="john@example.com"
									/>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium mb-2"
									>
										Message
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows="5"
										className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
										placeholder="Tell me about your project..."
									/>
								</div>

								<button
									type="submit"
									className="w-full px-6 py-3 bg-linear-to-r from-green-100 to-purple-300 text-blue-700 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
								>
									<FiSend /> Send Message
								</button>

								{isSubmitted && (
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										className="p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-center"
									>
										&#10003; Message sent successfully!
									</motion.div>
								)}
							</form>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
