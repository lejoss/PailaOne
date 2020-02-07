import React from 'react';

function Wave(props) {
	const isActive = props.activeWave === props.type;
	return (
		<button onClick={props.onClick}>
			<img className={`h-8 w-8 ${isActive ? 'bg-orange-200' : 'bg-orange-400' } rounded-full mb-1 p-1`} src={props.img} alt={props.type} />
		</button>
	)
}

export default Wave;
