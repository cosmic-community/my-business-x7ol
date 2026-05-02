// app/services/[slug]/page.tsx
import { getService, getServices, getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  const services = await getServices()
  return services.map((s) => ({ slug: s.slug }))
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }

  const name = getMetafieldValue(service.metadata?.name) || service.title
  const shortDesc = getMetafieldValue(service.metadata?.short_description)
  const description = getMetafieldValue(service.metadata?.description)
  const benefits = getMetafieldValue(service.metadata?.benefits)
  const eligibility = getMetafieldValue(service.metadata?.eligibility)
  const icon = getMetafieldValue(service.metadata?.icon)
  const featuredImage = service.metadata?.featured_image

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 to-navy-800 text-white py-16 md:py-24 overflow-hidden">
        {featuredImage?.imgix_url && (
          <div className="absolute inset-0 opacity-20">
            <img
              src={`${featuredImage.imgix_url}?w=1920&h=600&fit=crop&auto=format,compress`}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="container mx-auto px-4 relative z-10">
          {icon && <div className="text-6xl mb-4">{icon}</div>}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{name}</h1>
          {shortDesc && (
            <p className="text-lg md:text-xl opacity-90 max-w-2xl">{shortDesc}</p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {featuredImage?.imgix_url && (
            <img
              src={`${featuredImage.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
              alt={name}
              className="w-full h-64 md:h-96 object-cover rounded-2xl mb-12 shadow-lg"
            />
          )}

          {description && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">About This Service</h2>
              <div
                className="prose-custom text-navy-700"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            {benefits && (
              <div className="bg-warm-50 p-8 rounded-2xl border-2 border-warm-100">
                <h3 className="text-2xl font-bold text-warm-700 mb-4 flex items-center gap-2">
                  <span>✨</span> Benefits
                </h3>
                <div
                  className="prose-custom text-navy-700"
                  dangerouslySetInnerHTML={{ __html: benefits }}
                />
              </div>
            )}

            {eligibility && (
              <div className="bg-navy-50 p-8 rounded-2xl border-2 border-navy-100">
                <h3 className="text-2xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                  <span>✅</span> Eligibility
                </h3>
                <div
                  className="prose-custom text-navy-700"
                  dangerouslySetInnerHTML={{ __html: eligibility }}
                />
              </div>
            )}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-block bg-warm-600 hover:bg-warm-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors mr-4"
            >
              ← All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}