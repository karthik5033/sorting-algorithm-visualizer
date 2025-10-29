import React, { createContext, useState, useEffect } from "react";
import Tray from "./Tray";

interface DataContextType {
  data: number[];
  setData: React.Dispatch<React.SetStateAction<number[]>>;
}

export const DataContext = createContext<DataContextType | null>(null);

const Form: React.FC = () => {
  const [number, setNumber] = useState<number>(500);
  const [algorithm, setAlgorithm] = useState<string>("bubbleSort");
  const [data, setData] = useState<number[]>([]);

  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(e.target.value));
  };

  const handleAlgorithmChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAlgorithm(e.target.value);
  };

  const generateSample = (size: number) => {
    const isSortedElement = document.getElementById(
      "isSorted"
    ) as HTMLInputElement;
    if (isSortedElement) isSortedElement.value = "0";

    if (size <= 1) return alert("The minimum array size is 2");
    if (size > 5000) return alert("The max array size is 5000");

    const newData: number[] = [];
    while (newData.length < size) {
      const val = Math.floor(Math.random() * size + 1);
      if (!newData.includes(val)) newData.push(val);
    }
    setData(newData);
  };

  useEffect(() => {
    generateSample(number);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 bg-black text-white rounded-lg shadow-lg">
      <select
        name="sortingAlgorithm"
        id="sortingAlgorithm"
        className="bg-gray-900 text-white border border-gray-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        onChange={handleAlgorithmChange}
        value={algorithm}
      >
        <option value="bubbleSort">Bubble Sort</option>
        <option value="selectionSort">Selection Sort</option>
        <option value="insertionSort">Insertion Sort</option>
        <option value="cocktailShakerSort">cocktailShakerSort</option>
      </select>

      <input
        id="count"
        type="number"
        placeholder="Array Size"
        className="bg-gray-900 text-white border border-gray-700 rounded-lg px-3 py-2 w-32 text-center focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        autoComplete="off"
        value={number}
        onChange={handleCountChange}
      />

      <button
        className="bg-indigo-600 hover:bg-indigo-500 transition-colors px-4 py-2 rounded-lg font-semibold text-sm tracking-wide shadow-md"
        onClick={() => generateSample(number)}
        id="generateButton"
      >
        Generate Sample ↻
      </button>

      <DataContext.Provider value={{ data, setData }}>
        <Tray algorithm={algorithm} data={data} setData={setData} />
      </DataContext.Provider>
    </div>
  );
};

export default Form;
