import React from "react";

interface BarProps {
  value: number;
  length: number;
  i: number;
  id: string;
}

const Bar: React.FC<BarProps> = ({ value, length, i, id }) => {
  const barHeight = `${(value / length) * 100}%`;
  const barWidth = `${100 / length}%`;
  const leftMarginPercentage = `${i * (100 / length)}%`;

  return (
    <div
      id={id}
      className="
         absolute bottom-0 left-0 
    bg-gradient-to-t from-purple-500 via-indigo-500 to-blue-400
    rounded-t-sm transition-all ease-in-out duration-150
    shadow-[0_0_6px_rgba(0,0,0,0.6)]
      "
      style={{
        height: barHeight,
        width: barWidth,
        left: leftMarginPercentage,
      }}
    />
  );
};

export default Bar;
