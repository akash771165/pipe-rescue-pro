import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-5xl font-bold">404</h1>

      <p className="mt-4 text-gray-600">
        Sorry, this service area could not be found.
      </p>

      <Link
        href="/service-areas"
        className="mt-8 rounded-lg bg-red-600 px-6 py-3 text-white hover:bg-red-700"
      >
        Back to Service Areas
      </Link>
    </div>
  );
}