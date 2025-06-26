import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold text-purple-700 tracking-wide">
                Bloggies
      </span>
            </Link>
          </div>

        <nav className="hidden md:flex space-x-8 gap-x-4">
            <Link
              href="/"
              className="text-gray-700  transition-colors duration-200">
              Home
            </Link>
            <Link
              href="/signup"
              className="text-gray-700  transition-colors duration-200">
              Sign Up
            </Link>
            <Link
              href="/checkout"
              className="text-gray-700  transition-colors duration-200">
              Checkout
            </Link>
            <Link
              href="/admin"
              className="text-gray-700  transition-colors duration-200">
              Admin
            </Link>
            <Link
              href="/optout"
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200">
              Opt-Out
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
