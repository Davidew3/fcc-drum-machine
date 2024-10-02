// src/App.js
import React from 'react'
import Header from './components/Header'
import DrumMachine from './components/DrumMachine'

function App() {
	return (
		<div className='App'>
			<Header />
			<DrumMachine id='drum-machine' />
		</div>
	)
}

export default App
