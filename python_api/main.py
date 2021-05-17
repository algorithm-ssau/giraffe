from flask import json
from flask_pymongo import PyMongo
from python_api import config
import flask

app = flask.Flask(__name__)
app.config[
    "MONGO_URI"] = config.MONGO_URI
mongo = PyMongo(app)


@app.route("/", methods=['GET'])
def home():
    return "It is Python API"


@app.route("/products", methods=['GET'])
def get_products():
    products = mongo.db.products.find()
    data = []
    for product in products:
        item = {
            "name": product["name"],
            "description": product["description"],
            "price": product["price"],
            "category": product["category"],
            "imageUrl": product["imageUrl"]
        }
        data.append(item)
    return json.dumps(data, ensure_ascii=False).encode('utf8')


@app.route("/products/pizzas", methods=['GET'])
def get_pizzas():
    pizzas = mongo.db.products.find({"category": "Пицца"})
    data = []
    for pizza in pizzas:
        item = {
            "name": pizza["name"],
            "description": pizza["description"],
            "price": pizza["price"],
            "category": pizza["category"],
            "imageUrl": pizza["imageUrl"]
        }
        data.append(item)
    return json.dumps(data, ensure_ascii=False).encode('utf8')


@app.route("/products/rolls", methods=['GET'])
def get_rolls():
    rolls = mongo.db.products.find({"category": "Роллы"})
    data = []
    for roll in rolls:
        item = {
            "name": roll["name"],
            "description": roll["description"],
            "price": roll["price"],
            "category": roll["category"],
            "imageUrl": roll["imageUrl"]
        }
        data.append(item)
    return json.dumps(data, ensure_ascii=False).encode('utf8')


@app.route("/reviews", methods=['GET'])
def get_reviews():
    reviews = mongo.db.reviews.find()
    data = []
    for review in reviews:
        item = {
            "name": review["name"],
            "heading": review["heading"],
            "text": review["text"],
        }
        data.append(item)
    return json.dumps(data, ensure_ascii=False).encode('utf8')


if __name__ == '__main__':
    app.run(port=config.PORT)
