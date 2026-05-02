import Link from 'next/link'
import { getServices, getTestimonials } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import Hero from '@/components/Hero'

export default async function HomePage() {
  const services = await getServices()
  const testimonials = await getTestimonials()

  const featuredServices = services.slice(0, 3)
  const featuredTestimonials = testimonials.slice(0, 3)

  return (
    <>
      <Hero />

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our Grant Services
            </h2>
            <p className="text-lg text-navy-700 max-w-2xl mx-auto">
              Comprehensive energy efficiency solutions to make your home warmer, more comfortable, and cost-effective.
            </p>
          </div>

          {featuredServices.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <p className="text-center text-navy-700">No services available yet.</p>
          )}

          {services.length > 3 && (
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-block bg-warm-600 hover:bg-warm-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                View All Services
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-navy-700 max-w-2xl mx-auto">
              Getting your home warmer is simple with our straightforward process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Check Eligibility', desc: 'Quick online check to see if you qualify for grants.' },
              { step: '2', title: 'Free Survey', desc: 'Our experts assess your home and recommend solutions.' },
              { step: '3', title: 'Installation', desc: 'Approved improvements installed at no cost to you.' },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-warm-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                <p className="text-navy-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {featuredTestimonials.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg text-navy-700 max-w-2xl mx-auto">
                Real stories from homeowners who've benefited from the Warm Homes Grant.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>

            {testimonials.length > 3 && (
              <div className="text-center mt-12">
                <Link
                  href="/testimonials"
                  className="inline-block bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  Read More Stories
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-warm-600 to-warm-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Warm Up Your Home?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Check your eligibility today and start saving on your energy bills.
          </p>
          <Link
            href="/services"
            className="inline-block bg-white text-warm-700 hover:bg-warm-50 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </>
  )
}