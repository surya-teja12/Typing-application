import { TypingChallengeContainer } from '../TypingChallengeContainer/TypingChallengeContainer';
import { TryAgain } from '../TryAgain/TryAgain';
import './TestContainer.css'

export const TestContainer = ({
    handleonType,
    timerValue,
    timerStarted,
    triggerTryAgain,
    selectedParagraph,
    words,
    characters,
    mistakes,
    accuracy
}) => {
    return(
        <div className="test-container">
            {/* Show the try again or start screen */}
            {
                timerValue > 0
                    ? <div className="typing-challenge-cont">
                        <TypingChallengeContainer
                           timerValue={timerValue}
                           timerStarted={timerStarted}
                           handleonType={handleonType}
                           selectedParagraph={selectedParagraph}
                           words = {words}
                           characters = {characters}
                           mistakes={mistakes}
                           accuracy = {accuracy}
                        />
                    </div>
                    : <div className="try-again-cont">
                        <TryAgain 
                           triggerTryAgain={triggerTryAgain}
                           words = {words}
                           characters = {characters}
                           accuracy = {accuracy}
                        />
                    </div>
            }            
        </div>
    )
}