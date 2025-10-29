import sleep from "./sleep.ts";
import greenLayer from "./greenLayer";
import inputOn from "./inputOn";

async function insertionSort(
  data: number[],
  setData: (data: number[]) => void,
  speed: number,
  jump: number
): Promise<void> {
  let buffer = [...data];
  const n = buffer.length;
  let counter = 0;

  for (let i = 1; i < n; i++) {
    const key = buffer[i];
    let j = i - 1;

    const keyElement = document.getElementById(i.toString());
    if (!keyElement) continue;

    const keyHeight = keyElement.style.height;
    keyElement.style.backgroundColor = "red";

    while (j >= 0 && buffer[j] > key) {
      const comparisonElement = document.getElementById(j.toString());
      const currentElement = document.getElementById((j + 1).toString());

      if (comparisonElement && currentElement) {
        comparisonElement.style.backgroundColor = "red";
        currentElement.style.backgroundColor = "red";

        buffer[j + 1] = buffer[j];

        const tempHeight = comparisonElement.style.height;
        comparisonElement.style.height = currentElement.style.height;
        currentElement.style.height = tempHeight;

        if (jump !== 0) {
          if (counter === jump) {
            counter = 0;
            await sleep(speed);
          }
          counter++;
        } else {
          await sleep(speed);
        }

        comparisonElement.style.backgroundColor = "black";
        currentElement.style.backgroundColor = "black";
      }

      j--;
    }

    buffer[j + 1] = key;
    const targetElement = document.getElementById((j + 1).toString());
    if (targetElement) {
      targetElement.style.height = keyHeight;
    }

    setData(buffer);
  }

  greenLayer(data);
  inputOn();
}

export default insertionSort;
