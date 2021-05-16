module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	mode: "jit",
	theme: {
        extend: {
            backgroundColor: ['active'],
        },
	},
	variants: {
		extend: {},
	},
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
};
