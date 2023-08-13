import React, {useState, useRef, useCallback, useMemo} from 'react';
import './translate_voice.css' 


export default function Translate (){
  
  // The RecorderdAudio is to store Audio after started and stoped 
  const [recordedAudio, setRecordedAudio] = useState<Blob[]>([]);
  // The filename is for user to type inside of the input box so when files downloads, it maches to the filename
  const [filename, setFilename] = useState('');

  // The mediaRecorderRef for media recording the blob without rendering after pause
  const mediaRecorderRef = useRef<MediaRecorder|null>(null)
  const chunksRef = useRef<Blob[]>([])

  const recordedAudioMemo = useMemo(() => recordedAudio,[recordedAudio])

  

  const startRecording = ()=>{
    // First to get the media device and start recording (using navigator)
    navigator.mediaDevices.getUserMedia({audio:true})
    .then(stream =>{

      // Chunks get reset for current state and then moves so two different recordings are seperate
      chunksRef.current = []
      // Constructor function MediaRecorder and some properties are readonly and not able to modify https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder#constructor
      // Constructor creates to make sure the current media is recording the stream inputing to computer now
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      // activate how chucks goes to mediaRecorder
      // mediaRecorderRef is to copy current state of work and allows me to modifies it outside of Recorder for pause and stop
      mediaRecorder.addEventListener('dataavailable',handleDataAvailable);
      mediaRecorder.start();
    })
  }
  
  const stopRecording=()=>{
    const mediaRecorder =  mediaRecorderRef.current
    // Stop the current flow and stop track (each track since there are more than one track)
    if(mediaRecorder){
    mediaRecorder.stop()
    mediaRecorder.stream.getTracks().forEach(track=>track.stop())
  }
  };

  const saveRecording=()=>{
    // Saves the chunks to something computer can read for downloading and audio tag for play soundtrack
    const blob = new Blob(chunksRef.current, {type: 'audio/wav'})
    setRecordedAudio(prevRecrodedAudio =>{
      const updatededRecordedAudio = [...prevRecrodedAudio,blob].slice(-3);
      return updatededRecordedAudio
    }
      
      
      )
  };

 //[...prevRecrodedAudio,blob]

  // Since the Voice is a buffer size there it works as chunks of indivisuals
  // Uploading data into chunks of listRef
  const handleDataAvailable = ({data}:BlobEvent) =>{
    if (data.size>0){
      chunksRef.current.push(data)
    }
  };

  const downloadRecording = (blob:Blob, index:Number) =>{
    // Downloading Voice Recordings by blob(Which we stored in recordedAudio)
    if (recordedAudio){

      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = filename || `recording_${index}.wav`
      link.click();
    }
  };

  const playRecording = useCallback((blob:Blob) =>{
    const audio = new Audio();
    audio.src = URL.createObjectURL(blob);
    audio.play()

    audio.addEventListener('ended',()=>{
      URL.revokeObjectURL(audio.src)
    })
  },[])

  // Where the closure kicks in and helps in the task
  function keeping_track(){
    var index_count = 0
    
    return function inner_function(){
      index_count ++
      return index_count
    }
  }

  const incre = keeping_track()
 

  return( 

    <div className='full-page'>
    <div className='translate_container'>
  
    <button className='button-56'  onClick={startRecording}>Start Recording</button>
    <button className='button-56' onClick={stopRecording}>Stop Recording</button>
    <button className='button-56' onClick={saveRecording}>Save Recording</button>
    
   
    <input
      className='inputform'
      type="text"
      value={filename}
      onChange={e => setFilename(e.target.value)}
      placeholder="Enter custom filename"
    />
    </div>
    <div className='translate_container'>
    <div>
    {recordedAudio.length > 0 &&(
      
      <div >
        <h3>Saved Recorded Audio : </h3>
        <ul>
          {recordedAudioMemo.map((blob,index) =>(
            <li key={index}>
              <button onClick={()=>downloadRecording(blob,index)} className='button-56'>Download the recording{`${incre()}`}</button>
              <button onClick={()=>playRecording(blob)} className='button-56'>Play the soundtrack</button>
            </li>
          ))}
          
        </ul>
      </div>
    )}
    </div>
    </div>
    </div>


  )

}

