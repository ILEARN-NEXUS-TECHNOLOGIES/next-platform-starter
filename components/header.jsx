import Image from 'next/image';
import Link from 'next/link';
import ilearnLogo from '/public/logo.png'; // ⬅️ Your custom logo
import githubLogo from '/public/images/github-mark-white.svg'; // Optional

const navItems = [
  { linkText: 'Home', href: '/' },
  { linkText: 'Assessments', href: '/editor' },
  { linkText: 'Results', href: '/results' },
  { linkText: 'Admin', href: '/admin' },
  { linkText: 'Login', href: '/login' }
];

export function Header() {
  return (
    <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-20">
      <Link href="/">
        <div className="flex items-center gap-2">
          <Image src={ilearnLogo} alt="iLearn Nexus Logo" width={40} height={40} />
          <span className="text-xl font-semibold text-blue-700">iLearn Nexus</span>
        </div>
      </Link>

      {!!navItems?.length && (
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2 hover:underline">
                {item.linkText}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Optional GitHub button (can be removed) */}
      <Link
        href="https://github.com/iLearnNexus" // replace with your repo
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:inline-flex lg:ml-auto"
      >
        <Image src={githubLogo} alt="GitHub logo" className="w-7" />
      </Link>
    </nav>
  );
}
