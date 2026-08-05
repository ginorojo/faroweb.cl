import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 md:py-16 border-t border-gray-900">
      <div className="container mx-auto px-4 text-center flex flex-col items-center justify-center gap-5">
        <span className="text-h3 text-white">
          FARO<span className="text-emerald-500">WEB</span>
        </span>
        <p className="text-body-sm text-gray-500">
          Desarrollo web estratégico en La Serena, Chile.
        </p>
        <p className="text-body-sm text-gray-500">soporte@faroweb.cl</p>
        <p className="text-body-sm text-gray-500">+56971874099</p>
        <p className="flex items-center justify-center text-caption">
          &copy; 2026 Faroweb.cl. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
