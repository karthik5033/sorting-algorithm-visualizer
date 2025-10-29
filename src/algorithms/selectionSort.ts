import sleep from "./sleep.ts";
import greenLayer from "./greenLayer";
import inputOn from "./inputOn";

async function selectionSort(
  data: number[],
  setData: (data: number[]) => void,
  speed: number,
  jump: number
): Promise<void> {
  let buffer = [...data];
  const n = buffer.length;
  let min: number;

  let counter = 0;
  let flag = 0;

  for (let i = 0; i < n; i++) {
    min = i;

    const currentElement = document.getElementById(i.toString());
    if (!currentElement) continue;
    currentElement.style.backgroundColor = "green";

    let minElement = document.getElementById(min.toString());
    if (!minElement) continue;
    minElement.style.backgroundColor = "red";

    for (let j = i + 1; j < n; j++) {
      flag = 0;
      const swapCheck = document.getElementById(j.toString());
      if (!swapCheck) continue;

      swapCheck.style.backgroundColor = "red";

      if (buffer[j] < buffer[min]) {
        if (minElement) {
          minElement.style.backgroundColor = "black";
        }
        min = j;
        minElement = document.getElementById(min.toString());
        if (minElement) {
          minElement.style.backgroundColor = "red";
        }
        flag = 1;
      }

      const positionElement = document.getElementById(i.toString());
      if (positionElement) {
        positionElement.style.backgroundColor = "green";
      }

      if (jump !== 0) {
        if (counter === jump) {
          counter = 0;
          await sleep(speed);
        }
        counter++;
      } else {
        await sleep(speed);
      }

      if (flag === 0 && swapCheck) {
        swapCheck.style.backgroundColor = "black";
      }
    }

    if (min !== i) {
      const x = document.getElementById(min.toString());
      const y = document.getElementById(i.toString());

      if (x && y) {
        const temp = buffer[min];
        buffer[min] = buffer[i];
        buffer[i] = temp;

        const tempHeight = x.style.height;
        x.style.height = y.style.height;
        y.style.height = tempHeight;

        setData(buffer);
      }
    }

    const finalCurrentElement = document.getElementById(i.toString());
    if (finalCurrentElement) {
      finalCurrentElement.style.backgroundColor = "black";
    }

    if (minElement) {
      minElement.style.backgroundColor = "black";
    }
  }

  greenLayer(data);
  inputOn();
}

export default selectionSort;
