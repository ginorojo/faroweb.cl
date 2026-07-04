import SharedHeader from "@/components/SharedHeader";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog de Diseño Web y Tecnología | Faroweb",
  description: "Aprende sobre SEO, diseño web, desarrollo de tiendas online y tecnología para Pymes en Chile.",
};

export default function BlogIndex() {
  return (
    <div className="bg-white selection:bg-green-100 selection:text-green-900 font-sans min-h-screen flex flex-col">
      <SharedHeader />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-700 text-xs font-bold uppercase tracking-widest mb-6">
            Blog y Recursos
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Todo sobre Diseño Web y SEO
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Descubre guías, consejos y artículos para potenciar la presencia digital de tu negocio.
          </p>
          
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Estamos preparando nuestros primeros artículos...</h2>
            <p className="text-gray-500">
              Próximamente publicaremos guías completas sobre "Cuánto cuesta una página web en Chile", "Tutoriales de SEO Local" y mucho más.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
