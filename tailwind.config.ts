import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
    future: {
        // Envuelve los `hover:` en @media (hover: hover). En tactil el hover se
        // dispara al tocar y queda pegado hasta que tocas otra cosa.
        hoverOnlyWhenSupported: true,
    },
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
            // Las curvas nativas de CSS son demasiado debiles para sentirse
            // intencionales. `ease-in` no se usa nunca en UI: retrasa el arranque
            // justo en el instante que el usuario esta mirando.
            transitionTimingFunction: {
                out: "cubic-bezier(0.23, 1, 0.32, 1)",
                "in-out": "cubic-bezier(0.77, 0, 0.175, 1)",
            },
            // Tokens con rol, no numeros. El interlineado, el tracking y el peso
            // van horneados aca, asi desaparecen del JSX las 40 declaraciones
            // sueltas de tracking/leading. El clamp() elimina las dos
            // convenciones de breakpoint mezcladas (sm: vs md:): no hay `md:`
            // que olvidar porque no hay `md:`.
            fontSize: {
                eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.12em", fontWeight: "600" }],
                caption: ["0.8125rem", { lineHeight: "1.5", fontWeight: "400" }],
                "body-sm": ["0.9375rem", { lineHeight: "1.6", fontWeight: "400" }],
                body: ["1.0625rem", { lineHeight: "1.65", fontWeight: "400" }],
                lead: ["1.1875rem", { lineHeight: "1.55", letterSpacing: "-0.005em", fontWeight: "400" }],
                h4: ["clamp(1.0625rem, 0.98rem + 0.4vw, 1.25rem)", { lineHeight: "1.3", letterSpacing: "-0.005em", fontWeight: "600" }],
                h3: ["clamp(1.375rem, 1.2rem + 0.9vw, 1.875rem)", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
                h2: ["clamp(1.875rem, 1.5rem + 1.9vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.015em", fontWeight: "700" }],
                h1: ["clamp(2.25rem, 1.6rem + 3.2vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" }],
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
                reveal: {
                    from: { opacity: "0", transform: "translateY(16px)" },
                    to: { opacity: "1", transform: "none" },
                },
            },
            animation: {
                // `both` para que arranque en opacity 0 y, pase lo que pase,
                // termine visible. A diferencia de framer-motion, no necesita JS.
                "hero-in": "hero-in 0.7s cubic-bezier(0.23,1,0.32,1) both",
                reveal: "reveal 0.5s cubic-bezier(0.23,1,0.32,1) both",
            },
        },
    },
    plugins: [],
};
export default config;
