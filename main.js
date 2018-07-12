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

// vanilla
jsContainer.innerHTML = `
<div class="js__demo">
	Hello! Enter text plz.
	<input type="text" placeholder="Vanilla JS" aria-label="User input field for Vanilla JavaScript example" />
</div>
`;