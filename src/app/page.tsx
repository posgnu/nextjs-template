import { Button, Card, CardBody, CardHeader } from '@heroui/react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Next.js Template
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A modern, production-ready starter template with TypeScript and Tailwind CSS
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card>
            <CardHeader className="pb-3">
              <h3 className="text-lg font-semibold">TypeScript</h3>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Built with TypeScript for type safety and better developer experience
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <h3 className="text-lg font-semibold">Tailwind CSS</h3>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Utility-first CSS framework for rapid UI development
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <h3 className="text-lg font-semibold">HeroUI</h3>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Beautiful and modern React components built on top of Tailwind CSS
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <h3 className="text-lg font-semibold">React Query</h3>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Powerful data synchronization for server state management
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <h3 className="text-lg font-semibold">ESLint & Prettier</h3>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Code quality tools with pre-configured rules and formatting
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <h3 className="text-lg font-semibold">Git Hooks</h3>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Husky and lint-staged for automated code checks before commits
              </p>
            </CardBody>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/examples">
            <Button color="primary" size="lg">
              View Examples
            </Button>
          </Link>
          <Link href="https://github.com" target="_blank">
            <Button variant="bordered" size="lg">
              GitHub Repository
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}