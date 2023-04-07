export function getAudioLevels(blob: Blob): Promise<number[]> {
  return new Promise((resolve, reject) => {
    const audio = new Audio(URL.createObjectURL(blob));
    audio.addEventListener("canplaythrough", () => {
      const audioCtx = new AudioContext();
      const source = audioCtx.createMediaElementSource(audio);
      const analyser = audioCtx.createAnalyser();
      analyser.minDecibels = -90;
      analyser.maxDecibels = -10;
      analyser.fftSize = 2048;
      source.connect(analyser);
      analyser.connect(audioCtx.destination);

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      const levels: number[] = [];

      const intervalId = setInterval(() => {
        analyser.getByteFrequencyData(dataArray);
        const sum = dataArray.reduce((acc, curr) => acc + curr, 0);
        const avg = sum / dataArray.length;
        const scaledLevel = Math.floor((avg / 255) * 25) + 5;
        levels.push(scaledLevel);
      }, 500);

      audio.addEventListener("ended", () => {
        clearInterval(intervalId);
        resolve(levels);
      });

      audio.play();
    });
    audio.addEventListener("error", reject);
  });
}
