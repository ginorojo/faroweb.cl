import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                green: {
                    600: '#16a34a',
                    700: '#15803d',
                }
            },
            keyframes: {
                "hero-in": {
                    from: { opacity: "0", transform: "translateY(30px)" },
                    to: { opacity: "1", transform: "none" },
                },
            },
            animation: {
                // `both` para que arranque en opacity 0 y, pase lo que pase,
                // termine visible. A diferencia de framer-motion, no necesita JS.
                "hero-in": "hero-in 0.7s ease-out both",
            },
        },
    },
    plugins: [],
};
export default config;
