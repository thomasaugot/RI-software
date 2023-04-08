export const getAudioLevels =(blob: Blob): Promise<number[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const arrayBuffer = await blob.arrayBuffer();
      const audioCtx = new AudioContext();
      const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
      const source = audioCtx.createBufferSource();
      source.buffer = audioBuffer;

      const analyser = audioCtx.createAnalyser();
      analyser.minDecibels = -90;
      analyser.maxDecibels = -10;
      analyser.fftSize = 2048;
      source.connect(analyser);
      analyser.connect(audioCtx.destination);

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Float32Array(bufferLength);
      const levels: number[] = [];

      source.start();

      const intervalId = setInterval(() => {
        analyser.getFloatTimeDomainData(dataArray);
        const sum = dataArray.reduce((acc, curr) => acc + curr * curr, 0);
        const rms = Math.sqrt(sum / dataArray.length);
        const scaledLevel = Math.floor(Math.max(0, (20 * Math.log10(rms) + 90)) / 3);
        levels.push(scaledLevel);
      }, 500);

      source.addEventListener("ended", () => {
        clearInterval(intervalId);
        resolve(levels);
      });
    } catch (error) {
      reject(error);
    }
  });
}
