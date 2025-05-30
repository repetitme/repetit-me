type TStepIcon = {
  number: number;
  isActive: boolean;
  isCompleted: boolean;
};

const StepIcon = ({ number, isActive, isCompleted }: TStepIcon) => {
  const circleFill = isCompleted
    ? 'var(--clr-primary-default)'
    : 'var(--clr-main)';

  const circleStroke =
    isActive || isCompleted ? 'var(--clr-primary-default)' : 'var(--clr-black)';

  const textColor = isCompleted
    ? 'white'
    : isActive
      ? 'var(--clr-primary-default)'
      : 'var(--clr-black)';

  return (
    <svg width="48" height="48" viewBox="0 0 48 48">
      <circle
        cx="24"
        cy="24"
        r="22"
        fill={circleFill}
        stroke={circleStroke}
        strokeWidth="2"
      />
      <text
        x="24"
        y="24"
        fill={textColor}
        fontSize="28"
        fontWeight="500"
        fontFamily="var(--ffm-default)"
        dy="0.35em"
        textAnchor="middle"
      >
        {number}
      </text>
    </svg>
  );
};

export default StepIcon;
