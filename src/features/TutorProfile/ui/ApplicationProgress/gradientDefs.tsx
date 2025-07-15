export const GradientDefs = () => (
  <svg style={{ height: 100, width: 100 }}>
    <defs>
      <linearGradient
        id="circleGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#865BFF" stopOpacity="0.68" />
        <stop offset="29.77%" stopColor="#FF71F9" stopOpacity="0.68" />
        <stop offset="60.98%" stopColor="#865BFF" stopOpacity="0.68" />
        <stop offset="100%" stopColor="#3DC5FF" stopOpacity="0.68" />
      </linearGradient>
    </defs>
  </svg>
);

