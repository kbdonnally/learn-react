(function () {

	// NB: any subsequent code snippets overwrite earlier ones

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
})();
