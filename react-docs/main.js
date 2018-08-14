// NB: any subsequent code snippets overwrite earlier ones

if (document.querySelector('.section-one')) {
	/* ------------- 1. INTRO TO JSX ------------- */

	// function
	const formatName = user => {
		return user.firstName + ' ' + user.lastName;
	};

	// input object
	const user = {
		firstName: 'Seb',
		lastName: 'Gorka'
	};

	// JSX w/ embedded expression
	const greeting = React.createElement(
		'h1',
		{ className: 'react__demo' },
		'Hello, ',
		formatName(user),
		'!'
	);

	ReactDOM.render(greeting, document.getElementById('root'));

	/* ------------- 2. USING W/ FUNCTIONS ------------- */

	// conditionals
	function getGreeting(user) {
		if (user.lastName == 'Gorka') {
			return React.createElement(
				'h1',
				null,
				'You are a Nazi, ',
				user.firstName,
				' ',
				user.lastName,
				'.'
			);
		} else {
			return React.createElement(
				'h1',
				null,
				'Heeeyyyyyy ',
				formatName(user)
			);
		}
	}

	ReactDOM.render(getGreeting(user), document.getElementById('root'));

	/* ------------- 3. UPDATING RENDERED ELEMS ------------- */

	// create div displaying time
	function tick() {
		const elem = React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				'Hi!!!'
			),
			React.createElement(
				'h2',
				null,
				'The time rn is ',
				new Date().toLocaleTimeString(),
				'. :)'
			)
		);
		ReactDOM.render(elem, document.getElementById('root'));
	}
	// update 1x/second
	setInterval(tick, 1000);

	/* TAKEAWAY:
  * only the date displayed changes in browser DOM,
  * even tho we're "creating" a whole new UI */

	/* ------------- 4. INTRO TO COMPONENTS ------------- */

	// functional component
	function Welcome(props) {
		return React.createElement(
			'h1',
			null,
			'Hi ',
			props.name,
			'!'
		);
	}

	// compose components
	function App() {
		return React.createElement(
			'div',
			null,
			React.createElement(Welcome, { name: 'A' }),
			React.createElement(Welcome, { name: 'B' }),
			React.createElement(Welcome, { name: 'C' })
		);
	}

	// render whole thing
	ReactDOM.render(React.createElement(App, null), document.getElementById('not-root'));
}
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
			this.timerID = setInterval(() => this.tick(), 1000);
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
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					'Hi, hello'
				),
				React.createElement(
					'h3',
					null,
					'What time is it? PARTY TI-',
					React.createElement('br', null),
					'... no wait it\'s ',
					this.state.date.toLocaleTimeString()
				)
			);
		}
	} // end class

	// render onscreen
	ReactDOM.render(React.createElement(Clock, null), document.getElementById('root'));
}
/* end of section */
