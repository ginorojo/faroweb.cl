import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // Redefinir `sans` en vez de borrar la clase de los divs raiz:
                // arregla home, blog, bodas, la-serena y las pSEO de una sola vez.
                // `serif` NO se toca: es la identidad propia de la pagina de Bodas.
                sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
            },
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
            // Tres sombras para todo el sitio, en vez de 68 declaraciones sueltas
            // mezclando negro generico con halos de color. El halo tintado bajo
            // los botones es de las firmas de plantilla mas reconocibles.
            boxShadow: {
                card: "0 1px 2px rgb(16 24 40 / 0.04), 0 8px 24px -12px rgb(16 24 40 / 0.10)",
                "card-hover": "0 2px 4px rgb(16 24 40 / 0.05), 0 24px 48px -16px rgb(16 24 40 / 0.16)",
                raised: "0 24px 60px -20px rgb(0 0 0 / 0.5)",
            },
            // Tres radios en vez de nueve. Se bajan los valores: el squircle
            // gigante (2rem, 2.5rem, 3rem) es firma de plantilla.
            borderRadius: {
                xl: "0.625rem",
                "2xl": "1rem",
                "3xl": "1.5rem",
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
