

import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function App() {
    const [clearText, setClearText] = useState(false);
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null;
    }

    const stopListening = () => {
        SpeechRecognition.stopListening();
    };

    const clearTranscript = () => {
        setClearText(true);
    };

    return (
        <div>
            <Header />
            <div className="container">
                <h2>Speech to Text Converter</h2>
                <br />
                <p>A React hook that converts speech from the microphone to text.</p>

                <div className="main-content">
                    {clearText ? "" : transcript}
                </div>

                <div className="btn-style">
                    <button onClick={startListening}>Start Listening</button>
                    <button onClick={stopListening}>Stop Listening</button>
                    <button onClick={clearTranscript}>Clear Text</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
