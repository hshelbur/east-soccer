const Button = props =>
	<button onClick={props.onClick}  type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off">
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


const PlayerLists = props =>
	<div>
		<div className="col-md-4">
			<h4 className="text-center">Roster</h4>
				
			{props.players.map(function(player){
				return <PlayerProfile key={player.id} name={player.name} year={player.year} position={player.position} />
			})}
		
		</div>

		<div className="col-md-4">
			<h4 className="text-center">Selected Players</h4>
		</div>
	</div>

const PLAYERS = [{id: "4", name: "Howard Shelburne", position: "Fucking Anywhere", year: "Pretty Damn Old"},
				{id: "1", name: "Erin Turingan", position: "Cute Girl on the Field", year: "Forever Young"},
				{id: "10", name: "Lionel Messi", position: "Dominance", year: "28"}]

ReactDOM.render(
	<div>
		<Masthead label="Voyager Academy Men's Soccer"/>

		<PlayerLists players={PLAYERS} />

	</div>,

	document.getElementById("app")
)