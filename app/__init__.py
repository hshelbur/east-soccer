from flask import Flask

app = Flask(__name__)

from app.api import api_blueprint
from app.views import views_blueprint

app.register_blueprint(api_blueprint)
app.register_blueprint(views_blueprint)