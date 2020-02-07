import React from 'react';

function Panel(props) {
	return <div className="flex w-full bg-orange-900 h-auto p-2 mb-1">{props.children}</div>
}

export default Panel;
