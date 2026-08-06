export const projectsData = [
	{
		id: 1,
		title: "The Wild Oasis Hotel Dashboard",
		description:
			"Full-stack hotel management dashboard with real-time booking data.",
		detailedDescription:
			"A cabin booking management system built with React and Supabase, handling reservations, guest check-in/out, and cabin availability with role-based access for staff.",
		image: "/images/projects/wild_oasis.jpg",
		techStack: ["React", "React Query", "Supabase", "styled-components"],
		github: "https://github.com/sola-man/the-wild-oasis",
		liveDemo: "https://the-wild-oasis-solaman.vercel.app/",
		features: [
			"User Authentication",
			"Product Search & Filter",
			"Shopping Cart",
			"Stripe Payment Integration",
			"Admin Dashboard",
			"Order Tracking",
		],
	},

	{
		id: 2,
		title: "Registrar Management System",
		description: "Manages student, Instructor and adminstor",
		detailedDescription:
			"A stunning project website built with Django. Features responsive design, students register and see their courses(see their submitted assessment results, see upcoming assessments, download their transcripts), Adminstrrator register for instructors and assign their courses and approve student registration, Instructor see their( corses, students, create assessment, and submit student assessment).",
		image: "/images/projects/registrar-bg.jpg",
		techStack: ["Django", "HTML", "CSS", "sqlite"],
		github: "https://github.com/sola-man/",
		liveDemo: "",
		features: [
			"Responsive Design",
			"Amazing UI",
			"Security and authorization, best flow of data",
		],
	},
	{
		id: 3,
		title: "Portfolio Website",
		description: "Modern portfolio with animations and dark mode",
		detailedDescription:
			"A stunning portfolio website built with React and Framer Motion. Features smooth animations, responsive design, dark mode toggle, and a clean, modern UI that showcases projects effectively.",
		image: "/images/projects/portfolio.jpg",
		techStack: ["React", "Framer Motion", "Tailwind CSS", "React Router"],
		github: "https://github.com/yourusername/portfolio",
		liveDemo: "https://my-portfolio-solaman.vercel.app/",
		features: [
			"Smooth Animations",
			"Dark/Light Mode",
			"Responsive Design",
			"Project Gallery",
			"Contact Form",
			"CV Download",
		],
	},
	{
		id: 4,
		title: "Wild Oasis — Customer Portal (Next.js)",
		description:
			"Customer-facing booking portal with Google auth, self-service reservations, and profile management.",
		detailedDescription:
			"A companion app to the Wild Oasis admin dashboard, built with Next.js and NextAuth.js. Customers sign in with Google, book cabins directly, view and update their own reservations, and manage their profile — extending the original admin-only dashboard into a full guest-facing product.",
		image: "/images/projects/wild-oasis-website.jpg",
		techStack: ["Next.js", "NextAuth.js", "React", "Supabase"],
		github: "https://github.com/sola-man/the-wild-oasis-website",
		liveDemo: "https://the-wild-oasis-website-solaman.vercel.app/",
		features: [
			"Implemented Google OAuth sign-in with NextAuth.js",
			"Built self-service reservation creation and editing for authenticated customers",
			"Added a customer profile page for updating personal details",
		],
	},
	{
		id: 5,
		title: "I Love Movies",
		description: "Movie search app consuming a public API.",
		detailedDescription:
			"A responsive movie discovery app that lets users search, rate, and track watched films using a public movie database API.",
		image: "/images/projects/movie.png",
		techStack: ["React", "REST API"],
		github: "https://github.com/sola-man/I-love-movie",
		liveDemo: "#",
		features: [
			"Debounced search input to reduce API calls",
			"Handled loading/error/empty states",
		],
	},
	{
		id: 6,
		title: "Pizza House",
		description: "Pizza ordering app with cart state and order flow.",
		detailedDescription:
			"An online pizza ordering flow with a persistent cart, live order status tracking, and geolocation-based delivery estimates.",
		image: "/images/projects/pizza-house.png",
		techStack: ["React", "Redux Toolkit"],
		github: "https://github.com/sola-man/pizza-house",
		liveDemo: "#",
		features: [
			"Managed cart state with Redux Toolkit",
			"Built order status polling with async thunks",
		],
	},

	{
		id: 7,
		title: "WorldWise",
		description:
			"Travel app for logging cities and countries you've visited on a map.",
		detailedDescription:
			"A travel-tracking app where users click a live map to log visited cities with notes and dates, backed by Context API for global trip state and nested routing for city detail views.",
		image: "/images/projects/world-wise.jpg",
		techStack: ["React", "React Router", "Context API", "Leaflet"],
		github: "https://github.com/sola-man/world-wise/",
		liveDemo: "#",
		features: [
			"Built an interactive map with Leaflet that updates on click",
			"Managed global trip state with Context API + useReducer",
			"Implemented nested/protected routes for authenticated views",
		],
	},
	{
		id: 8,
		title: "Quiz App",
		description: "Timed multiple-choice quiz with score tracking.",
		detailedDescription:
			"A quiz app driven entirely by a single useReducer state machine — handling question flow, per-question timing, scoring, and end-game summary as distinct reducer actions.",
		image: "/images/projects/react-quiz.jpg",
		techStack: ["React", "useReducer"],
		github: "https://github.com/sola-man/The-React-Quiz",
		liveDemo: "https://vercel.com/solaman/the-react-quiz",
		features: [
			"Modeled the entire app state (loading/error/active/finished) as a state machine",
			"Built a countdown timer that auto-advances questions",
			"Calculated and displayed a final score with a restart option",
			"Dark/Light Mode",
			"selecting questions based on different criteria/easy, medium, hard/ and based on different courses(JavaScript, React, Node.js)",
		],
	},
	{
		id: 9,
		title: "Eat-n-Split",
		description: "Split bills with friends and track who owes who.",
		detailedDescription:
			"A bill-splitting app for tracking shared expenses with friends — add friends, open a shared-bill form, and the balance updates automatically depending on who paid.",
		image: "/images/projects/eat-n-split.png",
		techStack: ["React", "useState"],
		github: "https://github.com/sola-man/eat-n-split",
		liveDemo: "#",
		features: [
			"Built controlled forms for adding friends and splitting bills",
			"Derived running balance per friend from shared state",
			"Practiced lifting state up across sibling components",
		],
	},
	{
		id: 10,
		title: "Bankist",
		description:
			"Simulated online banking app with transfers and account management.",
		detailedDescription:
			"A vanilla JavaScript banking app simulating login, money transfers, loan requests, and account closure, with a real-time logout timer and transaction history using array methods.",
		image: "/images/projects/bankist.png",
		techStack: ["JavaScript (Vanilla)", "DOM Manipulation"],
		github: "#",
		liveDemo: "#",
		features: [
			"Simulated login/transfer/loan flows with pure DOM manipulation",
			"Built an auto-logout timer that resets on activity",
			"Used array methods (reduce, map, filter) to compute balances and summaries",
		],
	},
	{
		id: 11,
		title: "Mapty",
		description:
			"Workout tracker that logs runs and rides on an interactive map.",
		detailedDescription:
			"A geolocation-based workout tracker — click anywhere on the map to log a run or cycling workout, persisted to localStorage using an OOP class-based architecture.",
		image: "/images/projects/mapty.png",
		techStack: ["JavaScript (Vanilla)", "Leaflet", "OOP"],
		github: "#",
		liveDemo: "#",
		features: [
			"Used the Geolocation API to center the map on the user",
			"Modeled Running/Cycling workouts as classes with shared inheritance",
			"Persisted workout history to localStorage across sessions",
		],
	},
	{
		id: 12,
		title: "Forkify",
		description: "Recipe search app with bookmarking and servings calculator.",
		detailedDescription:
			"A recipe discovery app consuming a public recipes API, built with an MVC architecture — search, view detailed recipes, dynamically scale ingredient quantities, and bookmark favorites.",
		image: "/images/projects/forkify.png",
		techStack: ["JavaScript (Vanilla)", "MVC Architecture", "REST API"],
		github: "https://github.com/sola-man/Forkify-app",
		liveDemo: "https://forkify-app-rosy.vercel.app/",
		features: [
			"Structured the app with MVC (Model/View/Controller) separation",
			"Built a live-updating servings calculator that rescales ingredients",
			"Implemented client-side pagination and localStorage bookmarks",
		],
	},
	
	{
		id: 13,
		title: "Online Rental System",
		description:
			"Customers order for rental any material they want online.",
		detailedDescription:
			"An admin or owner ploads the available objects and the customer sees the available objects and so order online .",
		image: "",
		techStack: ["Django", "HTML", "CSS",],
		github: "https://github.com/sola-man/online_rental_app_project_with_django",
		liveDemo: "#",
		features: [
			"Admin/owner upload available materials with their images",
			"Authorization, only admin/owner is permissible to upload",
			"online payment",
			"responsive web design",
		],
	},
];
