/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { handleDownloadCV } from "../../utils/helpers";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		setIsOpen(false);
	}, [location]);

	const navItems = [
		{ name: "Home", href: "/" },
		{ name: "Projects", href: "/projects" },
		{ name: "About", href: "/about" },
		{ name: "Contact", href: "/contact" },
	];

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled ? "backdrop-blur-lg shadow-sm" : ""
			}`}
			style={{
				backgroundColor: scrolled ? "var(--color-bg)" : "transparent",
				borderBottom: scrolled ? "1px solid var(--color-border)" : "none",
			}}
		>
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-mono">
				<div className="flex items-center justify-between h-16">
					<Link to="/" className="text-2xl font-bold flex gap-3">
						<img
							src="/dev-icon.png"
							alt="Logo"
							className="w-15 h-15 rounded-full"
						/>
						<TypeAnimation
							sequence={[
								"WelCome to this App.",
								3000,
								"Lets connect and cooperate",
								3000,
							]}
							wrapper="span"
							speed={30}
							repeat={Infinity}
							className="bg-linear-to-r from-amber-500 to-purple-600 bg-clip-text text-transparent py-3"
						/>
					</Link>

					<div className="hidden md:flex items-center gap-8">
						{navItems.map((item) => (
							<Link
								key={item.name}
								to={item.href}
								className="transition-colors"
								style={{
									color:
										location.pathname === item.href
											? "var(--color-accent)"
											: "var(--color-text)",
								}}
								onMouseEnter={(e) =>
									(e.target.style.color = "var(--color-accent)")
								}
								onMouseLeave={(e) => {
									if (location.pathname !== item.href) {
										e.target.style.color = "var(--color-text)";
									}
								}}
							>
								{item.name}
							</Link>
						))}
						<button
							onClick={handleDownloadCV}
							className="inline-flex items-center gap-2 px-4 py-1.5 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
							style={{
								background:
									"linear-gradient(135deg, var(--color-accent), var(--color-accent-2))",
								color: "white",
								boxShadow: "0 4px 15px rgba(170, 59, 255, 0.3)",
							}}
						>
							<FiDownload size={16} />
							<span>Resume</span>
						</button>
						<ThemeToggle />
					</div>

					<div className="flex items-center gap-4 md:hidden">
						<ThemeToggle />
						<button
							className="p-2 rounded-lg transition-colors"
							style={{ color: "var(--color-text)" }}
							onClick={() => setIsOpen(!isOpen)}
						>
							{isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
						</button>
					</div>
				</div>

				{isOpen && (
					<div
						className="md:hidden py-4"
						style={{ borderTop: "1px solid var(--color-border)" }}
					>
						<div className="flex flex-col gap-4">
							{navItems.map((item) => (
								<Link
									key={item.name}
									to={item.href}
									className="px-4 py-2 rounded-lg transition-colors"
									style={{
										color:
											location.pathname === item.href
												? "var(--color-accent)"
												: "var(--color-text)",
									}}
									onClick={() => setIsOpen(false)}
								>
									{item.name}
								</Link>
							))}
							<button
								onClick={handleDownloadCV}
								className="btn-primary mx-4 inline-flex items-center justify-center gap-2 rounded-3xl p-2"
								style={{
									background:
										"linear-gradient(135deg, var(--color-accent), var(--color-accent-2))",
									color: "white",
									boxShadow: "0 4px 15px rgba(170, 59, 255, 0.3)",
								}}
							>
								<FiDownload size={16} /> Download CV
							</button>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
