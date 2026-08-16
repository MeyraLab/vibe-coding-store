import './index.css'
import { ProductCard } from './components/ProductCard'
import { products } from './data/products'

function App() {
  return (
    <div className="min-h-screen bg-canvas text-text-primary">
      {/* 导航 */}
      <header className="sticky top-0 z-50 border-b border-border bg-canvas/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="/" className="text-sm font-medium tracking-tight text-text-primary">
            Vibe Coding
          </a>
          <nav className="flex items-center gap-6 text-sm text-text-secondary">
            <a href="#products" className="hover:text-text-primary transition-colors">
              产品
            </a>
            <a href="#about" className="hover:text-text-primary transition-colors">
              关于
            </a>
            <a href="#updates" className="hover:text-text-primary transition-colors">
              更新
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-20 pb-24 sm:px-6 sm:pt-28 sm:pb-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-medium tracking-tight text-text-primary sm:text-5xl sm:leading-[1.15]">
            让写代码也有 vibe
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-text-secondary">
            我做的工具，专注于让编程过程更顺畅、更有感觉。
            先从中文市场开始，一步一步打磨真正好用的 vibe coding 产品。
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="inline-flex h-10 items-center justify-center rounded-full bg-cta px-6 text-sm font-medium text-cta-text transition-opacity hover:opacity-90"
            >
              查看工具
            </a>
            <a
              href="#about"
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              了解我的想法 →
            </a>
          </div>
        </div>
      </section>

      {/* 产品列表 */}
      <section id="products" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 sm:pb-32">
        <div className="mb-10">
          <h2 className="text-2xl font-medium tracking-tight text-text-primary sm:text-3xl">
            我的工具
          </h2>
          <p className="mt-2 text-text-secondary">
            专注提升编程体验的实用工具，持续更新中。
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 关于我 */}
      <section id="about" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 sm:pb-32">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-medium tracking-tight text-text-primary sm:text-3xl">
            关于我
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary">
            <p>
              我是一名独立开发者，长期关注「写代码时的感觉」。
              很多工具功能很强，但用起来总觉得别扭——提示词生硬、流程割裂、界面没有温度。
            </p>
            <p>
              所以我开始做自己的 vibe coding 工具：
              从真实使用场景出发，把「顺畅」和「有感觉」放在第一位。
              先服务中文开发者，再逐步扩展。
            </p>
            <p>
              这里卖的不是大而全的平台，而是小而准的工具。
              每一个产品都会持续打磨，欢迎反馈。
            </p>
          </div>
        </div>
      </section>

      {/* 更新日志 */}
      <section id="updates" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 sm:pb-32">
        <div className="mb-10">
          <h2 className="text-2xl font-medium tracking-tight text-text-primary sm:text-3xl">
            更新
          </h2>
          <p className="mt-2 text-text-secondary">
            产品迭代记录，持续更新中。
          </p>
        </div>

        <div className="space-y-6 max-w-2xl">
          <div className="border-l-2 border-border pl-5">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-text-primary">2026.08.16</span>
              <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs text-accent">新上线</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              网站正式上线。首批上架 3 个工具：Vibe Prompt Kit、Code Flow 模板、AI 编程速查。
            </p>
          </div>

          <div className="border-l-2 border-border pl-5">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-text-primary">2026.08</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              完成产品定位与中文市场优先策略，开始打磨第一批 vibe coding 工具。
            </p>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 sm:flex-row sm:items-center sm:px-6">
          <div>
            <div className="text-sm font-medium text-text-primary">Vibe Coding</div>
            <p className="mt-1 text-sm text-text-muted">
              让写代码也有 vibe
            </p>
          </div>
          <div className="flex gap-6 text-sm text-text-secondary">
            <a href="#products" className="hover:text-text-primary transition-colors">产品</a>
            <a href="#about" className="hover:text-text-primary transition-colors">关于</a>
            <a href="#updates" className="hover:text-text-primary transition-colors">更新</a>
          </div>
          <div className="text-sm text-text-muted">
            © 2026 Vibe Coding
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
