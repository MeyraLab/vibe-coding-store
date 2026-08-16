import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'

export function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const product = products.find((p) => p.id === id)
  const [showBuyTip, setShowBuyTip] = useState(false)

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
        <div className="mb-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-surface-elevated">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-text-muted">产品截图</span>
            </div>
          )}
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

        <div className="mt-10 flex flex-col gap-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            {product.buyUrl ? (
              <a
                href={product.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full bg-cta px-8 text-sm font-medium text-cta-text transition-opacity hover:opacity-90"
              >
                立即购买
              </a>
            ) : (
              <button
                onClick={() => setShowBuyTip(true)}
                className="inline-flex h-11 items-center justify-center rounded-full bg-cta px-8 text-sm font-medium text-cta-text transition-opacity hover:opacity-90"
              >
                立即购买
              </button>
            )}

            <Link
              to="/"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-sm font-medium text-text-primary transition-colors hover:border-accent hover:text-accent"
            >
              返回首页
            </Link>
          </div>

          {showBuyTip && (
            <div className="rounded-xl border border-accent/30 bg-accent-soft p-5 text-sm">
              <p className="font-medium text-text-primary mb-2">添加微信购买</p>
              <p className="text-text-secondary mb-3">
                微信号：<span className="text-accent font-medium select-all">{product.wechat || '请联系作者'}</span>
              </p>
              <p className="text-text-muted text-xs leading-relaxed">
                添加后请备注产品名称「{product.name}」，我会尽快发送下载链接。支持微信支付 / 支付宝。
              </p>
              <button
                onClick={() => setShowBuyTip(false)}
                className="mt-4 text-xs text-text-secondary hover:text-text-primary transition-colors"
              >
                关闭
              </button>
            </div>
          )}
        </div>

        {/* 购买说明 */}
        <div className="mt-8 rounded-xl border border-border bg-surface p-5 text-sm text-text-secondary">
          <p className="font-medium text-text-primary mb-2">购买方式</p>
          <ul className="space-y-1.5 list-disc list-inside">
            <li>点击「立即购买」后添加微信，备注产品名称</li>
            <li>支付成功后我会发送下载链接到你的邮箱或微信</li>
            <li>支持微信支付 / 支付宝（通过微信沟通）</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
