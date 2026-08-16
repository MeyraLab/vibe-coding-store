export interface Product {
  id: string
  name: string
  description: string
  price: string
  tag?: string
  longDescription?: string
}

export const products: Product[] = [
  {
    id: 'vibe-prompt-kit',
    name: 'Vibe Prompt Kit',
    description: '一套经过实战打磨的 Prompt 模板，帮你更快写出有感觉的代码和文案。',
    price: '¥49',
    tag: '热门',
    longDescription: '包含高频场景的 Prompt 模板库，覆盖代码生成、重构、文档、UI 描述等。适合想提升 AI 编程效率的独立开发者。'
  },
  {
    id: 'code-flow',
    name: 'Code Flow 模板',
    description: '开箱即用的项目脚手架，内置暗色主题、组件规范和开发体验优化。',
    price: '¥79',
    longDescription: '基于 Vite + React + Tailwind 的现代脚手架，预设暗色主题、组件结构和代码规范，帮助你快速启动有 vibe 的项目。'
  },
  {
    id: 'ai-cheatsheet',
    name: 'AI 编程速查',
    description: '高频场景的 AI 编程技巧与命令速查表，中文优先，持续更新。',
    price: '¥29',
    longDescription: '整理最常用的 AI 编程指令、调试技巧和场景模板，中文优先，方便随时查阅。'
  }
]
