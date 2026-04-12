import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import Thoughts from './pages/Thoughts'

function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#18181b] text-[#52525b] dark:text-[#a1a1aa] antialiased transition-colors duration-200">
      <BrowserRouter>
        <div className="max-w-2xl mx-auto px-6 pt-10 pb-16 flex flex-col min-h-screen">
          {/* Header */}
          <header className="flex items-baseline justify-between mb-14">
            <NavLink to="/" className="text-[#27272a] dark:text-[#d4d4d8] text-base font-semibold tracking-wide">
              Thomas Wells
            </NavLink>
            <nav className="flex gap-5 text-[15px] text-[#a1a1aa] dark:text-[#52525b] font-normal">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#27272a] dark:text-[#d4d4d8]'
                    : 'hover:text-[#52525b] dark:hover:text-[#a1a1aa] transition-colors duration-150'
                }
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#27272a] dark:text-[#d4d4d8]'
                    : 'hover:text-[#52525b] dark:hover:text-[#a1a1aa] transition-colors duration-150'
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/thoughts"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#27272a] dark:text-[#d4d4d8]'
                    : 'hover:text-[#52525b] dark:hover:text-[#a1a1aa] transition-colors duration-150'
                }
              >
                Thoughts
              </NavLink>
            </nav>
          </header>

          {/* Page content */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/thoughts" element={<Thoughts />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="mt-20 border-t border-[#e4e4e7] dark:border-[#27272a] pt-6 flex items-center justify-between">
            <div className="flex gap-5 text-[15px] text-[#a1a1aa] dark:text-[#52525b]">
              <a
                href="mailto:thomas.j.wells@proton.me"
                className="decoration-[#d4d4d8] dark:decoration-[#3f3f46] underline-offset-4 hover:underline hover:text-[#52525b] dark:hover:text-[#a1a1aa] transition-colors duration-150"
              >
                Email
              </a>
              <a
                href="https://github.com/eelixir"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-[#d4d4d8] dark:decoration-[#3f3f46] underline-offset-4 hover:underline hover:text-[#52525b] dark:hover:text-[#a1a1aa] transition-colors duration-150"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/thomas-j-wells/"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-[#d4d4d8] dark:decoration-[#3f3f46] underline-offset-4 hover:underline hover:text-[#52525b] dark:hover:text-[#a1a1aa] transition-colors duration-150"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/elixrxyz"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-[#d4d4d8] dark:decoration-[#3f3f46] underline-offset-4 hover:underline hover:text-[#52525b] dark:hover:text-[#a1a1aa] transition-colors duration-150"
              >
                X
              </a>
              <a
                href="/thomas-wells-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-[#d4d4d8] dark:decoration-[#3f3f46] underline-offset-4 hover:underline hover:text-[#52525b] dark:hover:text-[#a1a1aa] transition-colors duration-150"
              >
                Resume
              </a>
            </div>
            <button
              onClick={() => setDark(!dark)}
              className="text-[#d4d4d8] dark:text-[#3f3f46] hover:text-[#71717a] transition-colors duration-150"
              aria-label="Toggle theme"
            >
              {dark ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>
          </footer>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
