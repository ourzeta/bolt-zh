[![Bolt 开源代码库](./public/social_preview_index.jpg)](https://bolt.new)

> 欢迎来到 **Bolt** 开源代码库！本仓库包含了一个使用 bolt.new 核心组件的简单示例应用，帮助您开始构建由 StackBlitz 的 **WebContainer API** 驱动的 **AI 驱动软件开发工具**。

### 为什么使用 Bolt + WebContainer API 构建

通过使用 Bolt + WebContainer API 构建，您可以创建基于浏览器的应用程序，让用户直接在浏览器中**提示、运行、编辑和部署**全栈 Web 应用，无需虚拟机。借助 WebContainer API，您可以构建能让 AI 直接访问和完全控制用户浏览器标签页中的 **Node.js 服务器**、**文件系统**、**包管理器**和**开发终端**的应用程序。这种强大的组合使您能够创建一类新的开发工具，开箱即可支持所有主要的 JavaScript 库和 Node 包，无需远程环境或本地安装。

### Bolt（本仓库）和 [Bolt.new](https://bolt.new) 有什么区别？

- **Bolt.new**：这是 StackBlitz 的**商业产品**——一个托管的、基于浏览器的 AI 开发工具，使用户能够直接在浏览器中提示、运行、编辑和部署全栈 Web 应用程序。基于 [Bolt 开源仓库](https://github.com/stackblitz/bolt.new) 构建，由 StackBlitz 的 **WebContainer API** 提供支持。

- **Bolt（本仓库）**：这个开源仓库提供了用于构建 **Bolt.new** 的核心组件。本仓库包含 Bolt 的 UI 界面以及使用 [Remix Run](https://remix.run/) 构建的服务器组件。通过利用本仓库和 StackBlitz 的 **WebContainer API**，您可以创建自己的 AI 驱动开发工具和完全在浏览器中运行的全栈应用程序。

# 开始使用 Bolt 构建

Bolt 将 AI 的能力与沙盒开发环境相结合，创造了一个助手和程序员可以共同开发代码的协作体验。Bolt 使用 [Remix](https://remix.run/) 和 [AI SDK](https://sdk.vercel.ai/) 将 [WebContainer API](https://webcontainers.io/api) 与 [Claude Sonnet 3.5](https://www.anthropic.com/news/claude-3-5-sonnet) 结合在一起。

### WebContainer API

Bolt 使用 [WebContainers](https://webcontainers.io/) 在浏览器中运行生成的代码。WebContainers 使用 [WebContainer API](https://webcontainers.io/api) 为 Bolt 提供全栈沙盒环境。WebContainers 直接在浏览器中运行全栈应用程序，避免了云托管 AI 代理的成本和安全问题。WebContainers 是交互式和可编辑的，使 Bolt 的 AI 能够运行代码并理解用户的任何更改。

[WebContainer API](https://webcontainers.io) 对个人和开源使用是免费的。如果您正在构建商业用途的应用程序，可以在[这里了解更多关于我们的 WebContainer API 商业使用定价](https://stackblitz.com/pricing#webcontainer-api)。

### Remix 应用

Bolt 使用 [Remix](https://remix.run/) 构建，并使用 [CloudFlare Pages](https://pages.cloudflare.com/) 和 [CloudFlare Workers](https://workers.cloudflare.com/) 部署。

### AI SDK 集成

Bolt 使用 [AI SDK](https://github.com/vercel/ai) 与 AI 模型集成。目前，Bolt 支持使用 Anthropic 的 Claude Sonnet 3.5。您可以从 [Anthropic API 控制台](https://console.anthropic.com/) 获取 API 密钥以用于 Bolt。看看 [Bolt 如何使用 AI SDK](https://github.com/stackblitz/bolt.new/tree/main/app/lib/.server/llm)。

## 前提条件

在开始之前,请确保您已安装以下内容:

- Node.js (v20.15.1)
- pnpm (v9.4.0)
设置
克隆仓库(如果您还没有):

```bash
git clone https://github.com/stackblitz/bolt.new.git
```

安装依赖:

```bash
pnpm install
```

在根目录创建一个 .env.local 文件,并添加您的 Anthropic API 密钥:

```bash
ANTHROPIC_API_KEY=XXX
```

可选地,您可以设置调试级别:

```bash
VITE_LOG_LEVEL=debug
```

重要: 永远不要将您的 .env.local 文件提交到版本控制。它已经包含在 .gitignore 中。

## 可用脚本

```bash
pnpm run dev: 启动开发服务器。
pnpm run build: 构建项目。
pnpm run start: 使用 Wrangler Pages 在本地运行构建的应用程序。此脚本使用 bindings.sh 设置必要的绑定,因此您不必重复环境变量。
pnpm run preview: 构建项目然后在本地启动,用于测试生产构建。注意,HTTP 流目前无法按预期与 wrangler pages dev 一起工作。
pnpm test: 使用 Vitest 运行测试套件。
pnpm run typecheck: 运行 TypeScript 类型检查。
pnpm run typegen: 使用 Wrangler 生成 TypeScript 类型。
pnpm run deploy: 构建项目并将其部署到 Cloudflare Pages。

## 开发 

要启动开发服务器:

```bash
pnpm run dev
这将启动 Remix Vite 开发服务器。
```

## 测试

运行测试套件:

```bash
pnpm test
```

## 部署

要将应用程序部署到 Cloudflare Pages:

```bash
pnpm run deploy
```

确保您拥有必要的权限,并且 Wrangler 已为您的 Cloudflare 账户正确配置。
