export async function getAudioLevels(blob: Blob): Promise<number[]> {
  const audioCtx = new AudioContext();
  const buffer = await blob.arrayBuffer();
  const audioBuffer = await audioCtx.decodeAudioData(buffer);

  const source = audioCtx.createBufferSource();
  source.buffer = audioBuffer;
  const analyser = audioCtx.createAnalyser();
  source.connect(analyser);
  analyser.minDecibels = -90;
  analyser.maxDecibels = -10;
  analyser.fftSize = 128;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  source.start(0);

  const levels = [];

  for await (const _ of Array.from({ length: Math.floor(audioBuffer.duration * audioBuffer.sampleRate / analyser.fftSize) })) {
    analyser.getByteFrequencyData(dataArray);
    const sum = dataArray.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / dataArray.length;
    const scaledLevel = Math.floor(avg / Math.pow(2, 8) * 100);
    levels.push(scaledLevel);
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  source.stop();

  return levels;
}
