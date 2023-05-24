import { ChallengeDetailsCard } from '../ChallengeDetailsCard/ChallengeDetailsCard';
import { TypingChallenge } from '../TypingChallenge/TypingChallenge';
import './TypingChallengeContainer.css';

export const TypingChallengeContainer = ({
    handleonType,
    timerValue,
    timerStarted,
    selectedParagraph,
    words,
    characters,
    mistakes,
    accuracy
}) => {
    return(
        <div className="typing-challenge-container">
            <div className="details-container">
                {/* Words Typed */}
                <ChallengeDetailsCard
                    cardName="Words"
                    cardValue={words} />

                {/* Characters Typed */}
                <ChallengeDetailsCard
                    cardName="Characters"
                    cardValue={characters} />

                {/* Accuracy */}
                <ChallengeDetailsCard
                    cardName="Accuracy"
                    cardValue={accuracy} />
            </div>

            {/* Typing Challenge */}
            <div className="type-challenge-cont">
                <TypingChallenge
                    selectedParagraph = {selectedParagraph}
                    timerStarted = {timerStarted}
                    timerValue = {timerValue}
                    handleonType = {handleonType} 
                    mistakes={mistakes}
                />
            </div>
        </div>
  )
}