import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { developerData } from "../../data/developerData";

const initialState = {
	name: "",
	email: "",
	subject: "",
	message: "",
};

const Contact = () => {
	const [formData, setFormData] = useState(initialState);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const { gMail, phone,location } = developerData;
		const { gmail, instituteEmail } = gMail;

	const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
	const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
	const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
		if (error) setError("");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setError("");

		if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
			setError(
				"Email service is not configured. Please check environment variables.",
			);
			setIsLoading(false);
			return;
		}

		try {
			const result = await emailjs.send(
				SERVICE_ID,
				TEMPLATE_ID,
				{
					name: formData.name,
					email: formData.email,
					title: formData.subject || "Portfolio Contact",
					message: formData.message,
				},
				PUBLIC_KEY,
			);

			console.log("✅ Email sent successfully!", result.text);
			setIsSubmitted(true);
			setFormData(initialState);

			setTimeout(() => setIsSubmitted(false), 5000);
		} catch (error) {
			console.error("❌ Failed to send email:", error);
			setError(error.text || "Failed to send message. Please try again.");
		} finally {
			setIsLoading(false);
		}
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
						<span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
							Touch
						</span>
					</h2>
					<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Have a question or want to work together? Let's connect!
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Contact Information */}
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
											<span>&#10003;{gmail}</span><br/><span>&#10003;{instituteEmail}</span>
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
										<FiMapPin className="text-blue-500 text-xl" />
									</div>
									<div>
										<h4 className="font-semibold">Location:</h4>
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
										<h4 className="font-semibold">Phone:</h4>
										<p className="text-gray-600 dark:text-gray-400">
											{phone}
										</p>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Contact Form */}
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
										Your Name <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										disabled={isLoading}
										className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:opacity-50"
										placeholder="John Doe"
									/>
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium mb-2"
									>
										Email Address <span className="text-red-500">*</span>
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										disabled={isLoading}
										className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:opacity-50"
										placeholder="john@example.com"
									/>
								</div>

								<div>
									<label
										htmlFor="subject"
										className="block text-sm font-medium mb-2"
									>
										Subject <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										id="subject"
										name="subject"
										value={formData.subject}
										onChange={handleChange}
										required
										disabled={isLoading}
										className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:opacity-50"
									/>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium mb-2"
									>
										Message <span className="text-red-500">*</span>
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows="5"
										disabled={isLoading}
										className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none disabled:opacity-50"
										placeholder="Tell me about your project..."
									/>
								</div>

								<button
									type="submit"
									disabled={isLoading}
									className="w-full px-6 py-3 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
								>
									{isLoading ? (
										<>
											<span className="animate-spin">⏳</span> Sending...
										</>
									) : (
										<>
											<FiSend /> Send Message
										</>
									)}
								</button>

								{isSubmitted && (
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										className="p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-center"
									>
										✅ Message sent successfully! I'll get back to you soon.
									</motion.div>
								)}

								{error && (
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										className="p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg text-center"
									>
										❌ {error}
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
