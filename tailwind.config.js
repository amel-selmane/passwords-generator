module.exports = {
	content: ["./*"],
	theme: {
		fontFamily: {
			primary: "'JetBrains Mono', monospace",
		},
		extend: {
			colors: {
				"custom-grey": "#817D92",
				"dark-grey": "#24232C",
				"almost-white": "#E6E5EA",
				"neon-green": "#A4FFAF",
				"very-dark-grey": "#18171F",
				"weak-red": "#F64A4A",
				"weak-orange": "#FB7C58",
				"medium-yellow": "#F8CD65",
			},
			content: {
				checkbox:
					"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Crect width='20' height='20' fill='%23A4FFAF'/%3E%3Cpath d='M4 10.6066L7.39341 14L15.3934 6' stroke='%2318171F' stroke-width='3'/%3E%3C/svg%3E\")",
			},
			maxWidth: {
				540: "540px",
			},
			screens: {
				// => @media (min-width: 580px) { ... }
				mbl: "580px",
			},
			transitionProperty: {
				height: "height",
				spacing: "margin, padding",
			},
		},
		plugins: [],
	},
};
