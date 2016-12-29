from flask import Blueprint, jsonify
from app import db
from app.models import Player

api_blueprint = Blueprint('api', __name__)

@api_blueprint.route('/roster')
def get_roster():
	players = Player.query.all()
	return jsonify(players=[{'name': player.name, 'year': player.year, 'position': player.position, 'number': player.number} for player in players])	