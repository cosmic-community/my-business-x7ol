import { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const customerName = getMetafieldValue(testimonial.metadata?.customer_name) || testimonial.title
  const location = getMetafieldValue(testimonial.metadata?.location)
  const quote = getMetafieldValue(testimonial.metadata?.quote)
  const ratingValue = testimonial.metadata?.rating
  const customerPhoto = testimonial.metadata?.customer_photo

  let rating = 0
  if (typeof ratingValue === 'number') {
    rating = ratingValue
  } else if (typeof ratingValue === 'string') {
    rating = parseInt(ratingValue, 10) || 0
  } else if (ratingValue && typeof ratingValue === 'object' && 'value' in ratingValue) {
    rating = parseInt(String(ratingValue.value), 10) || 0
  } else if (ratingValue && typeof ratingValue === 'object' && 'key' in ratingValue) {
    rating = parseInt(String(ratingValue.key), 10) || 0
  }

  rating = Math.max(0, Math.min(5, rating))

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-warm-100 flex flex-col h-full">
      {rating > 0 && (
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={i < rating ? 'text-warm-500' : 'text-warm-100'}
              aria-hidden="true"
            >
              ★
            </span>
          ))}
        </div>
      )}

      {quote && (
        <blockquote className="text-navy-700 italic mb-6 flex-1 text-lg leading-relaxed">
          "{quote}"
        </blockquote>
      )}

      <div className="flex items-center gap-4 mt-auto">
        {customerPhoto?.imgix_url ? (
          <img
            src={`${customerPhoto.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={customerName}
            className="w-14 h-14 rounded-full object-cover"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-warm-100 flex items-center justify-center text-warm-600 font-bold text-lg">
            {customerName.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <div className="font-bold text-navy-900">{customerName}</div>
          {location && (
            <div className="text-sm text-navy-500">{location}</div>
          )}
        </div>
      </div>
    </div>
  )
}