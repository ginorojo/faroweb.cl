import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <h2 className="text-4xl font-bold mb-4">404 - No Encontrado</h2>
      <p className="text-xl mb-8">No pudimos encontrar el recurso que buscas.</p>
      <Link href="/" className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors">
        Volver al Inicio
      </Link>
    </div>
  )
}
