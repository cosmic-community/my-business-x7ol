import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-warm-600 via-warm-500 to-warm-400 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🌡️ Government-Backed Energy Grants
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Warmer Homes, Lower Bills
          </h1>
          <p className="text-lg md:text-2xl mb-8 opacity-95 leading-relaxed">
            Access energy efficiency grants to upgrade your home's insulation, heating, and more — at no cost to you.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="bg-white text-warm-700 hover:bg-warm-50 font-bold px-8 py-4 rounded-lg transition-colors text-lg shadow-lg"
            >
              Check Eligibility
            </Link>
            <Link
              href="/testimonials"
              className="bg-navy-900/30 backdrop-blur-sm hover:bg-navy-900/50 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg border-2 border-white/30"
            >
              Read Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}