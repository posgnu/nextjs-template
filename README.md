# Next.js Template

A modern, production-ready Next.js template with TypeScript, Tailwind CSS, and best practices built-in. This template provides a solid foundation for building scalable web applications with a focus on developer experience and performance.

## Features

- ⚡️ **Next.js 14** - React framework with App Router
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **HeroUI** - Beautiful React components
- 📝 **TypeScript** - Type safety and better DX
- 🔍 **ESLint & Prettier** - Code quality and formatting
- 🪝 **Husky & Lint-staged** - Git hooks for code quality
- 📊 **React Query** - Powerful data synchronization
- 🌙 **Dark Mode** - Built-in theme switching
- 📱 **Responsive** - Mobile-first design approach
- 🚀 **Vercel Ready** - Optimized for deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm 8.0.0+

### Installation

1. Clone this template:

```bash
# Using GitHub template
gh repo create my-app --template yourusername/nextjs-template

# Or clone directly
git clone https://github.com/yourusername/nextjs-template.git my-app
cd my-app
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## Project Structure

```
nextjs-template/
├── public/               # Static files
│   └── favicon/         # Favicon files
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Home page
│   │   └── providers.tsx # App providers
│   ├── components/      # Reusable components
│   │   ├── icons/       # Icon components
│   │   ├── layout/      # Layout components
│   │   └── ui/          # UI components
│   ├── constant/        # Constants and config
│   ├── libs/            # External libraries setup
│   │   ├── apis/        # API clients
│   │   └── hooks/       # Custom hooks
│   ├── styles/          # Global styles
│   ├── types/           # TypeScript types
│   └── utils/           # Utility functions
├── .eslintrc.json       # ESLint configuration
├── .gitignore          # Git ignore rules
├── .env.example        # Environment variables template
├── next.config.js      # Next.js configuration
├── package.json        # Dependencies and scripts
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Available Scripts

```bash
# Development
pnpm dev          # Start development server

# Build
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint
pnpm format       # Format code with Prettier
pnpm check-types  # Type checking

# Git Hooks (automatic)
pre-commit           # Runs lint-staged before commit
```

## Configuration

### Environment Variables

See `.env.example` for all available environment variables. Key variables:

- `NEXT_PUBLIC_APP_URL` - Your application URL
- `NEXT_PUBLIC_API_URL` - API endpoint URL

### Tailwind CSS

Tailwind configuration is in `tailwind.config.ts`. The template includes:
- Custom color palette
- Dark mode support
- HeroUI plugin integration
- Custom animations

### TypeScript

TypeScript is configured with strict mode enabled. Path aliases are set up:
- `@/*` - Maps to `src/*`
- `@/public/*` - Maps to `public/*`

## Styling

This template uses a combination of:
- **Tailwind CSS** for utility classes
- **CSS Modules** for component-specific styles (optional)
- **HeroUI** for pre-built components
- **CSS Variables** for theming

## State Management

- **React Query** for server state
- **React Context** for global app state (if needed)
- **Local component state** with React hooks

## API Integration

The template includes a pre-configured API client using Axios:

```typescript
import { apiClient } from '@/libs/apis/apiClient';

// Example usage
const data = await apiClient.get('/users');
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy

### Docker

A Dockerfile can be added for containerized deployments:

```dockerfile
FROM node:18-alpine AS builder
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM node:18-alpine AS runner
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install --frozen-lockfile --prod
EXPOSE 3000
CMD ["pnpm", "start"]
```

## Best Practices

1. **Components**: Keep components small and focused
2. **Types**: Define types for all props and API responses
3. **Hooks**: Extract complex logic into custom hooks
4. **Performance**: Use dynamic imports for code splitting
5. **SEO**: Utilize Next.js metadata API for SEO optimization
6. **Accessibility**: Ensure all interactive elements are accessible

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the GitHub repository or reach out to the maintainers.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [HeroUI](https://heroui.com/)
- [Vercel](https://vercel.com/)

---

Built with ❤️ using Next.js