import React from 'react';

function BlackKey(props) {
	return (
		<div onClick={props.onClick} style={{ right: -5 }} className="z-10 absolute bg-black h-32 right-0">
			<p className="">{props.note}</p>
		</div>
	)
}

export default BlackKey;
