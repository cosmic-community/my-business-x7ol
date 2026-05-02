import { getServices } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'

export const metadata = {
  title: 'Our Services | Warm Homes Grant',
  description: 'Explore our range of energy efficiency services and grants.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Discover our comprehensive range of grants and energy efficiency solutions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-warm-50">
        <div className="container mx-auto px-4">
          {services.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <p className="text-center text-navy-700 text-lg">No services available yet.</p>
          )}
        </div>
      </section>
    </div>
  )
}