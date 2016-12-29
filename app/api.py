from flask import Blueprint, jsonify

api_blueprint = Blueprint('api', __name__)

@api_blueprint.route('/roster')
def get_roster():
	return jsonify(players=[
		{'name':'Howard', 'year':'Freshman', 'position': 'Midfield', 'number':'4'},
		{'name':'Erin', 'year':'senior', 'position':'Keeper', 'number':'7'}
	])
		
