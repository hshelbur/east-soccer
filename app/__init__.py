from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///../tmp/test.db'
db = SQLAlchemy(app)

from app.api import api_blueprint
from app.views import views_blueprint

app.register_blueprint(api_blueprint, url_prefix='/api')
app.register_blueprint(views_blueprint)