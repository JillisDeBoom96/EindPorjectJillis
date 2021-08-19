import React from 'react';

function AudioPlayer({}) {
    return (
        <div className="audio-container">
            <div className="progress-bar-cover"></div>
            <div className="thumb"></div>
            <input type="range" step="0.01" className="range"/>
        </div>
    );
}

export default AudioPlayer;