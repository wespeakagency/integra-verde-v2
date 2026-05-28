import Link from "next/link"

export default function SimpleHeader() {
  return (
    <header className="w-full py-4 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-green-600">
            Integra Verde
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-green-600">
              Inicio
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-600">
              Servicios
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-600">
              Proyectos
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-600">
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
