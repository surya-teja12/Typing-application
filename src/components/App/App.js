import React from 'react';
import './App.css';
import { TestContainer } from '../TestContainer/TestContainer';
import { typingTestData } from './../../data/source';
import {randomElementSelector} from './../../helper/randomSelector';
import { testDetailsCalculator } from '../../helper/testDetailsCalculator';



const defaultState = {
	timerStarted:false,
	timerValue:60,
	selectedParagaraph : randomElementSelector(typingTestData),
	detailsContainer: {
		words: 0,
		characters: 0,
		mistakes: 0,
		accuracy: 0
	}
}


class App extends React.Component {
	constructor () {
		super();

		this.state = defaultState
	}

	handleonType = (inputValue) => {
		console.log(inputValue)
		if(!this.state.timerStarted){
			this.startTimer();
		}
		this.setState({detailsContainer: testDetailsCalculator(this.state.selectedParagaraph, inputValue)})
	}

	triggerTryAgain = () => this.setState(defaultState)

	startTimer = () => {
		this.setState({ timerStarted:true })
		const timer = setInterval(() => {
			if(this.state.timerValue > 0){
				this.setState({ timerValue:this.state.timerValue - 1 })
			}else{
				clearInterval(timer);
			}
		},1000)
	}

	render() {
		return (
			<div className="app-container">
				<h1 className="main-heading">Speed Type Test</h1>
				<p className="main-heading-2">Find Your Typing Skills Here</p>
				<div className="test-container-main">
					<TestContainer 
					   timerStarted={this.state.timerStarted}
					   timerValue={this.state.timerValue}
					   handleonType={this.handleonType}
					   triggerTryAgain={this.triggerTryAgain}
					   selectedParagraph={this.state.selectedParagaraph}
					   words={this.state.detailsContainer.words}
					   characters={this.state.detailsContainer.characters}
					   mistakes={this.state.detailsContainer.mistakes}
					   accuracy= {this.state.detailsContainer.accuracy}
					/>
				</div>
			</div>
		)
	}
}

export default App;
