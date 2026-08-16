import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'

export function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen bg-canvas text-text-primary flex items-center justify-center">
        <div className="text-center">
          <p className="text-text-secondary mb-4">产品不存在</p>
          <Link to="/" className="text-accent hover:underline">
            返回首页
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-canvas text-text-primary">
      {/* 简单导航 */}
      <header className="sticky top-0 z-50 border-b border-border bg-canvas/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="text-sm font-medium tracking-tight text-text-primary">
            ← 返回 Vibe Coding
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="mb-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-surface-elevated flex items-center justify-center">
          <span className="text-text-muted">产品截图</span>
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-medium tracking-tight text-text-primary">
              {product.name}
            </h1>
            {product.tag && (
              <span className="mt-2 inline-block text-sm text-accent">{product.tag}</span>
            )}
          </div>
          <div className="text-2xl font-medium text-text-primary">{product.price}</div>
        </div>

        <p className="mt-6 text-base leading-relaxed text-text-secondary">
          {product.longDescription || product.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="inline-flex h-11 items-center justify-center rounded-full bg-cta px-8 text-sm font-medium text-cta-text transition-opacity hover:opacity-90">
            立即购买
          </button>
          <Link
            to="/"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-sm font-medium text-text-primary transition-colors hover:border-accent hover:text-accent"
          >
            返回首页
          </Link>
        </div>
      </main>
    </div>
  )
}
