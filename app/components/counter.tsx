import React from "react";

interface CounterProps {
  count: number;
}

const Counter = ({ count }: CounterProps) => {
  return (
    <div className="text-xs font-semibold bg-[#EF4343] text-white px-2 py-[0.12rem] rounded-[1.31rem]">
      {count}
    </div>
  );
};

export default Counter;
