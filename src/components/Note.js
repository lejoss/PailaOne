import React from 'react';

function Note(props) {
	return (
		<div className="flex flex-1 relative">
			{props.children}
		</div>
	)
}

export default Note;
