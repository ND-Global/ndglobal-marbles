import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <p className="text-xs tracking-[0.25em] uppercase text-stone-400 mb-4">404</p>
      <h1 className="font-display text-4xl text-stone-900 mb-3">Page Not Found</h1>
      <p className="text-stone-500 text-sm mb-8 max-w-sm">The page you're looking for doesn't exist or has been moved.</p>
      <Link href="/" className="px-6 py-3 bg-stone-900 text-white text-sm rounded-lg hover:bg-stone-700 transition-colors">
        Back to Home
      </Link>
    </div>
  );
}
