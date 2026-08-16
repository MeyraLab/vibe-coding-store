export interface Product {
  id: string
  name: string
  description: string
  price: string
  tag?: string
  longDescription?: string
  buyUrl?: string
  wechat?: string
  image?: string
  features?: string[]
  audience?: string[]
  scenarios?: string[]
  deliverables?: string[]
  gettingStarted?: string[]
}

export const products: Product[] = [
  {
    id: 'vibe-prompt-kit',
    name: 'Vibe Prompt Kit',
    description: '一套经过实战打磨的 Prompt 模板，帮你更快写出有感觉的代码和文案。',
    price: '¥49',
    tag: '热门',
    longDescription:
      '包含高频场景的 Prompt 模板库，覆盖代码生成、重构、文档、UI 描述等。适合想提升 AI 编程效率的独立开发者。每一条模板都经过真实项目打磨，强调「顺畅」和「有感觉」。',
    buyUrl: '',
    image: '/products/vibe-prompt-kit.svg',
    wechat: 'MEYRA1219',
    features: [
      '覆盖代码生成、重构、调试、文档、UI 描述等高频场景',
      '中文优先，提示词更贴合中文开发者表达习惯',
      '可直接复制使用，也可按项目微调',
      '持续更新，跟随主流 AI 编程工具迭代',
      '附带使用说明与最佳实践建议'
    ],
    audience: [
      '独立开发者 / 个人项目作者',
      '想快速提升 AI 编程效率的工程师',
      '需要高质量 Prompt 模板的产品经理或设计师',
      '刚开始用 AI 写代码、还在摸索提示词的人'
    ],
    scenarios: [
      '用 AI 快速生成功能代码或组件',
      '重构旧代码时需要清晰的改写指令',
      '写 README、API 文档或产品说明',
      '描述 UI / 交互给设计或开发工具',
      '日常调试与问题排查时的提示词参考'
    ],
    deliverables: [
      '完整 Prompt 模板文件（Markdown / 可直接复制）',
      '按场景分类的使用说明',
      '最佳实践与微调建议',
      '后续更新权限（通过微信通知）'
    ],
    gettingStarted: [
      '收到文件后，用任意文本编辑器打开',
      '根据当前任务选择对应场景的 Prompt',
      '直接复制到 Cursor / Claude / ChatGPT 使用',
      '按项目情况微调关键词，效果会更好',
      '遇到问题随时微信联系我'
    ]
  },
  {
    id: 'code-flow',
    name: 'Code Flow 模板',
    description: '开箱即用的项目脚手架，内置暗色主题、组件规范和开发体验优化。',
    price: '¥79',
    longDescription:
      '基于 Vite + React + Tailwind 的现代脚手架，预设暗色主题、组件结构和代码规范，帮助你快速启动有 vibe 的项目。减少从零搭建的时间，把精力留给真正有价值的功能。',
    buyUrl: '',
    image: '/products/code-flow.svg',
    wechat: 'MEYRA1219',
    features: [
      'Vite + React + TypeScript + Tailwind 完整配置',
      '内置暗色主题与 Linear 风格设计 token',
      '预设组件结构与目录规范',
      '开箱即用的开发体验优化（热更新、路径别名等）',
      '可直接作为新产品的起点，也可按需裁剪'
    ],
    audience: [
      '想快速启动新项目的独立开发者',
      '讨厌从零配置工具链的人',
      '喜欢暗色界面与简洁设计的前端工程师',
      '需要统一项目规范的小团队'
    ],
    scenarios: [
      '周末做 side project，想马上进入编码状态',
      '接外包或个人产品，需要统一的基础模板',
      '学习现代前端栈，想要一个干净的起点',
      '想在自己项目里复用同一套暗色设计系统'
    ],
    deliverables: [
      '完整项目脚手架源码（Vite + React + TS + Tailwind）',
      '暗色主题与设计 token 配置',
      '预设目录结构与组件规范说明',
      '快速启动文档（README）',
      '后续更新权限'
    ],
    gettingStarted: [
      '解压后进入项目目录',
      '执行 npm install 安装依赖',
      '执行 npm run dev 启动开发服务器',
      '按 README 说明开始修改页面与组件',
      '需要调整主题或结构时，参考设计 token 文件'
    ]
  },
  {
    id: 'ai-cheatsheet',
    name: 'AI 编程速查',
    description: '高频场景的 AI 编程技巧与命令速查表，中文优先，持续更新。',
    price: '¥29',
    longDescription:
      '整理最常用的 AI 编程指令、调试技巧和场景模板，中文优先，方便随时查阅。不是厚重教程，而是放在手边的速查手册。',
    buyUrl: '',
    image: '/products/ai-cheatsheet.svg',
    wechat: 'MEYRA1219',
    features: [
      '高频 AI 编程指令与场景速查',
      '调试、重构、解释代码等实用技巧',
      '中文优先，表达更自然',
      '持续更新，跟随工具变化',
      '轻量易读，适合收藏与打印'
    ],
    audience: [
      '经常使用 AI 写代码的开发者',
      '希望减少「想提示词」时间的人',
      '需要一份中文速查参考的工程师',
      '刚开始用 AI 辅助编程的学习者'
    ],
    scenarios: [
      '写代码时临时卡住，需要快速找指令',
      '调试报错时想用 AI 帮忙定位',
      '给新人准备一份可分享的速查清单',
      '日常工作中作为提示词灵感来源'
    ],
    deliverables: [
      'AI 编程速查表文件（Markdown / PDF）',
      '按场景整理的指令与技巧',
      '可打印版本建议',
      '后续内容更新权限'
    ],
    gettingStarted: [
      '收到文件后收藏或下载到本地',
      '写代码卡住时直接搜索对应场景',
      '复制指令到 AI 工具中使用',
      '可打印一份放在桌面随时查阅',
      '有新场景需求可以反馈给我'
    ]
  }
]
