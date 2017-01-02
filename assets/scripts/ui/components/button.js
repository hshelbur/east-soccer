import React from 'react'

const Button = props =>
	<button onClick={props.onClick}  type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off">
 		{props.label}
	</button>

export default Button