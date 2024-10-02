import React, { useState } from 'react'
import DrumPad from './DrumPad'
import Controls from './Controls'

const DrumMachine = () => {
	const [display, setDisplay] = useState('Press a Key to hear a sound')
	const [power, setPower] = useState(true)
	const [volume, setVolume] = useState(5)

	const updateDisplay = (soundName) => {
		setDisplay(soundName)
	}

	const togglePower = () => {
		setPower(!power)
		setDisplay(power ? 'Power Off' : 'Power On')
		setTimeout(() => setDisplay('Press a Key to hear a sound'), 1000)
	}

	const adjustVolume = (e) => {
		setVolume(e.target.value)
		setDisplay(`Volume: ${e.target.value}`)
		setTimeout(() => setDisplay('Press a Key to hear a sound'), 1000)
	}

	const drumPads = [
		{
			id: 'heater-1',
			audioSrc:
				'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3',
			keyTrigger: 'Q',
			dataKey: 81,
		},
		{
			id: 'heater-2',
			audioSrc:
				'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3',
			keyTrigger: 'W',
			dataKey: 87,
		},
		{
			id: 'heater-3',
			audioSrc:
				'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3',
			keyTrigger: 'E',
			dataKey: 69,
		},
		{
			id: 'heater-4',
			audioSrc:
				'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3',
			keyTrigger: 'A',
			dataKey: 65,
		},
		{
			id: 'clap',
			audioSrc:
				'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3',
			keyTrigger: 'S',
			dataKey: 83,
		},
		{
			id: 'open-hh',
			audioSrc:
				'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3',
			keyTrigger: 'D',
			dataKey: 68,
		},
		{
			id: 'kick-n-hat',
			audioSrc:
				'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3',
			keyTrigger: 'Z',
			dataKey: 90,
		},
		{
			id: 'kick',
			audioSrc:
				'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3',
			keyTrigger: 'X',
			dataKey: 88,
		},
		{
			id: 'closed-hh',
			audioSrc:
				'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3',
			keyTrigger: 'C',
			dataKey: 67,
		},
	]

	return (
		<div className='container-sm-md text-center' id='drum-machine'>
			<div id='display'>
				<div className='drum-pads'>
					{drumPads.map((pad) => (
						<DrumPad
							key={pad.id}
							id={pad.id}
							audioSrc={pad.audioSrc}
							keyTrigger={pad.keyTrigger}
							dataKey={pad.dataKey}
							updateDisplay={updateDisplay}
							power={power}
							volume={volume}
							className='drum-pad'
						/>
					))}
				</div>
				<Controls
					id='controls'
					display={display}
					power={power}
					togglePower={togglePower}
					volume={volume}
					adjustVolume={adjustVolume}
				/>
			</div>
		</div>
	)
}

export default DrumMachine
