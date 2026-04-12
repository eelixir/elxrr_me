const A = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#27272a] dark:text-[#d4d4d8] underline decoration-[#d4d4d8] dark:decoration-[#52525b] underline-offset-4 hover:decoration-[#71717a] dark:hover:decoration-[#a1a1aa] hover:text-[#09090b] dark:hover:text-[#fafafa] transition-colors duration-150"
  >
    {children}
  </a>
)

export default function About() {
  return (
    <div className="space-y-5 text-[15px] leading-relaxed">
      <p>
        I'm a software engineer and CS student at the University of Surrey.
        I work at{' '}
        <A href="https://cyrisai.com/">Cyris AI</A> building automated trading
        execution infrastructure, where I was recruited as employee #1 to partner
        with the founding team.
      </p>

      <p>
        Previously, I've built{' '}
        <A href="https://onyxterminal.xyz">Onyx Terminal</A>, a prediction markets
        trading terminal selected for the Polymarket Builders Program, and{' '}
        <A href="https://github.com/eelixir/mercury">Mercury</A>, a C++ trading
        engine processing 3.2M+ orders/second at ~320ns insertion latency using 
        custom cache-friendly data structures.
      </p>

      <p>
        I work mostly with Python, C++, and TypeScript. My focus is on{' '}
        high-performance systems, clean product UX, and shipping quickly without
        cutting corners.
      </p>

      <p>
        Based in London. Open to interesting problems. If you're building
        something that needs to be fast, reliable, and well-executed,{' '}
        <a
          href="mailto:thomas.j.wells@proton.me"
          className="text-[#27272a] dark:text-[#d4d4d8] underline decoration-[#d4d4d8] dark:decoration-[#52525b] underline-offset-4 hover:decoration-[#71717a] dark:hover:decoration-[#a1a1aa] hover:text-[#09090b] dark:hover:text-[#fafafa] transition-colors duration-150"
        >
          reach out
        </a>.
      </p>
    </div>
  )
}
