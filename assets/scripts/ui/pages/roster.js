import axios from 'axios'
import React from 'react'
import Button, {WarningButton} from '../components/button'

const PlayerProfile = props =>
	<div className="well well-sm">
		<p className="text-center">#{props.number} {props.name}</p>		
		<img className="col-md-3" src="http://www.alvechurchlions.com/wp-content/uploads/2012/09/player_blank.jpeg" height="80" width="80" />
		<p>Year: {props.year}</p>
		<p>Position: {props.position}</p>
		<Button onClick={props.togglePlayer} label={props.selected ? "Remove Player" : "Add Player to Starting 11"} />
		<WarningButton onClick={props.deletePlayer} label='Delete Player' />
	</div>

PlayerProfile.propTypes = {
	number: React.PropTypes.number.isRequired,
	name: React.PropTypes.string.isRequired,
	year: React.PropTypes.string.isRequired,
	position: React.PropTypes.string.isRequired,
	togglePlayer: React.PropTypes.func.isRequired,
	deletePlayer: React.PropTypes.func.isRequired,
}

class AddTeamForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {name: ''}
	}

	render(){
		const team={name: this.state.name}

		return <div className="well well-sm">
			<form className="TeamForm">
				<input type='text' placeholder='Team Name' value={this.state.name} onChange={e => this.setState({name : e.target.value})} />
				<Button onClick={() => this.props.addNewTeam(team)} label='Add New Team' />
			</form>
		</div>
	}
}

class AddPlayerForm extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {number: '', name: '', year: '', position: ''};
  	}

	render(){
		const player={number: this.state.number, name: this.state.name, year: this.state.year, position: this.state.position}

		return <div className="well well-sm">
			<form className="PlayerForm">
				<input type='text' placeholder='Number' value={this.state.number} onChange={e => this.setState({number : e.target.value})} />
				<input type='text' placeholder='Name' value={this.state.name} onChange={e => this.setState({name : e.target.value})} />
				<input type='text' placeholder='Year' value={this.state.year} onChange={e => this.setState({year : e.target.value})} />
				<input type='text' placeholder='Position' value={this.state.position} onChange={e => this.setState({position : e.target.value})} />
				<Button onClick={() => this.props.addNewPlayer(player)} label='Add New Player' />
			</form>
		</div>
	}
}

class PlayerLists extends React.Component {
	constructor (){
		super();
		this.state = {
			selectedIds: []
		};
		this.addPlayer = this.addPlayer.bind(this);
		this.removePlayer = this.removePlayer.bind(this);
	}


	addPlayer(player){
		var selectedIds = this.state.selectedIds.concat(player.id);
		this.setState({selectedIds})
	}

	removePlayer(player){
		var selectedIds = this.state.selectedIds.slice();
		selectedIds.splice(selectedIds.indexOf(player.id), 1)
		this.setState({selectedIds})
	}

	render(){
		const {players} = this.props
		const {selectedIds} = this.state

		const unselected = players.filter(player => selectedIds.indexOf(player.id) < 0)
		const selected = players.filter(player => selectedIds.indexOf(player.id) >= 0)


		return <div>
			<div className="col-md-4">
				<h4 className="text-center">Roster</h4>
					
				{unselected.map(player =>
					<PlayerProfile {...player} togglePlayer={() => this.addPlayer(player)} deletePlayer={() => this.props.deletePlayer(player)} />
				)}
			
			</div>

			<div className="col-md-4">
				<h4 className="text-center">Selected Players</h4>
				{selected.map(player =>
					<PlayerProfile {...player} selected togglePlayer={() => this.removePlayer(player)} deletePlayer={() => this.props.deletePlayer(player)} />
				)}
			</div>
		</div>
	}
}


class PlayerRoster extends React.Component {
	constructor (){
		super();
		this.state = {players: [], teams: []};
		this.addNewPlayer = this.addNewPlayer.bind(this);
		this.deletePlayer = this.deletePlayer.bind(this);
		this.addNewTeam = this.addNewTeam.bind(this);
		this.deleteTeam = this.deleteTeam.bind(this);
	}

	addNewPlayer(player){
		axios.post('/api/players', player)
			.then(res => {
				player.id = res.data.id
				const newPlayers = this.state.players.concat(player)
		        this.setState({players: newPlayers})
			})
    }

    addNewTeam(team){
    	axios.post('/api/teams', team)
    		.then(res => {
    			team.id = res.data.id
    			const newTeams = this.state.teams.concat(team)
    			this.setState({teams: newTeams})
    		})
    }

    deleteTeam(team){
    	axios.delete(`/api/teams/${team.id}`)
    		.then(res => {
    			var teams = this.state.teams.slice();
				teams.splice(teams.indexOf(team), 1)
				this.setState({teams})
    		})
    }

    deletePlayer(player){
    	axios.delete(`/api/players/${player.id}`)
    		.then(res => {
    			var players = this.state.players.slice();
				players.splice(players.indexOf(player), 1)
				this.setState({players})
    		})
    }

    componentDidMount(){
    	axios.get('/api/players')
    		.then(res => {
    			this.setState({players: res.data.players})
    			})
    }

    render(){
    	return <div>
    		<AddTeamForm addNewTeam={this.addNewTeam}/>
    		<AddPlayerForm addNewPlayer={this.addNewPlayer}/>
    		<PlayerLists players={this.state.players} deletePlayer={this.deletePlayer}/>
    	</div>
    }
	
}


export default PlayerRoster
