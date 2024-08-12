// reference: https://qiita.com/talow1/items/0ad112a698df7c21348d
import * as Tone from 'tone';
import { NoteType } from '../models/Note';
import { ToneSequence } from '../models/ToneSequence';

const melody: NoteType[] = [
  { note: 'F5', dur: '4n' },
  { note: 'F5', dur: '4n' },
  { note: 'F5', dur: '4n' },
  { note: 'F5', dur: '4n' },
  null,
  { note: 'D#5', dur: '4n' },
  null,
  { note: 'G5', dur: '4n' },
  null,
  { note: 'F5', dur: '2n' },
];
const base: NoteType[] = [
  { note: 'C5', dur: '4n' },
  { note: 'B4', dur: '4n' },
  { note: 'A#4', dur: '4n' },
  { note: 'A4', dur: '4n' },
  null,
  { note: 'G4', dur: '4n' },
  null,
  { note: 'A#4', dur: '4n' },
  null,
  { note: 'A4', dur: '2n' },
];

export function HelloSequence2() {
  const button = document.createElement('button');
  button.innerHTML = 'SE再生';
  document.body.appendChild(button);
  // テンポ(1分間に180回 * n刻む)
  Tone.getTransport().bpm.value = 180 * 3;
  button.addEventListener('click', () => {
    Tone.getTransport().start();
  });
  new ToneSequence(melody);
  new ToneSequence(base);
}
