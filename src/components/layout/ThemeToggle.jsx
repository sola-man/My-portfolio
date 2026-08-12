/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = () => {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const saved = localStorage.getItem("theme");
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;

		let shouldBeDark = false;
		if (saved === "dark") shouldBeDark = true;
		else if (saved === "light") shouldBeDark = false;
		else if (prefersDark) shouldBeDark = true;

		setIsDark(shouldBeDark);
		applyTheme(shouldBeDark);
	}, []);

	const applyTheme = (dark) => {
		const html = document.documentElement;
		if (dark) {
			html.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			html.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	};

	const toggleTheme = () => {
		const newIsDark = !isDark;
		setIsDark(newIsDark);
		applyTheme(newIsDark);
	};

	return (
		<button
			onClick={toggleTheme}
			className="p-2 rounded-full transition-all duration-300 text-xl cursor-pointer"
			style={{
				backgroundColor: "var(--color-border)",
				color: "var(--color-text-heading)",
			}}
			aria-label="Toggle theme"
		>
			{isDark ? (
				<FiSun className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
			) : (
				<FiMoon className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
			)}
		</button>
	);
};

export default ThemeToggle;
