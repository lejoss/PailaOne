import React, { useState } from 'react';
import { synth, start } from "./services/synt";
import Panel from "./components/Panel";
import Case from "./components/Case";
import WavesControls from "./components/Waveforms";
import EnvelopControls from "./components/Envelops";
import Knoob from "./components/Knoob";
import Wave from "./components/Wave";
import Keyboard from "./components/Keyboard";
import Note from "./components/Note";
import WhiteKey from "./components/WhiteKey";
import BlackKey from "./components/BlackKey";
import './styles/app.css';


function App() {
  const [wave, setWave] = useState('sawtooth');
  async function onPlay(note) {
    start();
    synth.triggerAttackRelease(note, "8n");
  };

  function onSelectWaveform(waveform) {
    synth.oscillator.type = waveform;
    setWave(waveform);
  };

  function onChangeEnvelop({ name, value }) {
    if (name === 'attack') {
      synth.envelope[name] = value / 1000;
      return;
    }

    if (name === 'decay' || name === 'sustain') {
      synth.envelope[name] = value / 100;
      return;
    }
    synth.envelope[name] = value;
  }

  return (
    <div className="flex items-center justify-center bg-gray-900 h-screen">
      <Case>
        <Panel>
          <WavesControls activeWave={wave}>
            <Wave type="sawtooth" onClick={() => onSelectWaveform('sawtooth')} img="saw.png" />
            <Wave type="sine" onClick={() => onSelectWaveform('sine')} img="sine.png" />
            <Wave type="square" onClick={() => onSelectWaveform('square')} img="square.png" />
          </WavesControls>
          <EnvelopControls>
            <Knoob onChange={onChangeEnvelop} name="attack" label="A" value={synth.envelope.attack} />
            <Knoob onChange={onChangeEnvelop} name="decay" label="D" value={synth.envelope.decay} />
            <Knoob onChange={onChangeEnvelop} name="sustain" label="S" value={synth.envelope.sustain} />
            <Knoob onChange={onChangeEnvelop} name="release" label="R" value={synth.envelope.release} />
          </EnvelopControls>
        </Panel>
        <Keyboard>
          <Note>
            <WhiteKey note="C" onClick={() => onPlay('C4')} />
            <BlackKey note="C#" onPlay={() => onPlay('C#4')} />
          </Note>
          <Note>
            <WhiteKey note="D" onClick={() => onPlay('D4')} />
            <BlackKey note="D#" onClick={() => onPlay('D#4')} />
          </Note>
          <Note>
            <WhiteKey note="E" onClick={() => onPlay('E4')} />
          </Note>
          <Note>
            <WhiteKey note="F" onClick={() => onPlay('F4')} />
            <BlackKey note="F#" onClick={() => onPlay('F#4')} />
          </Note>
          <Note>
            <WhiteKey note="G" onClick={() => onPlay('G4')} />
            <BlackKey note="G#" onClick={() => onPlay('G#4')} />
          </Note>
          <Note>
            <WhiteKey note="A" onClick={() => onPlay('A4')} />
            <BlackKey note="A#" onClick={() => onPlay('A#4')} />
          </Note>
          <Note>
            <WhiteKey note="B" onClick={() => onPlay('B4')} />
          </Note>
        </Keyboard>
      </Case>
    </div>
  );
}

export default App;
