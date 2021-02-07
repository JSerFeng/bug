import { ref, watchEffect, Ref } from "vue"
const Fetch = (data: string): Promise<string> =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(data);
    }, 1000)
  );
export const useFetch = (url: Ref<string>) => {
  const data = ref<string | null>(null);
  const flag = ref(0);

  watchEffect(() => {
    flag.value = 0
    try {
      (async () => {
        data.value = await Fetch(url.value)
        flag.value = 1
      })()
    } catch (e) {
      data.value = e
      flag.value = 2
    }
  })
  return {
    data,
    flag
  }
};

export const useMousePos = () => {
  const posX = ref(0)
  const posY = ref(0)
  window.addEventListener("mousemove", (e) => {
    posX.value = e.clientX
    posY.value = e.clientY
  })
  return {
    x: posX,
    y: posY
  }
}