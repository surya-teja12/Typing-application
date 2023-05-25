import './TryAgain.css';

export const TryAgain = ({
    triggerTryAgain,
    words,
    characters,
    mistakes,
    accuracy
}) => {
    return (
        <div className="try-again-container">
            <h1>Test Results</h1>

            <div className="result-container">
                {/* Test Results */}
                <p className='tryagain-text'><span className='span-text'>Characters: </span>{characters}</p>
                <p className='tryagain-text'><span className='span-text'>Speed: </span>{words}WPM</p>
                <p className='tryagain-text'><span className='span-text'>Accuracy: </span>{accuracy}</p>
            </div>

            <button
            onClick={() => triggerTryAgain()}
            className="start-again-btn">
                Start Again
            </button>
        </div>
    )
}
