import { useState, useEffect } from 'react'

interface Project {
  name: string
  date: string
  repo?: string
  fallbackStars?: number
  href: string
  summary: string
  tech: string[]
  links: { label: string; href: string }[]
}

const projects: Project[] = [
  {
    name: 'Llama-3-8B Chain-of-Thought Fine-Tune',
    date: '2026',
    repo: 'eelixir/mercury',
    href: 'https://github.com/eelixir/mercury',
    summary: 'Fine-tuned Meta-Llama-3-8B-Instruct to implement "System 2" reasoning, enhancing the model\'s ability to solve complex logic puzzles, coding problems, and riddles.',
    tech: ['Python', 'Jupyter Notebooks'],
    links: [{ label: 'GitHub', href: 'https://github.com/eelixir/llama3-cot-enforcery' }],
  },
  {
    name: 'Mercury',
    date: '2025',
    repo: 'eelixir/mercury',
    fallbackStars: 27,
    href: 'https://github.com/eelixir/mercury',
    summary:
      'Low-latency trading engine implementing a full limit order book with price-time priority matching. Designed to demonstrate systems programming concepts used in quantitative finance: cache-friendly data structures, memory pooling, and microsecond-level performance optimization.',
    tech: ['C++ 17', 'Google Benchmark'],
    links: [{ label: 'GitHub', href: 'https://github.com/eelixir/mercury' }],
  },
  {
    name: 'Onyx Terminal',
    date: '2025',
    href: 'https://onyxterminal.xyz',
    summary:
      'Prediction markets trading terminal selected for the Polymarket Builders Program.',
    tech: ['Python', 'TypeScript (React)'],
    links: [
      { label: 'onyxterminal.xyz', href: 'https://onyxterminal.xyz' },
    ],
  },
  {
    name: 'Vanta',
    date: '2025',
    repo: 'eelixir/vanta',
    fallbackStars: 10,
    href: 'https://github.com/eelixir/vanta',
    summary:
      'Command-line interface (CLI) password manager designed for secure and easy management of your login credentials. It uses strong encryption and provides a straightforward interface for viewing, adding, updating, and deleting your passwords.',
    tech: ['Python', 'SQLite'],
    links: [{ label: 'GitHub', href: 'https://github.com/eelixir/vanta' }],
  },
  {
    name: 'Ecosytem Simulator',
    date: '2024',
    repo: undefined,
    href: 'https://github.com/eelixir/ecosystem-simulator',
    summary:
      'Sandbox-based game designed to simulate evolution in a virtual environment. It features natural selection, genetic mutation, and adaptation, creating dynamic ecosystems populated by evolving organisms.',
    tech: ['C#', 'Unity'],
    links: [{ label: 'GitHub', href: 'https://github.com/eelixir/ecosystem-simulator' }],
  },
]

function useGitHubStars(repos: (string | undefined)[]) {
  const [stars, setStars] = useState<Record<string, number>>({})

  useEffect(() => {
    const filtered = repos.filter((r): r is string => r != null)
    filtered.forEach((repo) => {
      fetch(`https://api.github.com/repos/${repo}`)
        .then((res) => res.json())
        .then((data) => {
          if (typeof data.stargazers_count === 'number') {
            setStars((prev) => ({ ...prev, [repo]: data.stargazers_count }))
          }
        })
        .catch(() => {})
    })
  }, [])

  return stars
}

const linkClass =
  'text-[15px] text-[#27272a] dark:text-[#d4d4d8] underline decoration-[#d4d4d8] dark:decoration-[#52525b] underline-offset-4 hover:decoration-[#71717a] dark:hover:decoration-[#a1a1aa] hover:text-[#09090b] dark:hover:text-[#fafafa] transition-colors duration-150'

export default function Projects() {
  const stars = useGitHubStars(projects.map((p) => p.repo))

  return (
    <div className="divide-y divide-[#e4e4e7] dark:divide-[#27272a]">
      {projects.map((p) => (
        <div key={p.name} className="py-8 first:pt-0 last:pb-0">
          {/* Header row */}
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-base font-semibold text-[#27272a] dark:text-[#d4d4d8]">
              {p.name}
            </h2>
            <span className="text-[15px] text-[#a1a1aa] dark:text-[#52525b] shrink-0">
              {p.date}
            </span>
          </div>

          {/* Summary */}
          <p className="text-[15px] leading-relaxed mt-3">{p.summary}</p>

          {/* Bottom row: links left, tech right */}
          <div className="flex items-baseline justify-between gap-4 mt-4">
            <div className="flex items-center gap-3">
              {p.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {l.label}
                </a>
              ))}
              {p.repo && (stars[p.repo] != null || p.fallbackStars != null) && (
                <span className="flex items-center gap-1.5 text-[14px] text-[#a1a1aa] dark:text-[#71717a]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#eab308" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                  {stars[p.repo] ?? p.fallbackStars}
                </span>
              )}
            </div>
            <span className="text-[13px] text-[#a1a1aa] dark:text-[#52525b] hidden sm:block">
              {p.tech.join(' · ')}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
