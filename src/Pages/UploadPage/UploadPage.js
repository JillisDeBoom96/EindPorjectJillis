import React from 'react';
import "./UploadPage.css";
import AudioPlayer from "../../componenten/audioPlayer/AudioPlayer";


function UploadPage({}) {
    return (
        <div className='demo-container'>
        <h1>Audio Player</h1>
            <AudioPlayer/>
        </div>
    );
}

export default UploadPage;