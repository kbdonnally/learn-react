(function() {

// NB: any subsequent code snippets overwrite earlier ones

/* ------------- 1. INTRO TO JSX ------------- */

// function
const formatName = user => { 
	user.firstName + ' ' + user.lastName
};

// input object
const user = {
	firstName: 'Seb',
	lastName: 'Gorka'
};

// JSX w/ embedded expression
const greeting = (
	<h1>
	Hello, {formatName(user)}!
	</h1>
);

ReactDOM.render(
	greeting,
	document.getElementById('root')
);

})();