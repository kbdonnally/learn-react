(function() {

// NB: any subsequent code snippets overwrite earlier ones

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

})();