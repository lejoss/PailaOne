import React from 'react';

function Waves(props) {
	return (
		<div className="flex items-center justify-around flex-col w-20">
			{React.Children.map(props.children, child => {
				return React.cloneElement(child, { activeWave: props.activeWave })
			})}
		</div>
	)
}

export default Waves;
