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
  supportedTools?: string[]
  updatePolicy?: string
}

export const products: Product[] = [
  {
    id: 'vibe-prompt-kit',
    name: 'Vibe Prompt Kit',
    description: '别再每次自己发明中文提示词。场景 Prompt + 规则片段，复制就能用。',
    price: '¥49',
    tag: '热门',
    longDescription:
      '经过实战打磨的中文场景 Prompt 与规则片段，覆盖代码生成、重构、调试、文档、UI 描述。同时提供可直接放入项目的 .cursorrules / CLAUDE.md 示例，减少「每次重新发明提示词」和「AI 写出能跑但不是我的代码」的问题。',
    buyUrl: '',
    image: '/products/vibe-prompt-kit.svg',
    wechat: 'MEYRA1219',
    features: [
      '高频中文场景 Prompt：生成、重构、调试、文档、UI 描述',
      '附带 .cursorrules 与 CLAUDE.md 示例片段，跨 Cursor / Claude Code 可用',
      '强调约束与验收标准，减少模糊指令导致的返工',
      '中文优先，贴合中文注释、业务表达与国内开发习惯',
      '可直接复制使用，也可按项目微调；含后续更新权限'
    ],
    audience: [
      '周末做 side project 的独立开发者',
      '已在用 Cursor / Claude，想少写提示词的工程师',
      '需要中文规则与场景模板的前端 / 全栈',
      '刚开始用 AI 写代码、不想从零摸索的人'
    ],
    scenarios: [
      '周五晚上启动功能，直接复制场景 Prompt',
      '重构旧代码时需要带约束的改写指令',
      '写 README / API 文档 / 产品说明',
      '给 AI 描述 UI 与交互，减少来回修改',
      '调试报错时用带上下文的排查指令'
    ],
    deliverables: [
      '场景分类 Prompt 模板文件（Markdown，可直接复制）',
      '示例 .cursorrules 与 CLAUDE.md 片段',
      '使用说明与微调建议',
      '后续内容更新权限（微信通知）'
    ],
    gettingStarted: [
      '解压/打开文件，按场景找到对应 Prompt',
      '需要项目级约束时，把示例规则复制到 .cursorrules 或 CLAUDE.md',
      '将 Prompt 粘贴到 Cursor / Claude / ChatGPT 使用',
      '按项目技术栈微调关键词与约束',
      '遇到问题微信联系，备注产品名'
    ],
    supportedTools: ['Cursor', 'Claude Code', 'ChatGPT / 其他对话式 AI'],
    updatePolicy: '购买后可享受对应内容的后续更新，重大更新通过微信通知。'
  },
  {
    id: 'code-flow',
    name: 'Code Flow 模板',
    description: '别再花一小时配暗色主题和目录。开箱即用，约 15 分钟进入写功能。',
    price: '¥79',
    longDescription:
      '基于 Vite + React + TypeScript + Tailwind 的现代脚手架，预设暗色主题与 Linear 风格设计 token、目录规范与开发体验优化。目标是让周末独立开发者在约 15 分钟内进入「写功能」状态，而不是先花一小时配环境。',
    buyUrl: '',
    image: '/products/code-flow.svg',
    wechat: 'MEYRA1219',
    features: [
      'Vite + React + TypeScript + Tailwind 完整配置',
      '内置暗色主题与 Linear 风格设计 token',
      '预设组件结构与目录规范，减少从零组织代码的时间',
      '开箱即用的热更新、路径别名等开发体验优化',
      '可作为新产品起点，也可按需裁剪'
    ],
    audience: [
      '只有周末时间、想马上开工的独立开发者',
      '讨厌从零配置工具链的前端工程师',
      '想统一暗色界面与基础规范的小团队',
      '用 AI 写代码、需要干净项目底座的人'
    ],
    scenarios: [
      '周五 22:00 启动 side project，不想再配一小时环境',
      '接小外包，需要稳定可交付的前端起点',
      '把现有想法快速落到可运行的页面骨架',
      '在同一套设计 token 上扩展多个小产品'
    ],
    deliverables: [
      '完整项目源码（可直接 npm install 运行）',
      '暗色主题与设计 token 配置',
      'README 快速启动说明',
      '目录与组件规范说明',
      '后续模板更新权限'
    ],
    gettingStarted: [
      '解压后进入项目目录',
      '执行 npm install',
      '执行 npm run dev，浏览器打开本地地址',
      '按 README 修改页面与组件，开始写功能',
      '需要统一 AI 规则时，可搭配 Vibe Prompt Kit 中的规则片段'
    ],
    supportedTools: ['Node.js + npm / pnpm', 'Cursor / VS Code', '现代浏览器'],
    updatePolicy: '购买后可享受模板后续更新，重大结构变更会说明迁移方式。'
  },
  {
    id: 'ai-cheatsheet',
    name: 'AI 编程速查',
    description: '卡住时别再搜英文模板。按场景整理的中文指令，翻到就能复制。',
    price: '¥29',
    longDescription:
      '按场景整理的中文 AI 编程速查：启动、重构、调试、文档与解释代码。不是厚教程，而是卡住时能立刻翻到的指令参考，减少临时想提示词和搜索英文模板的时间。',
    buyUrl: '',
    image: '/products/ai-cheatsheet.svg',
    wechat: 'MEYRA1219',
    features: [
      '按场景分类：启动 / 重构 / 调试 / 文档 / 解释代码',
      '指令写法强调约束与可验证结果',
      '中文优先，表达更自然',
      '轻量易读，适合收藏或打印',
      '持续更新，跟随常用工具变化'
    ],
    audience: [
      '日常用 AI 写代码、希望少想提示词的人',
      '调试和重构时经常卡住的工程师',
      '需要一份可分享中文速查清单的团队成员',
      '刚开始用 AI 辅助编程的学习者'
    ],
    scenarios: [
      '功能写到一半卡住，需要立刻可用的指令',
      '报错排查时，用结构化话术让 AI 定位问题',
      '重构前先用速查表约束改动范围',
      '给新人一份「先翻这里」的入门清单'
    ],
    deliverables: [
      'AI 编程速查表（Markdown，可选打印建议）',
      '按场景整理的指令与技巧',
      '后续内容更新权限'
    ],
    gettingStarted: [
      '打开或收藏速查表文件',
      '写代码卡住时，按场景定位对应指令',
      '复制到 Cursor / Claude 等工具中使用',
      '可打印一份放在手边',
      '有新场景需求可反馈，便于后续更新'
    ],
    supportedTools: ['Cursor', 'Claude Code', 'ChatGPT / 其他对话式 AI'],
    updatePolicy: '购买后可享受速查内容的后续更新，新增场景会同步补充。'
  }
]
