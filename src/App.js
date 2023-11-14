import React from 'react';
import audioClips from "./audioClips"
import Pad from './Components/Pad';
import "./styles.css"

export default function App() {
    const [volume, setVolume] = React.useState(1);
    const [recording, setRecording] = React.useState("");
    const [speed, setSpeed] = React.useState(0.5)

    const playRecording = ()=>{
        let index = 0;
        let recordArray = recording.split(" ");
        const interval = setInterval(()=>{
            const audioTag = document.getElementById(recordArray[index]);
            audioTag.volume = volume;
            audioTag.currentTime = 0;
            audioTag.play();
            index++;
        },speed * 600);
        setTimeout(()=>clearInterval(interval),600*speed*recordArray.length-1)
    }

    return (
      <div className="bg-info min-vh-100 text-black" id="drum-machine">
        <div className="text-center" id="display">
          <h2>Drum Machine</h2>

          {audioClips.map((clip) => (
            <Pad key={clip.id} clip={clip}volume={volume} setRecording={setRecording}/>
          ))}
          <br/>

          <h4>Volume</h4>
          <input type="range" step="0.01" value={volume} onChange={(e)=>setVolume(e.target.value)} max="1" min="0" className="w-50"/>
          <h3>{recording}</h3>
          {recording && 
            <>
                <button onClick={playRecording} className="btn btn-success m-2">Play</button>
                <button onClick={()=>setRecording("")} className="btn btn-danger m-2">Clear</button>
                <br/>
                
                <h4>Speed</h4>
                <input type="range" step="0.01" value={speed} onChange={(e)=>setSpeed(e.target.value)} max="1.2" min="0.1" className="w-50"/>
            </>
          }
        </div>
        <h5 className="text-center mt-5">By Kalutu Daniel</h5>
      </div>
    );
  }

