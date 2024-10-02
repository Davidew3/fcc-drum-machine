import React from 'react'

const Controls = ({ display, power, togglePower, volume, adjustVolume }) => {
	return (
		<div id='controls'>
			<div className='control-power' id='power-button'>
				<div className='form-check form-switch'>
					<label className='form-check-label' htmlFor='power-switch'>
						Power
						<input
							className='form-check-input'
							type='checkbox'
							role='switch'
							id='power-switch'
							checked={power}
							onChange={togglePower}
						/>
					</label>
				</div>
			</div>
			<div className='control-sound-description' id='audio-name'>
				{display}
			</div>
			<div className='control-volume' id='volume'>
				<label htmlFor='volume' className='form-label'>
					Volume
				</label>
				<input
					type='range'
					className='form-range'
					min='0'
					max='10'
					step='0.5'
					id='volume'
					value={volume}
					onChange={adjustVolume}
				/>
			</div>
		</div>
	)
}

export default Controls
