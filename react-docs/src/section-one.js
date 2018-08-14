// NB: any subsequent code snippets overwrite earlier ones

if (document.querySelector('.section-one')) {
	/* ------------- 1. INTRO TO JSX ------------- */

	// function
	const formatName = user => { 
		return user.firstName + ' ' + user.lastName
	};

	// input object
	const user = {
		firstName: 'Seb',
		lastName: 'Gorka'
	};

	// JSX w/ embedded expression
	const greeting = (
		<h1 className='react__demo'>
		Hello, {formatName(user)}!
		</h1>
	);

	ReactDOM.render(
		greeting,
		document.getElementById('root')
	);

	/* ------------- 2. USING W/ FUNCTIONS ------------- */

	// conditionals
	function getGreeting(user) {
		if (user.lastName == 'Gorka') {
			return <h1>You are a Nazi, {user.firstName} {user.lastName}.</h1>;
		}
		else {
			return <h1>Heeeyyyyyy {formatName(user)}</h1>;
		}
	}

	ReactDOM.render(
		getGreeting(user),
		document.getElementById('root')
	);

	/* ------------- 3. UPDATING RENDERED ELEMS ------------- */

	// create div displaying time
	function tick() {
		const elem = (
			<div>
				<h1>Hi!!!</h1>
				<h2>The time rn is {new Date().toLocaleTimeString()}. :)</h2>
			</div>
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
		return <h1>Hi {props.name}!</h1>;
	}

	// compose components
	function App() {
		return (
			<div>
				<Welcome name="A" />
				<Welcome name="B" />
				<Welcome name="C" />
			</div>
		);
	}

	// render whole thing
	ReactDOM.render(
		<App />,
		document.getElementById('not-root')
	);
}