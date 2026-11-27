/**
 * Hero illustration: a temperature trace inside the 2–8 °C band.
 * Clearly labelled as an illustration, never presented as live data.
 *
 * The SVG stretches horizontally (preserveAspectRatio="none") at a fixed
 * height, so the 8 °C and 2 °C lines sit at fixed pixel positions and the
 * HTML labels and alert dot can be aligned to them at any screen width.
 */

// viewBox is 1000 × 160. 8 °C line at y=32, 2 °C line at y=128.
const TRACE =
  "M0,84 C40,72 80,94 120,86 S200,66 240,78 S320,100 360,88 S440,62 480,72 S545,58 572,40 S605,10 620,12 S652,30 672,58 S722,98 762,90 S842,70 882,80 S962,94 1000,86";

const ALERT_X = 0.62; // fraction of width where the trace peaks above 8 °C
const ALERT_Y = 12; // px from top

export function ThresholdTrace() {
  return (
    <figure className="mt-12 sm:mt-16">
      <div className="relative pl-12">
        <span className="absolute left-0 top-[32px] -translate-y-1/2 text-sm font-medium tabular-nums text-muted">
          8&nbsp;°C
        </span>
        <span className="absolute left-0 top-[128px] -translate-y-1/2 text-sm font-medium tabular-nums text-muted">
          2&nbsp;°C
        </span>

        <svg
          viewBox="0 0 1000 160"
          preserveAspectRatio="none"
          className="trace-svg block h-40 w-full"
          role="img"
          aria-labelledby="trace-title trace-desc"
        >
          <title id="trace-title">Illustration of a temperature reading inside a safe range</title>
          <desc id="trace-desc">
            A line moves between 2 °C and 8 °C, rises briefly above 8 °C, where an alert is raised, and
            then returns to the safe range.
          </desc>
          <defs>
            <clipPath id="above-limit">
              <rect x="0" y="0" width="1000" height="32" />
            </clipPath>
          </defs>
          <rect x="0" y="32" width="1000" height="96" fill="var(--band)" />
          <line
            x1="0"
            x2="1000"
            y1="32"
            y2="32"
            stroke="var(--muted)"
            strokeWidth="1"
            strokeDasharray="4 5"
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1="0"
            x2="1000"
            y1="128"
            y2="128"
            stroke="var(--muted)"
            strokeWidth="1"
            strokeDasharray="4 5"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d={TRACE}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d={TRACE}
            fill="none"
            stroke="var(--signal)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            clipPath="url(#above-limit)"
          />
        </svg>

        <span
          aria-hidden="true"
          className="trace-alert absolute block size-3.5 rounded-full border-2 border-bg bg-signal"
          style={{
            left: `calc(3rem + (100% - 3rem) * ${ALERT_X})`,
            top: `${ALERT_Y}px`,
          }}
        />
      </div>
      <figcaption className="mt-5 max-w-2xl pl-12 text-[0.9375rem] text-muted">
        Illustration, not live data. Many medicines and vaccines must be kept between 2&nbsp;°C and
        8&nbsp;°C. When a reading leaves the range you set, ColdChain OS alerts your team straight
        away.
      </figcaption>
    </figure>
  );
}
