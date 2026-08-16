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
  tools?: string[]
  updatePolicy?: string
}

export const products: Product[] = [
  {
    id: 'vibe-prompt-kit',
    name: 'Vibe Prompt Kit',
    description: '中文场景 Prompt + 规则模板，复制即用，减少反复试错。',
    price: '¥49',
    tag: '热门',
    longDescription:
      '面向周末独立开发者的中文 Prompt 与规则包。覆盖代码生成、重构、调试、文档、UI 描述等高频场景，并附带可直接放入项目的 .cursorrules / CLAUDE.md 示例片段。强调可验证、可复制，而不是空泛的「提升效率」。',
    buyUrl: '',
    image: '/products/vibe-prompt-kit.svg',
    wechat: 'MEYRA1219',
    features: [
      '场景 Prompt：代码生成、重构、调试、文档、UI 描述',
      '附带 .cursorrules 与 CLAUDE.md 示例片段，可直接放进项目',
      '中文优先，贴合中文开发者表达与业务习惯',
      '写法带验收标准，减少 AI「能跑但不是你的代码」',
      '持续更新，跟随 Cursor / Claude 等工具变化'
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
      '场景 Prompt 模板文件（Markdown，可直接复制）',
      '示例 .cursorrules 与 CLAUDE.md 片段',
      '按场景分类的使用说明与微调建议',
      '后续更新权限（微信通知）'
    ],
    gettingStarted: [
      '下载并解压文件',
      '打开对应场景的 Prompt，复制到 Cursor / Claude / ChatGPT',
      '如需项目级规则，将示例片段放入 .cursorrules 或 CLAUDE.md',
      '按项目改关键词与约束，第一次跑通后保存自己的版本',
      '卡住时微信联系我，备注产品名称'
    ],
    tools: ['Cursor', 'Claude', 'ChatGPT', 'GitHub Copilot Chat'],
    updatePolicy: '购买后可免费获取同系列小版本更新；重大改版会通过微信提前通知。'
  },
  {
    id: 'code-flow',
    name: 'Code Flow 模板',
    description: 'Vite + React + Tailwind 暗色脚手架，十分钟进入写功能状态。',
    price: '¥79',
    longDescription:
      '为周末独立开发者准备的现代前端起点：Vite + React + TypeScript + Tailwind，内置暗色主题、Linear 风格 token、目录规范与基础组件约定。目标不是「再学一套框架」，而是打开就能写页面，少花时间在配环境上。',
    buyUrl: '',
    image: '/products/code-flow.svg',
    wechat: 'MEYRA1219',
    features: [
      'Vite + React + TypeScript + Tailwind 开箱即用',
      '暗色主题与设计 token，默认接近 Linear 观感',
      '清晰目录结构与组件规范，减少后期返工',
      '预留规则文件位置，方便接入 Cursor / Claude',
      'README 含启动、改主题、加页面的最短路径'
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
      '完整项目脚手架源码（Vite + React + TS + Tailwind）',
      '暗色主题与设计 token 配置',
      '目录结构与组件规范说明',
      '快速启动 README',
      '后续更新权限（微信通知）'
    ],
    gettingStarted: [
      '解压后进入项目目录',
      '执行 npm install 安装依赖',
      '执行 npm run dev 启动本地预览',
      '按 README 修改首页文案、主题色与路由',
      '需要 AI 协作时，把规则片段放进项目根目录'
    ],
    tools: ['Vite', 'React', 'TypeScript', 'Tailwind CSS', 'Cursor'],
    updatePolicy: '购买后可免费获取依赖升级与模板小版本更新；破坏性升级会单独说明迁移方式。'
  },
  {
    id: 'ai-cheatsheet',
    name: 'AI 编程速查',
    description: '中文优先的高频 AI 指令速查，卡住时直接翻，不用现编。',
    price: '¥29',
    longDescription:
      '把最常用的 AI 编程指令、调试与重构话术整理成轻量速查表。面向已经在用 Cursor / Claude 的开发者：不是长教程，而是放在手边、搜得到、复制就能用的中文指令清单。',
    buyUrl: '',
    image: '/products/ai-cheatsheet.svg',
    wechat: 'MEYRA1219',
    features: [
      '高频场景指令：生成、重构、调试、解释、补测试',
      '中文优先，减少临时翻译英文模板',
      '按「卡住类型」组织，方便快速定位',
      '可打印 / 可收藏，适合桌面常备',
      '持续更新，跟随主流 AI 编程工具变化'
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
      'AI 编程速查表（Markdown / 可打印版建议）',
      '按场景整理的指令与技巧',
      '常用调试 / 重构话术摘录',
      '后续内容更新权限（微信通知）'
    ],
    gettingStarted: [
      '下载文件并收藏到本地或笔记软件',
      '遇到卡住场景时，先搜对应分类',
      '复制指令到 Cursor / Claude / ChatGPT 使用',
      '按项目补上文件路径、报错原文等上下文',
      '有新场景需求可以微信反馈给我'
    ],
    tools: ['Cursor', 'Claude', 'ChatGPT', 'GitHub Copilot Chat'],
    updatePolicy: '购买后可免费获取内容增补与修订；新增场景包会优先推送给已购用户。'
  }
]
