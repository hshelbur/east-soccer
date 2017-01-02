import React from 'react'
import ReactDOM from 'react-dom'
import Roster from './roster'
import Home from './home'

class App extends React.Component {
	constructor (){
		super();
		this.state = {page: 'home'};
	}

	render(){
		const {page} = this.state

		return <div>
			<a onClick={() => this.setState({page: 'home'})}>Home</a>
			<a onClick={() => this.setState({page: 'roster'})}>Roster</a>
			{page === 'home' && <Home />}
			{page === 'roster' && <Roster />}
		</div>
	}
}

ReactDOM.render(
	<App />,
	document.getElementById("app")
)