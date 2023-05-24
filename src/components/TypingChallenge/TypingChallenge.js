import './TypingChallenge.css';

export const TypingChallenge = ({
    handleonType,
    timerValue,
    timerStarted,
    mistakes,
    selectedParagraph
}) => {
    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className='timer'>00:{timerValue < 10 ? `0${timerValue}` : timerValue}</p>
                <p className='timer-info'>{timerStarted ? '' : "Start your Typing Test Now !"}</p>
            </div>

            <div className="textarea-container">
                <div className="textarea-left ">
                    <textarea 
                       className='textarea'
                       disabled={true}
                       value={selectedParagraph}
                    />
                </div>
                <div className="textarea-right">
                    <textarea
                       onChange={(e) => handleonType(e.target.value)}
                       className = {mistakes <= 0 ? "textarea textarea-green" : "textarea textarea-red"}
                       placeholder='Start your Typing Here......'
                    />
                </div>
            </div>
        </div>
    )
}