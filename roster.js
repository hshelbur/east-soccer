const Masthead = props =>
	<div className="container fluid">
		<div className="jumbotron">
			<h2 className="text-center">{props.label}</h2>
		</div>
	</div>

const Button = props =>
	<button onClick={props.onClick}  type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off">
 		{props.label}
	</button>

const CreatePlayerForm = props =>
	<div className="well well-sm">
		<form className="PlayerForm">
			<input type='text' placeholder='Name' value={props.name} />
			<input type='text' placeholder='Year' value={props.year} />
			<input type='text' placeholder='Position' value={props.position} />
			<Button label='Add Player' />
		</form>
	</div>


const PlayerProfile = props =>
	<div className="well well-sm">
		<p className="text-center">{props.name}</p>		
		<img className="col-md-3" src="http://www.alvechurchlions.com/wp-content/uploads/2012/09/player_blank.jpeg" height="80" width="80" />
		<p>Year: {props.year}</p>
		<p>Position: {props.position}</p>
		<Button onClick={props.onClick} label={props.selected ? "Remove Player" : "Add Player"} />
	</div>


class PlayerLists extends React.Component {
	constructor (){
		super();
		this.state = {
			selected: [],
			unselected: []
		};
		this.addPlayer = this.addPlayer.bind(this);
		this.removePlayer = this.removePlayer.bind(this);
	}

	componentWillMount(){
		this.setState({unselected: this.props.players})
	}

	addPlayer(player){
		var selected = this.state.selected.concat(player);
		var unselected = this.state.unselected.slice();
		unselected.splice(unselected.indexOf(player), 1)
		this.setState({selected, unselected})

	}

	removePlayer(player){
		var unselected = this.state.unselected.concat(player);
		var selected = this.state.selected.slice();
		selected.splice(selected.indexOf(player), 1)
		this.setState({unselected, selected})
	}

	render(){
		return <div>
			<div className="col-md-4">
				<h4 className="text-center">Roster</h4>
					
				{this.state.unselected.map(player =>
					<PlayerProfile onClick={() => this.addPlayer(player)} key={player.id} name={player.name} year={player.year} position={player.position} />
				)}
			
			</div>

			<div className="col-md-4">
				<h4 className="text-center">Selected Players</h4>
				{this.state.selected.map(player =>
					<PlayerProfile onClick={() => this.removePlayer(player)} selected key={player.id} name={player.name} year={player.year} position={player.position} />
				)}
			</div>
		</div>
	}
}

const PLAYERS = [{id: "4", name: "Howard Shelburne", position: "Fucking Anywhere", year: "Pretty Damn Old"},
				{id: "1", name: "Erin Turingan", position: "Cute Girl on the Field", year: "Forever Young"},
				{id: "10", name: "Lionel Messi", position: "Dominance", year: "28"}]


ReactDOM.render(
	<div>
		<Masthead label="Voyager Academy Men's Soccer"/>
		<CreatePlayerForm />

		<PlayerLists players={PLAYERS} />

	</div>,

	document.getElementById("app")
)