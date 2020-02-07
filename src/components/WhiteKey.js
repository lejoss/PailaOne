import React from 'react';

function WhiteKey(props) {
	return (
		<div onClick={props.onClick} className="flex flex-1 justify-center items-end mr-1 bg-white h-full">
			<p className="">{props.note}</p>
		</div>
	)
}

export default WhiteKey;
