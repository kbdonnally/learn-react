/* FreeCodeCamp React Tutorial */

/* ---------------- Step 1: Hello World ---------------- */

// vanilla
var jsContainer = document.querySelector('#js-container');

jsContainer.innerHTML = `
	<div class="js__demo">
		Hello, world!
	</div>
`;

// React
var reactContainer = document.querySelector("#react-container");

// create item on page
ReactDOM.render(
	// tell me about ur item
	React.createElement(
		'div',
		{ className: "react__demo" },
		'Hello, React world!'
	),
	// and where to put ur item
	reactContainer
);

/* ----------------- Step 2: User Input ---------------- */

/* NB: overwriting old code */

/* ----------------- Step 3: Wrap in fxn --------------- */

var render = () => {
	// vanilla
	jsContainer.innerHTML = `
	<div class="js__demo">
		Hello! Enter text plz.
		<input type="text" placeholder="Vanilla JS" aria-label="User input field for Vanilla JavaScript example" />
		<p>${new Date()}</p>
	</div>
	`;

	// React
	ReactDOM.render(
		React.createElement(
			'div',
			{ className: 'react__demo' },
			'Hi ur in React now',
			React.createElement(
				'input',
				{
					type: 'text',
					placeholder: 'REACT TO MEEEEE'
				}
			),
			React.createElement(
				'p',
				null,
				new Date().toString()
			)
		),
		reactContainer
	);
};

setInterval(render, 1000);