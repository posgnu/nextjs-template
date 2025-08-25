import { Button, Card, CardBody, CardHeader, Chip, Input, Textarea } from '@heroui/react';
import { useState } from 'react';

export default function ExamplesPage() {
  return (
    <main className="container mx-auto p-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Component Examples</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Explore the various components and patterns available in this template
        </p>
      </div>

      <div className="space-y-12">
        {/* Buttons Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
            <Button variant="bordered">Bordered</Button>
            <Button variant="light">Light</Button>
            <Button variant="flat">Flat</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="shadow">Shadow</Button>
          </div>
        </section>

        {/* Cards Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Cards</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Basic Card</h3>
              </CardHeader>
              <CardBody>
                <p>This is a basic card with header and body content.</p>
              </CardBody>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <h3 className="text-lg font-semibold">Highlighted Card</h3>
              </CardHeader>
              <CardBody>
                <p>This card has a custom border color for emphasis.</p>
              </CardBody>
            </Card>

            <Card isPressable className="hover:scale-105 transition-transform">
              <CardHeader>
                <h3 className="text-lg font-semibold">Interactive Card</h3>
              </CardHeader>
              <CardBody>
                <p>This card is pressable and has hover effects.</p>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Form Elements */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Form Elements</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <Input label="Name" placeholder="Enter your name" />
              <Input label="Email" type="email" placeholder="john@example.com" />
              <Input label="Password" type="password" placeholder="Enter password" />
              <Textarea label="Message" placeholder="Type your message here" />
            </div>
            <div className="space-y-4">
              <Input label="With Description" description="This field has helper text" />
              <Input label="Required Field" isRequired placeholder="This field is required" />
              <Input label="Disabled Field" isDisabled placeholder="This field is disabled" />
              <Input label="Read Only" isReadOnly value="Read only value" />
            </div>
          </div>
        </section>

        {/* Chips */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Chips & Tags</h2>
          <div className="flex flex-wrap gap-2">
            <Chip>Default</Chip>
            <Chip color="primary">Primary</Chip>
            <Chip color="secondary">Secondary</Chip>
            <Chip color="success">Success</Chip>
            <Chip color="warning">Warning</Chip>
            <Chip color="danger">Danger</Chip>
            <Chip variant="flat">Flat</Chip>
            <Chip variant="bordered">Bordered</Chip>
            <Chip variant="light">Light</Chip>
            <Chip variant="dot">With Dot</Chip>
          </div>
        </section>
      </div>
    </main>
  );
}