import React from 'react'

const Button = props => {
	var classes = [
	'btn',
	props.warning ? 'btn-warning' : 'btn-primary',
	]

	return <button onClick={props.onClick}  type="button" className={classes.join(' ')} data-toggle="button" aria-pressed="false" autoComplete="off">
 		{props.label}
	</button>
}

Button.propTypes = {
	onClick: React.PropTypes.func,
	label: React.PropTypes.string.isRequired,
	warning: React.PropTypes.bool,
}

export default Button

export const WarningButton = props =>
	<Button {...props} warning />