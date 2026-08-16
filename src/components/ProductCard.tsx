interface ProductCardProps {
  name: string
  description: string
  price: string
  tag?: string
}

export function ProductCard({ name, description, price, tag }: ProductCardProps) {
  return (
    <div className="group relative rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:border-border-strong hover:shadow-[0_0_0_1px_rgba(94,106,210,0.3),0_0_24px_rgba(94,106,210,0.12)]">
      {/* 产品截图占位 */}
      <div className="mb-5 aspect-[16/10] w-full overflow-hidden rounded-xl bg-surface-elevated flex items-center justify-center">
        <span className="text-sm text-text-muted">产品截图</span>
      </div>

      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-medium text-text-primary">{name}</h3>
          {tag && (
            <span className="mt-1 inline-block text-xs text-accent">{tag}</span>
          )}
        </div>
        <span className="shrink-0 text-sm font-medium text-text-primary">{price}</span>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        {description}
      </p>

      <button className="mt-5 w-full rounded-full border border-border bg-transparent py-2 text-sm font-medium text-text-primary transition-all hover:border-accent hover:bg-accent-soft hover:text-accent">
        查看详情
      </button>
    </div>
  )
}
