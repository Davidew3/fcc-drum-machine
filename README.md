# FreeCodeCamp React 17 Applicaiton with Bootstrap

### Description

This is a React 17.0.02 version application. The styling is done with Bootstrap CDN and a styles.css for my custom variables. You can use any bootstrap variables as long as you include !Important before closing. I only overrode one variable, the --bs-body-bg: color, because the others I was ok with what bootstrap already had set. To illustrate how to incorporate bs variables AND my own variables I included some here: Notice how the Bootstrap vars all start with --bs my custom vars start with --clr or --fcc for a specific FreeCodeCamp color. The app allows you to make drum sounds by clicking one of the buttons or the associated keyboard key. It is not fancy at all but it is fun to build.

```CSS
html {
	--fcc-blue: rgb(30, 48, 80);//This is mine
	--bs-body-bg: #0dcaf0 !important;//This is an override
	--bs-header-bg: #0a94b6;//This was preset bootstrap
	--clr-display-bg: linear-gradient(145deg, #f0f0f0, #cacaca);//This is mine set up for background NOT background color.
	--clr-controls-border: #aacbd3;//My border
	--clr-dpad-box-shadow: 0.2rem 0.2rem 0.6rem #bebebe,
		-0.2rem -0.2rem 0.6rem #ffffff;//My box-shadow
	margin: 0;
	box-sizing: border-box;
	--bs-body-font-size: (10px + 2vmin);
	--bs-font-sans-serif: system-ui, -apple-system, 'Segoe UI', Roboto,
		'Helvetica Neue', 'Noto Sans', 'Liberation Sans', Arial, sans-serif,
		'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
	--bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
		'Liberation Mono', 'Courier New', monospace;
}
```

### Installation

To install the application, follow these steps:

Clone the repository: git clone https://github.com/Davidew3/daily-quote-app.git
Navigate into the project directory: cd fcc-drum-machine
Install the dependencies: npm install
Your ready to run: npm start
