const InsoleDiagram = () => {
  return (
    <svg
      viewBox="0 0 420 520"
      className="h-auto w-full max-w-[420px]"
      role="img"
      aria-label="Technical diagram of the Carbon Core insole showing trimmable toe lines and carbon plate span"
    >
      <defs>
        <pattern
          id="cfWeave"
          width="14"
          height="14"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <rect width="14" height="14" fill="#0f131a" />
          <rect width="7" height="7" fill="#1e242e" />
          <rect x="7" y="7" width="7" height="7" fill="#1e242e" />
          <rect x="7" width="7" height="7" fill="#161b23" />
          <rect y="7" width="7" height="7" fill="#161b23" />
        </pattern>
        <linearGradient id="cfGloss" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.30" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g transform="translate(78 0)">
        {/* Shadow */}
        <ellipse cx="150" cy="470" rx="105" ry="16" fill="#000" opacity="0.08" />

        {/* Insole body */}
        <path
          d="M150 24c36 2 56 26 59 60 4 40-2 84-12 124-10 46 4 96 9 146 5 46-20 88-57 93-36 5-60-15-60-50 0-35 17-50 22-80 6-35-10-71-14-111-4-50 15-159 53-182Z"
          fill="url(#cfWeave)"
          stroke="#4a6cf7"
          strokeWidth="2"
        />
        <path
          d="M150 24c36 2 56 26 59 60 4 40-2 84-12 124-10 46 4 96 9 146 5 46-20 88-57 93-36 5-60-15-60-50 0-35 17-50 22-80 6-35-10-71-14-111-4-50 15-159 53-182Z"
          fill="url(#cfGloss)"
        />

        {/* Arch support highlight */}
        <ellipse
          cx="185"
          cy="250"
          rx="30"
          ry="72"
          fill="#4a6cf7"
          opacity="0.18"
          transform="rotate(-8 185 250)"
        />

        {/* Heel cup */}
        <path
          d="M120 372c8 40 30 62 66 66"
          fill="none"
          stroke="#4a6cf7"
          strokeWidth="2"
          strokeDasharray="6 5"
        />

        {/* Trimmable toe lines */}
        {[70, 96, 122].map((y, i) => (
          <g key={y}>
            <line
              x1={112 + i * 3}
              y1={y}
              x2={196 - i * 4}
              y2={y}
              stroke="#ffffff"
              strokeOpacity="0.55"
              strokeWidth="1.5"
              strokeDasharray="5 5"
            />
          </g>
        ))}

        {/* Plate span indicator */}
        <line
          x1="176"
          y1="150"
          x2="176"
          y2="392"
          stroke="#4a6cf7"
          strokeWidth="1.5"
          strokeOpacity="0.7"
        />
        <line x1="168" y1="150" x2="184" y2="150" stroke="#4a6cf7" strokeWidth="2" />
        <line x1="168" y1="392" x2="184" y2="392" stroke="#4a6cf7" strokeWidth="2" />

        {/* Callouts */}
        <g
          fill="currentColor"
          className="text-body-color dark:text-body-color-dark"
          fontSize="13"
        >
          <line
            x1="198"
            y1="86"
            x2="286"
            y2="72"
            stroke="currentColor"
            strokeOpacity="0.5"
            strokeWidth="1"
          />
          <text x="292" y="70" fontWeight="700">
            Trimmable toe
          </text>
          <text x="292" y="88" fontSize="11.5" opacity="0.8">
            EU 35–46 trim guides
          </text>

          <line
            x1="198"
            y1="268"
            x2="286"
            y2="262"
            stroke="currentColor"
            strokeOpacity="0.5"
            strokeWidth="1"
          />
          <text x="292" y="260" fontWeight="700">
            Arch plate
          </text>
          <text x="292" y="278" fontSize="11.5" opacity="0.8">
            1.2 mm 3K carbon
          </text>

          <line
            x1="160"
            y1="430"
            x2="286"
            y2="438"
            stroke="currentColor"
            strokeOpacity="0.5"
            strokeWidth="1"
          />
          <text x="292" y="436" fontWeight="700">
            Deep heel cup
          </text>
          <text x="292" y="454" fontSize="11.5" opacity="0.8">
            TPU stability cradle
          </text>
        </g>
      </g>
    </svg>
  );
};

export default InsoleDiagram;
