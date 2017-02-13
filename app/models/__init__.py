from app import db

class Player(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String(128), nullable=False)
	year = db.Column(db.String(20), nullable=False)
	position = db.Column(db.String(80), nullable=False)
	number = db.Column(db.Integer, nullable=False)
	team_id = db.Column(db.Integer, db.ForeignKey('team.id'))

	team = db.relationship('Team', back_populates='players')

class Team(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String(128), nullable=False)

	players = db.relationship('Player', back_populates='team')

