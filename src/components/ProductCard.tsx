import { Link } from 'react-router-dom'

interface ProductCardProps {
  product: {
    id: string
    name: string
    description: string
    price: string
    tag?: string
    image?: string
  }
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:border-border-strong hover:shadow-[0_0_0_1px_rgba(94,106,210,0.3),0_0_24px_rgba(94,106,210,0.12)]">
      <div className="mb-5 aspect-[16/10] w-full overflow-hidden rounded-xl bg-surface-elevated">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-sm text-text-muted">产品截图</span>
          </div>
        )}
      </div>

      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-medium text-text-primary">{product.name}</h3>
          {product.tag && (
            <span className="mt-1 inline-block text-xs text-accent">{product.tag}</span>
          )}
        </div>
        <span className="shrink-0 text-sm font-medium text-text-primary">{product.price}</span>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        {product.description}
      </p>

      <Link
        to={`/product/${product.id}`}
        className="mt-5 block w-full rounded-full border border-border bg-transparent py-2 text-center text-sm font-medium text-text-primary transition-all hover:border-accent hover:bg-accent-soft hover:text-accent"
      >
        查看详情
      </Link>
    </div>
  )
}
