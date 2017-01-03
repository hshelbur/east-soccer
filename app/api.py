from flask import Blueprint, jsonify, request
from app import db
from app.models import Player, Team

api_blueprint = Blueprint('api', __name__)

@api_blueprint.route('/players')
def get_players():
	players = Player.query.all()
	return jsonify(players=[{'name': player.name, 'year': player.year, 'position': player.position, 'number': player.number, 'id': player.id} for player in players])	

@api_blueprint.route('/players', methods=['POST'])
def add_player():
	details = request.get_json(force=True)
	player = Player(name=details['name'], year=details['year'], position=details['position'], number=details['number'])
	db.session.add(player)
	db.session.commit()
	return jsonify(id=player.id)

@api_blueprint.route('/players/<player_id>', methods=['DELETE'])
def delete_player(player_id):
	player = Player.query.get(player_id)
	db.session.delete(player)
	db.session.commit()
	return jsonify({})

@api_blueprint.route('/teams')
def get_teams():
	teams = Team.query.all()
	return jsonify(teams=[{'name': team.name, 'id': team.id} for team in teams])	

@api_blueprint.route('/teams', methods=['POST'])
def add_team():
	details = request.get_json(force=True)
	team = Team(name=details['name'])
	db.session.add(team)
	db.session.commit()
	return jsonify(id=team.id)

@api_blueprint.route('/teams/<team_id>', methods=['DELETE'])
def delete_team(team_id):
	team = Team.query.get(team_id)
	db.session.delete(team)
	db.session.commit()
	return jsonify({})
