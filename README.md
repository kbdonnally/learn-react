# Learning React

## Tutorials used:

- [Free Code Camp's Medium post](https://medium.freecodecamp.org/yes-react-is-taking-over-front-end-development-the-question-is-why-40837af8ab76) on why React is so popular.
	- Explains this to you by walking through the core concepts.
	- Excellent, rigorous approach wherein we prove by example that React is a hell of a lot more useful re. information structure and time than vanilla JS in some cases.
		- Same example done in both.

- [React's official tutorial](https://reactjs.org/tutorial/tutorial.html) to learn "real" syntax, use a local server, and create useful functionality.
	- By "real" syntax I mean the syntactic sugar on top of the React/ReactDOM methods we used in the FCC tutorial.

- React's docs are also useful and the folder with that title has code snippets etc. that I'm using to test out some of their examples

## Notes on getting set up

- I didn't wanna be stuck installing the full `create-react-app` any time I tested a code snippet, but did want to be able to practice using JSX

- Consulted Babel's docs on instruction from the "Introducing JSX" section of React's official docs, and installed the following:

```
# create package.json w/o answering any questions
npm init -y

# install babel's command line interface tool + react's presets
npm install --save-dev babel-cli babel-preset-react
```

*NB: presets, best I can tell, are sets of plugins for what Babel processes that someone else has put together. This one works for things I'll be using in React, like ES6 and JSX.*

- Then, create a file called `.babelrc` where you tell it what your presets are, so you don't have to call it every time in the command line.

- In `.babelrc`, put:

```
{
  "presets": ["react"]
}
```

### Compiling Babel to JS

- I moved my `main.js` file into a newly-created `src` directory, so I could output the compiled JS file to its old location.
	- This way, I wouldn't have to change my `<script>` tag in `index.html` at all

- Here's the CLI command I've settled on for compiling my file right now:

```
npx babel src -o main.js
```

*NB: I'm not watching the file right now. It's just reading the `src` folder, and outputting the contents into `main.js`.*

### Result

- If you run the command above, you should be able to load your plain HTML file in Chrome and successfully load React components. Excellent :)