import Head from 'next/head';
import Link from 'next/link';
import { useTheme } from './ThemeContext';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme, toggle } = useTheme();
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Head>
        <title>Vytas Subacius Portfolio</title>
        <meta name="description" content="Portfolio of Vytas Subacius" />
        <meta property="og:title" content="Vytas Subacius Portfolio" />
      </Head>
      <header className="bg-blue-600 dark:bg-blue-800 text-white">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <Link href="/" className="font-bold text-lg">Vytas Subacius</Link>
          <div className="space-x-4 hidden sm:block">
            <Link href="/">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/Vytas_Resume.pdf" target="_blank" rel="noopener">Resume</Link>
            <button onClick={toggle} aria-label="Toggle Theme" className="ml-4">
              {theme === 'light' ? 'Dark' : 'Light'}
            </button>
          </div>
          <button onClick={toggle} aria-label="Toggle Theme" className="sm:hidden">
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </nav>
      </header>
      <motion.main
        key={router.route}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="container mx-auto flex-1 p-4"
      >
        {children}
      </motion.main>
      <footer className="bg-blue-600 dark:bg-blue-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Vytas Subacius</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://github.com/vsubacius" target="_blank" rel="noopener" aria-label="GitHub" className="hover:text-gray-300 transition">GitHub</a>
            <a href="https://www.linkedin.com/in/vytas-subacius333/" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-gray-300 transition">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
