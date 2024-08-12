import * as Tone from 'tone';
import { NoteType, getNote } from '../models/Note';
import { ToneSequence } from '../models/ToneSequence';

const damageSound: NoteType[] = [
  { ...getNote('ra-1'), dur: '8n' },
  { ...getNote('mi-1'), dur: '8n' },
  { ...getNote('ra-2'), dur: '8n' },
  null,
  { ...getNote('ra-1'), dur: '8n' },
  { ...getNote('mi-1'), dur: '8n' },
  { ...getNote('ra-2'), dur: '8n' },
  null,
  { ...getNote('ra-1'), dur: '8n' },
  { ...getNote('mi-1'), dur: '8n' },
  { ...getNote('ra-2'), dur: '8n' },
  null,
];

export function HelloMarioSe2() {
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
  new ToneSequence(damageSound);
}
