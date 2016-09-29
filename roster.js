const Button = props =>
	<button onClick={props.onClick}  type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
 		{props.label}
	</button>



class PlayerProfile extends React.Component {
	constructor () {
		super();
		this.state = {
			selected: false
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({selected: !this.state.selected});
	}	
	render() {
			
			if(!this.state.selected) {
				return <div className="well well-sm">						
					<p className="text-center">{this.props.name}</p>
					<img className="col-md-3" src="http://www.alvechurchlions.com/wp-content/uploads/2012/09/player_blank.jpeg" height="80" width="80" />
					<p>Year: {this.props.year}</p>
					<p>Position: {this.props.position}</p>
					<Button label="Add Player" onClick={this.handleClick} />
				</div>}
			else{
				return <div className="well well-sm">						
					<p className="text-center">{this.props.name}</p>
					<img className="col-md-3" src="http://www.alvechurchlions.com/wp-content/uploads/2012/09/player_blank.jpeg" height="80" width="80" />
					<p>Year: {this.props.year}</p>
					<p>Position: {this.props.position}</p>
					<Button label="Remove Player" onClick={this.handleClick} />
				</div>	
				}
	}
}

const Masthead = props =>
	<div className="container fluid">
		<div className="jumbotron">
			<h2 className="text-center">{props.label}</h2>
		</div>
	</div>



ReactDOM.render(
	<div>
		<Masthead label="Voyager Academy Men's Soccer"/>

		<div className="col-md-4">
			<h4 className="text-center">Roster</h4>
			<PlayerProfile className="column" name="Howard Shelburne" year="Pretty Damn Old" position="Fucking Anywhere"/>
			<PlayerProfile className="column" name="Erin Turingan" year="Forever Young" position="Cute Girl on the field"/>
			<PlayerProfile className="column" name="Lionel Messi" year="28" position="Dominance"/>
		</div>

		<div className="col-md-4">
			<h4 className="text-center">Selected Players</h4>
		</div>

	</div>,

	document.getElementById("app")
)