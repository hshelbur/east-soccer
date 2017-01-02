from app import db

class Player(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String(128), nullable=False)
	year = db.Column(db.String(20), nullable=False)
	position = db.Column(db.String(20), nullable=False)
	number = db.Column(db.Integer, nullable=False)