import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import { useState } from "react";

function App() {
    const [textToCopy, setTextToCopy] = useState("");
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration: 1000
    });

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null;
    }

    const handleCopyClick = () => {
        setTextToCopy(transcript);
        setCopied();
    };

    const handleClearClick = () => {
        resetTranscript();
        setTextToCopy("");
    };

    return (
        <div>
            <Header />
            <div className="container">
                <h2>Speech to Text Converter</h2>
                <br />
                <p>A React hook that converts speech from the microphone to text.</p>

                <div className="main-content" onClick={() => setTextToCopy(transcript)}>
                    {transcript}
                </div>

                <div className="btn-style">
                    <button onClick={handleCopyClick}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </button>
                    <button onClick={startListening}>Start Listening</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
                    <button onClick={handleClearClick}>Clear Text</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
