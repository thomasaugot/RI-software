export async function getAudioLevels(file: File | Blob): Promise<number[]> {
  const audioCtx = new AudioContext();
  const buffer = await file.arrayBuffer();
  const audioBuffer = await audioCtx.decodeAudioData(buffer);

  const source = audioCtx.createBufferSource();
  source.buffer = audioBuffer;
  const analyser = audioCtx.createAnalyser();
  source.connect(analyser);
  analyser.minDecibels = -90;
  analyser.maxDecibels = -10;
  analyser.fftSize = 2048;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  source.start(0);

  const levels: number[] = [];

  while (audioCtx.currentTime < audioBuffer.duration) {
    analyser.getByteFrequencyData(dataArray);
    const sum = dataArray.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / dataArray.length;
    const scaledLevel = Math.floor((avg / 255) * 100);
    levels.push(scaledLevel);
  }

  source.stop();
  return levels;
}
