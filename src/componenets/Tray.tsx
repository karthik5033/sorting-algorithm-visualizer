import React, { useState } from "react";
import BubbleSort from "../algorithms/BubbleSort.ts";
import selectionSort from "../algorithms/selectionSort.ts";
import insertionSort from "../algorithms/insertionSort.ts";
import cocktailShakerSort from "../algorithms/cocktailShakerSort.ts";
import Bar from "./Bar";

interface TrayProps {
  algorithm: string;
  data: number[];
  setData: React.Dispatch<React.SetStateAction<number[]>>;
}

const Tray: React.FC<TrayProps> = ({ algorithm, data, setData }) => {
  const [speed, setSpeed] = useState<number>(51);
  const jump = 0;

  const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(Number(event.target.value));
  };

  const sort = async () => {
    const isSortedElement = document.getElementById(
      "isSorted"
    ) as HTMLInputElement;
    if (isSortedElement?.value === "1") return;

    const sortingButton = document.getElementById(
      "sortingButton"
    ) as HTMLButtonElement;
    const generateButton = document.getElementById(
      "generateButton"
    ) as HTMLButtonElement;

    if (isSortedElement && sortingButton && generateButton) {
      isSortedElement.value = "1";
      sortingButton.disabled = true;
      generateButton.disabled = true;

      switch (algorithm) {
        case "bubbleSort":
          await BubbleSort(data, setData, speed, jump);
          break;
        case "selectionSort":
          await selectionSort(data, setData, speed, jump);
          break;
        case "insertionSort":
          await insertionSort(data, setData, speed, jump);
          break;
        case "cocktailShakerSort":
          await cocktailShakerSort(data, setData, speed, jump);
          break;
      }
    }
  };

  return (
    <div className="flex flex-col items-center w-full mt-4">
      {/* Controls */}
      <div className="flex items-center justify-center gap-4 bg-gray-900 text-white px-6 py-3 rounded-xl shadow-md border border-gray-800">
        <label className="flex items-center gap-2 text-sm">
          <span className="font-medium">Speed:</span>
          <input
            type="range"
            min="1"
            max="100"
            value={speed}
            onChange={handleSpeedChange}
            className="w-32 accent-blue-500 cursor-pointer"
          />
        </label>

        <button
          onClick={sort}
          id="sortingButton"
          className="px-5 py-2 bg-linear-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow hover:from-blue-600 hover:to-indigo-700 transition-all duration-200"
        >
          Sort ⇄
        </button>
      </div>

      {/* Visualization Tray */}
      <div
        id="tray"
        className="relative  mx-auto mt-8 h-[90vh] w-[130vh] 
             bg-black flex items-end justify-center overflow-hidden 
             rounded-xl border border-gray-800"
      >
        {data.map((value, i) => (
          <Bar
            key={i}
            value={value}
            length={data.length}
            i={i}
            id={i.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default Tray;
