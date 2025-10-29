import sleep from "./sleep";

async function greenLayer(
  data: number[]
): Promise<void> {
  const n = data.length;

  for (let i = 0; i < n; i++) {
    const element = document.getElementById(i.toString());
    if (element) {
      element.style.backgroundColor = "green";
    }
  }

  await sleep(250);

  for (let i = 0; i < n; i++) {
    const element = document.getElementById(i.toString());
    if (element) {
      element.style.backgroundColor = "black";
    }
  }
}

export default greenLayer;
