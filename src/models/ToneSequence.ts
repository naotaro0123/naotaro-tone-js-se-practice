import * as Tone from 'tone';
import { NoteType } from '../models/Note';

export function ToneSequence(notes: NoteType[], loop = false, noteLength = '4n') {
  const synth = new Tone.Synth().toDestination();
  const sequence = new Tone.Sequence(
    (time, { note, dur }) => {
      synth.triggerAttackRelease(note, dur, time);
    },
    notes,
    noteLength,
  ).start(0);
  sequence.loop = loop;
}
