import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
	render() {
		return (
			<button className="square">
				{/* TODO */}
			</button>
		);
	}
}

class Board extends React.Component {
	renderSquare(i) {
		return <Square />;
	}

	render() {
		const status = 'Next player: X';

		return (
			<div>
				<div className="status">{status}</div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

class Game extends React.Component {
	render() {
		return (
			<div class="wrapper">
				<div className="game">
					<div className="game-board">
						<Board />
					</div>
					<div className="game-info">
						<div>{/* status */}</div>
						<ol>{/* TODO */}</ol>
					</div>
				</div>
				<div class="not-game"></div>
			</div>
		);
	}
}

// ========================================

ReactDOM.render(
	<Game />,
	document.getElementById('root')
);

// ========================================
// my examples!!!!

/* Recall:

ReactDOM.render(
	React.createElement(
		'div',
		null,
		innerHTML
	),
	parentElement
); 

*/

ReactDOM.render(
	// create element -> JSX syntax
	<h1>Hi we are testing things out ok!!!</h1>,
	document.querySelector('.not-game')
);