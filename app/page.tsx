import Link from "next/link";
import { Clock, MapPin, Smartphone, CheckCircle, Menu, X } from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen">
            {/* Sticky Navbar */}
            <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0 flex items-center">
                            <span className="text-xl font-bold text-gray-900 tracking-tight">AgenciaWeb</span>
                        </div>
                        <div className="hidden sm:flex sm:space-x-8 items-center">
                            <Link href="#beneficios" className="text-gray-600 hover:text-green-600 transition-colors text-sm font-medium">Benefits</Link>
                            <Link href="#planes" className="text-gray-600 hover:text-green-600 transition-colors text-sm font-medium">Planes</Link>
                            <Link href="#portafolio" className="text-gray-600 hover:text-green-600 transition-colors text-sm font-medium">Portafolio</Link>
                            <a
                                href="https://wa.me/569XXXXXXXX"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all"
                            >
                                Hablemos
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                                <span className="block">Tu Negocio Abierto</span>
                                <span className="block text-green-600 mt-2">las 24 Horas en La Serena</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Diseñamos sitios web veloces, minimalistas y optimizados para convertir visitantes en clientes. No pierdas más ventas por no tener presencia digital.
                            </p>
                            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                                <Link
                                    href="#planes"
                                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 shadow-lg transform active:scale-95 transition-all"
                                >
                                    Ver Planes
                                </Link>
                            </div>
                        </div>
                        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                                <div className="relative block w-full bg-gray-100 rounded-lg overflow-hidden h-[300px] flex items-center justify-center border border-gray-200">
                                    <span className="text-gray-400 font-medium">Macbook Placeholder Image</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beneficios */}
            <section id="beneficios" className="py-16 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">Por qué elegirnos</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Potencia tu presencia local
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                            <div className="relative">
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                                    <Clock className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Ventas 24/7</p>
                                <p className="mt-2 ml-16 text-base text-gray-600">
                                    Tu sitio web trabaja por ti incluso cuando duermes. Captura leads y clientes a cualquier hora del día.
                                </p>
                            </div>

                            <div className="relative">
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                                    <MapPin className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Posicionamiento Local</p>
                                <p className="mt-2 ml-16 text-base text-gray-600">
                                    Optimizamos tu sitio para que aparezca en las búsquedas de Google en La Serena y la IV Región.
                                </p>
                            </div>

                            <div className="relative">
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                                    <Smartphone className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Diseño Móvil</p>
                                <p className="mt-2 ml-16 text-base text-gray-600">
                                    Experiencia perfecta en celulares y tablets. Más del 70% de las visitas vienen de dispositivos móviles.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Precios */}
            <section id="planes" className="py-16 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Planes transparentes
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Sin costos ocultos. Elige lo que tu negocio necesita.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-3 lg:gap-8">
                        {/* Plan Presencia */}
                        <div className="flex flex-col rounded-2xl shadow-sm border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-900">Plan Presencia</h3>
                            <p className="mt-4 text-gray-500 text-sm">Ideal para profesionales y servicios.</p>
                            <div className="mt-6">
                                <span className="text-4xl font-extrabold text-gray-900">$79.990</span>
                                <span className="text-base font-medium text-gray-500 ml-2 line-through">$160.000</span>
                            </div>
                            <ul className="mt-6 space-y-4 flex-1">
                                <li className="flex items-start">
                                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" />
                                    <span className="ml-3 text-sm text-gray-700">Landing Page One-Page</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" />
                                    <span className="ml-3 text-sm text-gray-700">Diseño Responsive</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" />
                                    <span className="ml-3 text-sm text-gray-700">Botón a WhatsApp</span>
                                </li>
                            </ul>
                            <a
                                href="https://wa.me/569XXXXXXXX?text=Hola,%20me%20interesa%20el%20Plan%20Presencia"
                                className="mt-8 block w-full bg-gray-900 border border-transparent rounded-md py-3 text-sm font-semibold text-white text-center hover:bg-gray-800 transition-colors"
                            >
                                Elegir Plan
                            </a>
                        </div>

                        {/* Plan Catálogo */}
                        <div className="relative flex flex-col rounded-2xl shadow-lg border-2 border-green-500 bg-white p-6 transform scale-105 z-10">
                            <div className="absolute top-0 right-0 -mt-3 -mr-3 px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full uppercase shadow-sm">
                                Más Vendido
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Plan Catálogo</h3>
                            <p className="mt-4 text-gray-500 text-sm">Para mostrar tus productos.</p>
                            <div className="mt-6">
                                <span className="text-4xl font-extrabold text-gray-900">$149.990</span>
                                <span className="text-base font-medium text-gray-500 ml-2">Oferta</span>
                            </div>
                            <ul className="mt-6 space-y-4 flex-1">
                                <li className="flex items-start">
                                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" />
                                    <span className="ml-3 text-sm text-gray-700">Todo lo de Presencia</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" />
                                    <span className="ml-3 text-sm text-gray-700">Catálogo de Productos</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" />
                                    <span className="ml-3 text-sm text-gray-700 font-semibold">Pedidos directo a WhatsApp</span>
                                </li>
                            </ul>
                            <a
                                href="https://wa.me/569XXXXXXXX?text=Hola,%20me%20interesa%20el%20Plan%20Catálogo"
                                className="mt-8 block w-full bg-green-600 border border-transparent rounded-md py-3 text-sm font-semibold text-white text-center hover:bg-green-700 transition-colors shadow-md"
                            >
                                Elegir Plan
                            </a>
                        </div>

                        {/* Plan A Medida */}
                        <div className="flex flex-col rounded-2xl shadow-sm border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-900">A Medida</h3>
                            <p className="mt-4 text-gray-500 text-sm">Sistemas complejos y específicos.</p>
                            <div className="mt-6">
                                <span className="text-3xl font-extrabold text-gray-900">Cotizar</span>
                            </div>
                            <ul className="mt-6 space-y-4 flex-1">
                                <li className="flex items-start">
                                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" />
                                    <span className="ml-3 text-sm text-gray-700">Funcionalidades Personalizadas</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" />
                                    <span className="ml-3 text-sm text-gray-700">Integración con Bases de Datos</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" />
                                    <span className="ml-3 text-sm text-gray-700">Soporte Prioritario</span>
                                </li>
                            </ul>
                            <a
                                href="https://wa.me/569XXXXXXXX?text=Hola,%20necesito%20una%20cotización"
                                className="mt-8 block w-full bg-white border border-gray-300 rounded-md py-3 text-sm font-semibold text-gray-700 text-center hover:bg-gray-50 transition-colors"
                            >
                                Contactar
                            </a>
                        </div>
                    </div>

                    <div className="mt-12 bg-gray-50 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between border border-gray-100">
                        <div className="mb-4 md:mb-0">
                            <h4 className="text-lg font-bold text-gray-900">¿Necesitas cambios constantes?</h4>
                            <p className="text-gray-600">Agrega nuestro servicio de <span className="font-semibold text-green-600">Mantención Mensual</span> por solo <span className="font-bold text-gray-900">$20.000</span>.</p>
                        </div>
                        <a href="https://wa.me/569XXXXXXXX?text=Hola,%20me%20interesa%20la%20mantención" className="text-green-600 font-medium hover:text-green-800 underline">Más información &rarr;</a>
                    </div>
                </div>
            </section>

            {/* Portafolio */}
            <section id="portafolio" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-12 text-center">Nuestros Trabajos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Estudio Jurídico", category: "Abogados" },
                            { title: "Kitsune Sushi", category: "Gastronomía" },
                            { title: "Constructora Norte", category: "Construcción" }
                        ].map((item, index) => (
                            <div key={index} className="group relative rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all">
                                <div className="h-64 bg-gray-100 w-full flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-300">
                                    {/* Placeholder generic image */}
                                    <span className="text-lg font-medium">{item.category} Preview</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <h3 className="text-white font-bold text-xl">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quiénes somos */}
            <section className="py-16 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Desarrolladores Locales en la IV Región</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Somos un equipo apasionado por la tecnología con base en La Serena. Entendemos el mercado local y sabemos lo que tu negocio necesita para destacar en la zona.
                            </p>
                            <p className="text-lg text-gray-600">
                                No somos un call center. Hablas directamente con quienes construyen tu sitio.
                            </p>
                        </div>
                        <div className="mt-10 lg:mt-0 relative">
                            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl shadow-lg flex items-center justify-center h-[300px]">
                                <span className="text-gray-500 font-medium">Equipo / Oficina Image</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-xl font-bold text-gray-900">AgenciaWeb</span>
                        <p className="text-gray-500 text-sm mt-1">La Serena, Chile.</p>
                    </div>
                    <div className="flex space-x-6">
                        {/* Social placeholders */}
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Instagram</span>
                            <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Facebook</span>
                            <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
                        </a>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <p className="text-center text-base text-gray-400">
                            &copy; 2026 AgenciaWeb. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
