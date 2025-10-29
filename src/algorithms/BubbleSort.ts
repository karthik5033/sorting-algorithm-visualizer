import sleep from "./sleep.ts";
import greenLayer from "./greenLayer.ts";
import inputOn from "./inputOn.ts";

async function BubbleSort(
  data: number[],
  setData: (data: number[]) => void,
  speed: number,
  jump: number
) {
  let buffer = [...data];
  let counter = 0;
  const n = buffer.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (buffer[j] > buffer[j + 1]) {
        const x = document.getElementById(j.toString());
        const y = document.getElementById((j + 1).toString());

        if (x) x.style.backgroundColor = "red";
        if (y) y.style.backgroundColor = "red";

        const tempHeight = x ? x.style.height : "";
        if (x && y) {
          x.style.height = y.style.height;
          y.style.height = tempHeight;
        }

        // Swap actual values
        const temp = buffer[j];
        buffer[j] = buffer[j + 1];
        buffer[j + 1] = temp;

        // Delay based on speed + jump logic
        if (jump !== 0) {
          if (counter === jump) {
            counter = 0;
            await sleep(speed);
          }
          counter++;
        } else {
          await sleep(speed);
        }

        if (x) x.style.backgroundColor = "black";
        if (y) y.style.backgroundColor = "black";

        setData([...buffer]);
      }
    }
  }

  greenLayer(data);
  inputOn();
}

export default BubbleSort;
