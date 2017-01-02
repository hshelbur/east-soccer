import React from 'react'

const Header = props =>
	<div className="container fluid">
		<div className="jumbotron">
			<h2 className="text-center">{props.title}</h2>
		</div>
	</div>

Header.propTypes = {
	title: React.PropTypes.string.isRequired,
}

export default Header
