import * as Tone from 'tone';
import { NoteType, getNote } from '../models/Note';
import { ToneSequence } from '../models/ToneSequence';

const coinSound: NoteType[] = [
  { ...getNote('si+1'), dur: '8n' },
  { ...getNote('mi+2'), dur: '4n' },
];

export function HelloMarioSe1() {
  const button = document.createElement('button');
  button.innerHTML = 'SE再生';
  document.body.appendChild(button);
  // テンポ
  Tone.getTransport().bpm.value = 200 * 4;
  button.addEventListener('click', () => {
    Tone.getTransport().start();
    setTimeout(() => {
      Tone.getTransport().stop();
    }, 1000);
  });
  new ToneSequence(coinSound);
}
