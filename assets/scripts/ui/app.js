import React from 'react'
import ReactDOM from 'react-dom'
import Roster from './pages/roster'
import Home from './pages/home'
import Header from './layout/header'

class App extends React.Component {
	constructor (){
		super();
		this.state = {page: 'home'};
	}

	render(){
		const {page} = this.state

		return <div>
			<Header title='East Chapel Hill Girls Soccer'/>
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							<li className={page === 'home' && 'active'}><a onClick={() => this.setState({page: 'home'})}>Home</a></li>
							<li className={page === 'roster' && 'active'}><a onClick={() => this.setState({page: 'roster'})}>Roster</a></li>
						</ul>
					</div>
				</div>
			</nav>
			<div className='container'>	
				{page === 'home' && <Home />}
				{page === 'roster' && <Roster />}
			</div>
		</div>
	}
}

export default App