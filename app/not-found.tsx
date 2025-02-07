import { Button } from "flowbite-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:text-white dark:bg-black p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button href="/" className="mt-4">
          Go Back Home
        </Button>
      </main>
    </div>
  );
}
