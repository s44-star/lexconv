/** LexConv wordmark with a small "safe band" mark. */
export function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        aria-hidden="true"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        className="shrink-0"
      >
        <rect x="0.5" y="0.5" width="21" height="21" rx="4" fill="var(--ink)" />
        <rect x="4" y="8" width="14" height="6" rx="1" fill="var(--band)" />
        <path
          d="M4 12.5 C7 9.5, 9 13.5, 11 11 S15 8.5, 18 10.5"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-[1.1875rem] font-semibold tracking-[-0.02em]">LexConv</span>
    </span>
  );
}
