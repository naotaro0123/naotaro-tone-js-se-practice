import * as Tone from 'tone';

const data = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];
const noteLengh = '4n';

export function HelloSequence1() {
  const button = document.createElement('button');
  button.innerHTML = '再生';
  document.body.appendChild(button);
  button.addEventListener('click', () => Tone.Transport.start());

  const synth = new Tone.Synth().toDestination();
  // https://tonejs.github.io/docs/13.8.25/Sequence
  // Tone.Sequence(callback: Function, event: Array, subdivision: Time)
  const sequence = new Tone.Sequence(
    (time, note) => {
      synth.triggerAttackRelease(note, noteLengh, time);
    },
    data,
    noteLengh,
  ).start(0);
  sequence.loop = false;
}
