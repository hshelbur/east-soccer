import React from 'react'
import Training from './pages/training'
import Header from './layout/header'

class App extends React.Component {
	constructor (){
		super();
		this.state = {page: 'training'};
	}

	render(){
		const {page} = this.state

		return <div>
			<Header title='East Chapel Hill Girls Soccer'/>
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							<li className={page === 'training' && 'active'}><a onClick={() => this.setState({page: 'training'})}>Training</a></li>
						</ul>
					</div>
				</div>
			</nav>
			<div className='container'>	
				{page === 'training' && <Training />}
			</div>
		</div>
	}
}

export default App