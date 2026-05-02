// app/pages/[slug]/page.tsx
import { getPage, getPages, getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const pages = await getPages()
  return pages.map((p) => ({ slug: p.slug }))
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = await getPage(slug)

  if (!page) {
    notFound()
  }

  const pageTitle = getMetafieldValue(page.metadata?.page_title) || page.title
  const content = getMetafieldValue(page.metadata?.content)
  const heroImage = page.metadata?.hero_image

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-navy-900 to-navy-800 text-white py-16 md:py-24 overflow-hidden">
        {heroImage?.imgix_url && (
          <div className="absolute inset-0 opacity-30">
            <img
              src={`${heroImage.imgix_url}?w=1920&h=600&fit=crop&auto=format,compress`}
              alt={pageTitle}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">{pageTitle}</h1>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {content && (
            <div
              className="prose-custom text-navy-700"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </div>
      </section>
    </div>
  )
}