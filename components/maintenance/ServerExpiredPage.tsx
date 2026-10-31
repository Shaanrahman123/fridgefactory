export default function ServerExpiredPage() {
  return (
    <div className="server-expired-root" aria-live="polite">
      <style>{`
        .server-expired-root {
          --se-bg-0: #0a0e1a;
          --se-bg-1: #121a2e;
          --se-accent: #f43f5e;
          --se-accent-soft: #fb7185;
          --se-cyan: #22d3ee;
          --se-text: #f1f5f9;
          --se-muted: #94a3b8;
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: radial-gradient(ellipse 120% 80% at 50% 0%, #1e293b 0%, var(--se-bg-0) 55%);
          color: var(--se-text);
          font-family: inherit;
        }

        .server-expired-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(34, 211, 238, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse 70% 60% at 50% 45%, black 20%, transparent 75%);
          animation: se-grid-drift 24s linear infinite;
        }

        @keyframes se-grid-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(48px, 48px); }
        }

        .server-expired-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.45;
          animation: se-orb-float 12s ease-in-out infinite;
        }

        .server-expired-orb--1 {
          width: 420px;
          height: 420px;
          background: rgba(244, 63, 94, 0.35);
          top: -8%;
          left: -5%;
        }

        .server-expired-orb--2 {
          width: 360px;
          height: 360px;
          background: rgba(34, 211, 238, 0.2);
          bottom: -10%;
          right: -5%;
          animation-delay: -4s;
        }

        @keyframes se-orb-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(24px, -20px) scale(1.08); }
        }

        .server-expired-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.75rem;
          padding: 2rem 1.5rem;
          max-width: 42rem;
          text-align: center;
        }

        .server-expired-svg-wrap {
          width: min(320px, 85vw);
          animation: se-float 5s ease-in-out infinite;
        }

        @keyframes se-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .se-pulse-ring {
          transform-origin: 160px 140px;
          animation: se-pulse 2.8s ease-out infinite;
        }

        @keyframes se-pulse {
          0% { transform: scale(0.85); opacity: 0.6; }
          70% { transform: scale(1.15); opacity: 0; }
          100% { opacity: 0; }
        }

        .se-led {
          animation: se-led-blink 1.4s steps(1) infinite;
        }

        .se-led--2 { animation-delay: 0.2s; }
        .se-led--3 { animation-delay: 0.5s; }

        @keyframes se-led-blink {
          0%, 40% { fill: #4ade80; opacity: 1; }
          41%, 100% { fill: #64748b; opacity: 0.35; }
        }

        .se-x-stroke {
          stroke-dasharray: 120;
          stroke-dashoffset: 120;
          animation: se-draw-x 1.2s ease forwards 0.4s;
        }

        @keyframes se-draw-x {
          to { stroke-dashoffset: 0; }
        }

        .se-cable {
          stroke-dasharray: 8 6;
          animation: se-cable-fail 2s linear infinite;
        }

        @keyframes se-cable-fail {
          0% { stroke-dashoffset: 0; opacity: 0.9; }
          100% { stroke-dashoffset: -28; opacity: 0.25; }
        }

        .se-hourglass-sand {
          animation: se-sand-fall 2.2s ease-in-out infinite;
        }

        @keyframes se-sand-fall {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.5; }
        }

        .se-badge {
          animation: se-badge-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s both;
        }

        @keyframes se-badge-pop {
          from { transform: scale(0.6) rotate(-8deg); opacity: 0; }
          to { transform: scale(1) rotate(-6deg); opacity: 1; }
        }

        .server-expired-title {
          font-size: clamp(1.75rem, 5vw, 2.5rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #fff 0%, var(--se-accent-soft) 50%, var(--se-cyan) 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: se-shimmer 4s ease-in-out infinite;
        }

        @keyframes se-shimmer {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }

        .server-expired-subtitle {
          font-size: 1.05rem;
          color: var(--se-muted);
          line-height: 1.6;
          max-width: 32rem;
        }

        .server-expired-code {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--se-accent-soft);
          background: rgba(244, 63, 94, 0.12);
          border: 1px solid rgba(244, 63, 94, 0.35);
        }

        .server-expired-code-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--se-accent);
          animation: se-dot-pulse 1.5s ease-in-out infinite;
        }

        @keyframes se-dot-pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(244, 63, 94, 0.5); }
          50% { opacity: 0.7; box-shadow: 0 0 0 8px rgba(244, 63, 94, 0); }
        }
      `}</style>

      <div className="server-expired-grid" aria-hidden />
      <div className="server-expired-orb server-expired-orb--1" aria-hidden />
      <div className="server-expired-orb server-expired-orb--2" aria-hidden />

      <div className="server-expired-content">
        <div className="server-expired-svg-wrap" aria-hidden>
          <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="se-pulse-ring" cx="160" cy="140" r="72" stroke="rgba(244,63,94,0.35)" strokeWidth="2" fill="none" />
            <circle className="se-pulse-ring" cx="160" cy="140" r="72" stroke="rgba(34,211,238,0.2)" strokeWidth="1" fill="none" style={{ animationDelay: "1.4s" }} />

            <rect x="108" y="88" width="104" height="112" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="2" />
            <rect x="118" y="98" width="84" height="22" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="1" />
            <rect x="118" y="128" width="84" height="22" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="1" />
            <rect x="118" y="158" width="84" height="22" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="1" />

            <circle className="se-led" cx="128" cy="109" r="4" />
            <circle className="se-led se-led--2" cx="128" cy="139" r="4" />
            <circle className="se-led se-led--3" cx="128" cy="169" r="4" />

            <line x1="148" y1="109" x2="192" y2="109" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
            <line x1="148" y1="139" x2="180" y2="139" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
            <line x1="148" y1="169" x2="186" y2="169" stroke="#334155" strokeWidth="2" strokeLinecap="round" />

            <path className="se-cable" d="M160 200 L160 228 L200 228" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
            <path className="se-cable" d="M120 200 L120 232 L80 232" stroke="#64748b" strokeWidth="2" strokeLinecap="round" style={{ animationDelay: "0.6s" }} />

            <g transform="translate(218, 52)">
              <path
                d="M20 8 L36 40 L4 40 Z"
                fill="none"
                stroke="#475569"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                className="se-hourglass-sand"
                d="M20 18 L28 32 L12 32 Z"
                fill="#fbbf24"
                opacity="0.85"
              />
              <line x1="12" y1="40" x2="28" y2="40" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
            </g>

            <g className="se-badge" transform="translate(200, 118) rotate(-6)">
              <rect x="0" y="0" width="88" height="32" rx="6" fill="#f43f5e" />
              <text x="44" y="21" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">
                EXPIRED
              </text>
            </g>

            <line className="se-x-stroke" x1="132" y1="108" x2="188" y2="164" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" />
            <line className="se-x-stroke" x1="188" y1="108" x2="132" y2="164" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" style={{ animationDelay: "0.15s" }} />

            <path
              d="M48 248 Q80 228 112 248 T176 248 T240 248"
              stroke="rgba(34,211,238,0.25)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4 8"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="3s" repeatCount="indefinite" />
            </path>
          </svg>
        </div>

        <p className="server-expired-code">
          <span className="server-expired-code-dot" aria-hidden />
          HTTP 503 · Server expired
        </p>

        <h1 className="server-expired-title">Server Expired</h1>

        <p className="server-expired-subtitle">
          This site&apos;s hosting period has ended. The service is temporarily offline until renewal.
          Please check back later or contact your administrator.
        </p>
      </div>
    </div>
  );
}
