import * as Tone from 'tone';

const SCALE_NAMES = {
  C4: 'ド',
  D4: 'レ',
  E4: 'ミ',
  F4: 'ファ',
  G4: 'ソ',
  A4: 'ラ',
  B4: 'シ',
  C5: 'ド',
};
const scaleKeys = Object.keys(SCALE_NAMES);
const scaleValues = Object.values(SCALE_NAMES);

export function HelloWorld() {
  let isReverse = false;
  let index = 0;

  const button = document.createElement('button');
  button.innerHTML = scaleValues[index];
  document.body.appendChild(button);

  const synth = new Tone.Synth().toDestination();

  button.addEventListener('click', () => {
    // synth.triggerAttackRelease('音階名', '音符の長さ[8n = 8分音符]')
    synth.triggerAttackRelease(scaleKeys[index], '8n');
    if (index === 0) {
      isReverse = false;
    } else if (index >= scaleKeys.length - 1) {
      isReverse = true;
    }
    isReverse ? --index : ++index;
    button.innerHTML = scaleValues[index];
  });
}
