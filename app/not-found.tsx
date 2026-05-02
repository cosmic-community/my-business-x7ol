import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-warm-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-navy-900 mb-4">Page Not Found</h2>
        <p className="text-navy-700 mb-8">The page you're looking for doesn't exist.</p>
        <Link
          href="/"
          className="inline-block bg-warm-600 hover:bg-warm-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}