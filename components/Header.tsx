import Link from 'next/link'
import { getPages } from '@/lib/cosmic'

export default async function Header() {
  const pages = await getPages()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl">🏠</span>
            <span className="font-bold text-lg md:text-xl text-navy-900">
              Warm Homes Grant
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-navy-700 hover:text-warm-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-navy-700 hover:text-warm-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="/testimonials" className="text-navy-700 hover:text-warm-600 font-medium transition-colors">
              Testimonials
            </Link>
            {pages.slice(0, 2).map((page) => (
              <Link
                key={page.id}
                href={`/pages/${page.slug}`}
                className="text-navy-700 hover:text-warm-600 font-medium transition-colors"
              >
                {page.title}
              </Link>
            ))}
          </nav>

          <Link
            href="/services"
            className="bg-warm-600 hover:bg-warm-700 text-white font-semibold px-4 md:px-6 py-2 rounded-lg transition-colors text-sm md:text-base"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  )
}