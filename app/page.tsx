
import { Clock, MapPin, Smartphone, ArrowRight, Star, Award, Users } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white">
      <header className="sticky top-0 z-50 bg-white backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <Image src="/logofaro.png" alt="faroweb.cl" width={80} height={100} className="h-12 w-auto" />
              </a>
            </div>
            <nav className="hidden md:flex md:space-x-8">
            <a href="#beneficios" className="text-gray-600 hover:text-gray-900">Beneficios</a>
              <a href="#planes" className="text-gray-600 hover:text-gray-900">Planes</a>
              <a href="#portafolio" className="text-gray-600 hover:text-gray-900">Diseños</a>
              
            </nav>
            <a
              href="https://wa.me/569XXXXXXXX"
              className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Hablemos
            </a>
          </div>
        </div>
      </header>

      <main>
        <section
          id="hero"
          className="relative py-10  sm:py-40 bg-cover bg-center text-white"
          style={{ backgroundImage: "url('/Gemini_Generated_Image_hxkz3bhxkz3bhxkz.png')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-left">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Tu Negocio Abierto las 24 Horas en La Serena
              </h1>
              <p className="mt-6 text-lg text-gray-200">
                Páginas web ultra-rápidas, optimizadas para Google y diseñadas para convertir visitantes en clientes. Tu competencia ya está en línea, ¿y tú?
              </p>
              <div className="mt-10">
                <a
                  href="#planes"
                  className="inline-flex items-center justify-center rounded-md bg-green-600 px-8 py-3 text-base font-medium text-white shadow-lg transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Ver Planes <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Beneficios Inmediatos</h2>
              <p className="mt-4 text-lg text-gray-600">Diseñamos para que vendas más y te encuentren fácil.</p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Ventas 24/7</h3>
                <p className="mt-2 text-base text-gray-600">Tu página web trabaja por ti sin descanso, captando clientes incluso mientras duermes.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Posicionamiento Local</h3>
                <p className="mt-2 text-base text-gray-600">Optimizamos tu web para que aparezcas primero cuando busquen tus servicios en La Serena y la IV Región.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Smartphone className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Diseño Móvil Perfecto</h3>
                <p className="mt-2 text-base text-gray-600">La mayoría de tus clientes te visitará desde su celular. Les daremos la mejor experiencia.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="planes" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Planes Flexibles y Transparentes</h2>
              <p className="mt-4 text-lg text-gray-600">Invierte en tu presencia digital hoy. Pago único.</p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900">Presencia</h3>
                <p className="mt-4 text-gray-600">Ideal para empezar a tener visibilidad online.</p>
                <p className="mt-6 text-4xl font-bold text-gray-900">
                  $79.990 <span className="text-xl font-normal text-gray-500 line-through">$160.000</span>
                </p>
                <ul className="mt-8 space-y-4 text-gray-600">
                  <li className="flex items-center"><Star className="h-5 w-5 text-green-500 mr-2"/>Landing Page Profesional</li>
                  <li className="flex items-center"><Star className="h-5 w-5 text-green-500 mr-2"/>Botón de WhatsApp</li>
                  <li className="flex items-center"><Star className="h-5 w-5 text-green-500 mr-2"/>SEO Inicial</li>
                </ul>
                <a href="https://wa.me/569XXXXXXXX" className="mt-10 block w-full rounded-md bg-green-600 px-4 py-2 text-center font-medium text-white hover:bg-green-700">Contactar</a>
              </div>
              <div className="relative rounded-2xl border-2 border-green-600 p-8 shadow-lg">
                <div className="absolute top-0 -translate-y-1/2 rounded-full bg-green-600 px-3 py-1 text-sm font-semibold text-white">Más Vendido</div>
                <h3 className="text-2xl font-semibold text-gray-900">Catálogo</h3>
                <p className="mt-4 text-gray-600">Muestra tus productos y recibe pedidos directos.</p>
                <p className="mt-6 text-4xl font-bold text-gray-900">
                  $149.990 <span className="text-xl font-normal text-gray-500 line-through">$250.000</span>
                </p>
                <ul className="mt-8 space-y-4 text-gray-600">
                  <li className="flex items-center"><Award className="h-5 w-5 text-green-500 mr-2"/>Todo del Plan Presencia</li>
                  <li className="flex items-center"><Award className="h-5 w-5 text-green-500 mr-2"/>Catálogo de Productos</li>
                  <li className="flex items-center"><Award className="h-5 w-5 text-green-500 mr-2"/>Pedidos a WhatsApp</li>
                </ul>
                <a href="https://wa.me/569XXXXXXXX" className="mt-10 block w-full rounded-md bg-green-600 px-4 py-2 text-center font-medium text-white hover:bg-green-700">Contactar</a>
              </div>
              <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900">A Medida</h3>
                <p className="mt-4 text-gray-600">Para necesidades específicas y funcionalidades avanzadas.</p>
                <p className="mt-6 text-4xl font-bold text-gray-900">Cotizar</p>
                <ul className="mt-8 space-y-4 text-gray-600">
                    <li className="flex items-center"><Users className="h-5 w-5 text-green-500 mr-2"/>Integraciones, E-commerce</li>
                    <li className="flex items-center"><Users className="h-5 w-5 text-green-500 mr-2"/>Diseño Exclusivo</li>
                    <li className="flex items-center"><Users className="h-5 w-5 text-green-500 mr-2"/>Soporte Dedicado</li>
                </ul>
                <a href="https://wa.me/569XXXXXXXX" className="mt-10 block w-full rounded-md bg-gray-200 px-4 py-2 text-center font-medium text-gray-800 hover:bg-gray-300">Cotizar Plan</a>
              </div>
            </div>
            <div className="mt-12 rounded-lg bg-gray-50 p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900">¿Necesitas tranquilidad?</h4>
              <p className="mt-2 text-gray-600">Agrega nuestro plan de <span className="font-bold">Mantención Mensual por $20.000</span> y nos encargamos de todo.</p>
            </div>
          </div>
        </section>

         <section id="portafolio" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-12 text-center">Diseños</h2>
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


        <section id="quienes-somos" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Somos de Aquí, Como Tú</h2>
                  <p className="mt-6 text-lg text-gray-600">
                      Somos un equipo de <span className="font-semibold text-gray-900">desarrolladores locales en la IV Región</span>, apasionados por ayudar a los negocios de La Serena y Coquimbo a crecer en el mundo digital. Entendemos el mercado local y hablamos tu mismo idioma.
                  </p>
              </div>
              <div className="aspect-w-3 aspect-h-2 rounded-lg bg-gray-200 shadow-lg">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">[Foto del equipo aquí]</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center flex-wrap">
              <p>&copy; 2026 AgenciaWeb. Todos los derechos reservados.</p>
              <p>La Serena, Chile</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                  <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
