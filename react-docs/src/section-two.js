if (document.querySelector('.section-two')) {

	/* ---------- 1. CLASS-BASED COMPONENT ----------- */

	// ES6 subclass definition
	class Clock extends React.Component {
		constructor(props) {
			super(props);
			this.state = { date: new Date() };
		}

		// lifecycle methods
		componentDidMount() {
			this.timerID = setInterval(
				() => this.tick(),
				1000
			);
		}

		componentWillUnmount() {
			clearInterval(this.timerID);
		}

		// timer
		tick() {
			this.setState({
				date: new Date()
			});
		}

		// UI info
		render() {
			return (
				<div>
					<h1>Hi, hello</h1>
					<h3>What time is it? PARTY TI-<br/>
					... no wait it's {this.state.date.toLocaleTimeString()}</h3>
				</div>
			);
		}
	} // end class

	// render onscreen
	ReactDOM.render(
		<Clock />,
		document.getElementById('root')
	);
}
/* end of section */