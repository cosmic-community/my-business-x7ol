import { getTestimonials } from '@/lib/cosmic'
import TestimonialCard from '@/components/TestimonialCard'

export const metadata = {
  title: 'Customer Testimonials | Warm Homes Grant',
  description: 'Real stories from homeowners who benefited from our grants.',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-warm-600 to-warm-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Stories</h1>
          <p className="text-lg md:text-xl opacity-95 max-w-2xl mx-auto">
            See how the Warm Homes Grant has transformed homes across the country.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-warm-50">
        <div className="container mx-auto px-4">
          {testimonials.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          ) : (
            <p className="text-center text-navy-700 text-lg">No testimonials yet.</p>
          )}
        </div>
      </section>
    </div>
  )
}