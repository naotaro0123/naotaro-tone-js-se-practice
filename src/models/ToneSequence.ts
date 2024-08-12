import * as Tone from 'tone';
import { NoteType } from '../models/Note';

export function ToneSequence(notes: NoteType[], loop = false, noteLengh = '4n') {
  const synth = new Tone.Synth().toDestination();
  const sequence = new Tone.Sequence(
    (time, { note, dur }) => {
      synth.triggerAttackRelease(note, dur, time);
    },
    notes,
    noteLengh,
  ).start(0);
  sequence.loop = loop;
}
