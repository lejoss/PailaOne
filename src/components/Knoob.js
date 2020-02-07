import React from 'react';
import { CircleSlider } from "react-circle-slider";

function Knoob(props) {
	return (
		<div className="text-center">
			<p className="text-orange-200 bold">{props.label}</p>
			<CircleSlider
				size={65}
				knobRadius={9}
				knobColor={'#feebc8'}
				circleColor={'#f6ad55'}
				circleWidth={5}
				progressWidth={10}
				progressColor={'#feebc8'}
				value={props.value}
				onChange={value => props.onChange({ name: props.name, value })}
			/>
		</div>
	)
}

export default Knoob;

