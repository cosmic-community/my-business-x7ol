import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🏠</span>
              <span className="font-bold text-xl">Warm Homes Grant</span>
            </div>
            <p className="text-navy-100 text-sm">
              Helping homeowners access energy efficiency grants for warmer, more affordable homes.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-navy-100 hover:text-warm-400 transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-navy-100 hover:text-warm-400 transition-colors">Services</Link></li>
              <li><Link href="/testimonials" className="text-navy-100 hover:text-warm-400 transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-navy-100">
              <li>📞 0800 123 4567</li>
              <li>✉️ info@warmhomesgrant.com</li>
              <li>🕐 Mon-Fri: 9am - 6pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 pt-8 text-center text-sm text-navy-100">
          © {new Date().getFullYear()} Warm Homes Grant. All rights reserved.
        </div>
      </div>
    </footer>
  )
}