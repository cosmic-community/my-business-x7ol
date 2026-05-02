import Link from 'next/link'
import { Service } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ServiceCard({ service }: { service: Service }) {
  const name = getMetafieldValue(service.metadata?.name) || service.title
  const shortDesc = getMetafieldValue(service.metadata?.short_description)
  const icon = getMetafieldValue(service.metadata?.icon)
  const featuredImage = service.metadata?.featured_image

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-warm-100 flex flex-col"
    >
      {featuredImage?.imgix_url ? (
        <div className="aspect-video overflow-hidden bg-warm-100">
          <img
            src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="aspect-video bg-gradient-to-br from-warm-400 to-warm-600 flex items-center justify-center">
          <span className="text-6xl">{icon || '🏠'}</span>
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        {icon && !featuredImage && (
          <div className="text-3xl mb-3">{icon}</div>
        )}
        <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-warm-600 transition-colors">
          {name}
        </h3>
        {shortDesc && (
          <p className="text-navy-700 mb-4 flex-1">{shortDesc}</p>
        )}
        <div className="text-warm-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
          Learn more <span>→</span>
        </div>
      </div>
    </Link>
  )
}