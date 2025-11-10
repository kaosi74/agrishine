import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-surface text-foreground px-6">
      <div className="text-center max-w-md">
        {/* Big 404 */}
        <h1 className="text-9xl font-extrabold text-primary">404</h1>
        <p className="mt-4 text-2xl font-semibold text-secondary">
          Page Not Found
        </p>
        <p className="mt-2 text-foreground/80">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Action buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-secondary text-surface font-semibold hover:bg-secondary/90 transition duration-400 ease-in-out"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg bg-primary text-surface font-semibold hover:bg-primary/90 transition duration-400 ease-in-out"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
