import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "iLearn Nexus – Assessment Platform",
  description: "Coding assessments, real-time training, and job readiness.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        {/* Navbar */}
        <header className="bg-blue-600 text-white sticky top-0 z-50 shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <Image
                  src="/logo.png"
                  alt="iLearn Nexus Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-xl font-bold">iLearn Nexus</span>
              </div>
            </Link>
            {/* Optional: Add logout or dark mode toggle here */}
          </div>
        </header>

        {/* Page Content */}
        <main className="min-h-screen max-w-5xl mx-auto px-4 py-6">{children}</main>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 py-4 border-t mt-10">
          © 2025 iLearn Nexus Technologies. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
