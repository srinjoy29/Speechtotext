import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState } from "react";

function App() {
    const [transcript, setTranscript] = useState("");
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    const clearTranscript = () => {
        setTranscript("");
    };

    return (
        <div>
            <Header />
            <div className="container">
                <h2>Speech to Text Converter</h2>
                <br/>
                <p>A React hook that converts speech from the microphone to text.</p>

                <div className="main-content" onClick={() => setTranscript(transcript)}>
                    {transcript}
                </div>

                <div className="btn-style">
                    <button onClick={startListening}>Start Listening</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
                    <button onClick={clearTranscript}>Clear Text</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
