import React, { useEffect, useCallback } from 'react'

const DrumPad = ({
	id,
	audioSrc,
	keyTrigger,
	dataKey,
	updateDisplay,
	power,
	volume,
}) => {
	const playSound = useCallback(() => {
		if (power) {
			const audio = document.getElementById(keyTrigger)
			audio.currentTime = 0
			audio.volume = volume / 10
			audio.play()
			updateDisplay(id)
		}
	}, [keyTrigger, power, volume, updateDisplay, id])

	const handleKeyPress = useCallback(
		(e) => {
			if (e.keyCode === dataKey) {
				playSound()
				const button = document.getElementById(id)
				button.classList.add('active')
				setTimeout(() => button.classList.remove('active'), 100)
			}
		},
		[dataKey, id, playSound]
	)

	useEffect(() => {
		document.addEventListener('keydown', handleKeyPress)
		return () => {
			document.removeEventListener('keydown', handleKeyPress)
		}
	}, [handleKeyPress])

	return (
		<button id={id} className='drum-pad' onClick={playSound} data-key={dataKey}>
			{keyTrigger}
			<audio id={keyTrigger} src={audioSrc} className='clip' />
		</button>
	)
}

export default DrumPad
