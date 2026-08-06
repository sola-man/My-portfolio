import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Projects from "./pages/Projects";

function App() {
	useEffect(() => {
		const saved = localStorage.getItem("theme");
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;
		const isDark = saved === "dark" || (!saved && prefersDark);

		if (isDark) {
			document.documentElement.classList.add("dark");
			document.body.style.backgroundColor = "#020617";
		} else {
			document.documentElement.classList.remove("dark");
			document.body.style.backgroundColor = "#ffffff";
		}
	}, []);

	return (
		<Router>
			<div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
				<Header />
				<main className="grow">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/project/:id" element={<ProjectDetail />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
