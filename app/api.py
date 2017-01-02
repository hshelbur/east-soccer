from flask import Blueprint, jsonify, request
from app import db
from app.models import Player

api_blueprint = Blueprint('api', __name__)

@api_blueprint.route('/roster')
def get_roster():
	players = Player.query.all()
	return jsonify(players=[{'name': player.name, 'year': player.year, 'position': player.position, 'number': player.number} for player in players])	

@api_blueprint.route('/roster', methods=['POST'])
def add_player():
	details = request.get_json(force=True)
	player = Player(name=details['name'], year=details['year'], position=details['position'], number=details['number'])
	db.session.add(player)
	db.session.commit()
	return jsonify(id=player.id)