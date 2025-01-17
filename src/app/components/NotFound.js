import Link from 'next/link';
import Image from 'next/image';

export default function NotFoundPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-4 mt-10 mb-20 text-center">
      <div className="mb-12">
        <Image
          src="/chemotion-lg.png"
          alt="Not Found Illustration"
          width={500}
          height={301}
          className="mx-auto"
          priority
        />
      </div>
      <section className="mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-normal">404 - PAGE NOT FOUND</h1>
        <p className="text-lg text-gray-600 mt-4">
          Sorry, the page you’re looking for doesn’t exist. It might have been moved, renamed, or removed.
        </p>
      </section>
      <Link
        href="/"
        className="inline-block px-8 py-3 text-center text-gray-700 bg-[#F6F6F6] rounded-lg font-semibold border-2
          border-[#4d5559] shadow-sm transition-all duration-300 hover:bg-[#4d5559] hover:border-[#4d5559] hover:text-white
          hover:shadow-lg">
        Go to Homepage
      </Link>
    </div>
  );
}
