### My media list ###
### Backend ###
### app.py ###

# Imports
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from uuid import uuid4

# App
app = Flask(__name__)
CORS(app)

# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:password@localhost:5432/mymedialist'

# Init db
db = SQLAlchemy(app)

# Models
# tables:
# Media: id, title(50), synopsis, score, review, image, status(20), category_id
# Category: id, name(20)
class Media(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50))
    synopsis = db.Column(db.Text)
    score = db.Column(db.Integer)
    review = db.Column(db.Text)
    image = db.Column(db.String)
    status = db.Column(db.String(20))
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))

    def __init__(self, id, title, synopsis, score, review, image, status, category_id):
        self.id = id
        self.title = title
        self.synopsis = synopsis
        self.score = score
        self.review = review
        self.image = image
        self.status = status
        self.category_id = category_id

    def __repr__(self):
        return f'Media {self.id}'

    def to_JSON(self):
        return {
            'id': self.id,
            'title': self.title,
            'synopsis': self.synopsis,
            'score': self.score,
            'review': self.review,
            'image': self.image,
            'status': self.status,
            'category_id': self.category_id
        }



class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))

    def __init__(self, id, name):
        self.id = id
        self.name = name

    def __repr__(self):
        return f'Category {self.name}'

    def to_JSON(self):
        return {
            'id': self.id,
            'name': self.name
        }


# Routes
# categories: comic, series, movie, game (0, 1, 2, 3)
# status: completed, pending, unfinished, dropped (0, 1, 2, 3)
# each route has a get, post, put and delete method
# each category has a get, post, put and delete method

# Media routes
# get all media
@app.route('/api/media', methods=['GET'])
def get_media():
    media = Media.query.all()
    return jsonify([media.to_JSON() for media in media])

# get media by id
@app.route('/api/media/<id>', methods=['GET'])
def get_media_by_id(id):
    media = Media.query.get(id)
    return jsonify(media.to_JSON())

# create media
@app.route('/api/media', methods=['POST'])
def create_media():
    data = request.get_json()
    media = Media(str(uuid4()),data['title'], data['synopsis'], data['score'], data['review'], data['image'], data['status'], data['category_id'])
    db.session.add(media)
    db.session.commit()
    return jsonify({'message': 'Media created successfully'})


# update media
@app.route('/api/media/<id>', methods=['PUT'])
def update_media(id):
    media = Media.query.get(id)
    data = request.get_json()
    media.title = data['title']
    media.synopsis = data['synopsis']
    media.score = data['score']
    media.review = data['review']
    media.image = data['image']
    media.status = data['status']
    media.category_id = data['category_id']
    db.session.commit()
    return jsonify({'message': 'Media updated successfully'})

# delete media
@app.route('/api/media/<id>', methods=['DELETE'])
def delete_media(id):
    media = Media.query.get(id)
    db.session.delete(media)
    db.session.commit()
    return jsonify({'message': 'Media deleted successfully'})

# COMIC ROUTES
# get all comics
@app.route('/api/comics', methods=['GET'])
def get_comics():
    comics = Media.query.filter_by(category_id='0').all()
    return jsonify([comics.to_JSON() for comics in comics])

# get comic by id
@app.route('/api/comics/<id>', methods=['GET'])
def get_comic_by_id(id):
    comic = Media.query.filter_by(id=id).first()
    return jsonify(comic.to_JSON())

# create comic
@app.route('/api/comics', methods=['POST'])
def create_comic():
    data = request.get_json()
    comic = Media(str(uuid4()),title=data['title'], synopsis=data['synopsis'], score=data['score'], review=data['review'], image=data['image'], status=data['status'], category_id='0')
    db.session.add(comic)
    db.session.commit()
    return jsonify({'message': 'Comic created successfully'})

# update comic
@app.route('/api/comics/<id>', methods=['PUT'])
def update_comic(id):
    comic = Media.query.filter_by(id=id).first()
    data = request.get_json()
    comic.title = data['title']
    comic.synopsis = data['synopsis']
    comic.score = data['score']
    comic.review = data['review']
    comic.image = data['image']
    comic.status = data['status']
    comic.category_id = '0'
    db.session.commit()
    return jsonify({'message': 'Comic updated successfully'})

# delete comic
@app.route('/api/comics/<id>', methods=['DELETE'])
def delete_comic(id):
    comic = Media.query.filter_by(id=id).first()
    db.session.delete(comic)
    db.session.commit()
    return jsonify({'message': 'Comic deleted successfully'})

# SERIES ROUTES
# get all series
@app.route('/api/series', methods=['GET'])
def get_series():
    series = Media.query.filter_by(category_id='1').all()
    return jsonify([series.to_JSON() for series in series])

# get series by id
@app.route('/api/series/<id>', methods=['GET'])
def get_series_by_id(id):
    series = Media.query.filter_by(id=id).first()
    return jsonify(series.to_JSON())

# create series
@app.route('/api/series', methods=['POST'])
def create_series():
    data = request.get_json()
    series = Media(title=data['title'], synopsis=data['synopsis'], score=data['score'], review=data['review'], image=data['image'], status=data['status'], category_id='1')
    db.session.add(series)
    db.session.commit()
    return jsonify({'message': 'Series created successfully'})

# update series
@app.route('/api/series/<id>', methods=['PUT'])
def update_series(id):
    series = Media.query.filter_by(id=id).first()
    data = request.get_json()
    series.title = data['title']
    series.synopsis = data['synopsis']
    series.score = data['score']
    series.review = data['review']
    series.image = data['image']
    series.status = data['status']
    series.category_id = '1'
    db.session.commit()
    return jsonify({'message': 'Series updated successfully'})

# delete series
@app.route('/api/series/<id>', methods=['DELETE'])
def delete_series(id):
    series = Media.query.filter_by(id=id).first()
    db.session.delete(series)
    db.session.commit()
    return jsonify({'message': 'Series deleted successfully'})

# MOVIE ROUTES
# get all movies
@app.route('/api/movies', methods=['GET'])
def get_movies():
    movies = Media.query.filter_by(category_id='2').all()
    return jsonify([movies.to_JSON() for movies in movies])

# get movie by id
@app.route('/api/movies/<id>', methods=['GET'])
def get_movie_by_id(id):
    movie = Media.query.filter_by(id=id).first()
    return jsonify(movie.to_JSON())

# create movie
@app.route('/api/movies', methods=['POST'])
def create_movie():
    data = request.get_json()
    movie = Media(title=data['title'], synopsis=data['synopsis'], score=data['score'], review=data['review'], image=data['image'], status=data['status'], category_id='2')
    db.session.add(movie)
    db.session.commit()
    return jsonify({'message': 'Movie created successfully'})

# update movie
@app.route('/api/movies/<id>', methods=['PUT'])
def update_movie(id):
    movie = Media.query.filter_by(id=id).first()
    data = request.get_json()
    movie.title = data['title']
    movie.synopsis = data['synopsis']
    movie.score = data['score']
    movie.review = data['review']
    movie.image = data['image']
    movie.status = data['status']
    movie.category_id = '2'
    db.session.commit()
    return jsonify({'message': 'Movie updated successfully'})

# delete movie
@app.route('/api/movies/<id>', methods=['DELETE'])
def delete_movie(id):
    movie = Media.query.filter_by(id=id).first()
    db.session.delete(movie)
    db.session.commit()
    return jsonify({'message': 'Movie deleted successfully'})

# GAME ROUTES
# get all games
@app.route('/api/games', methods=['GET'])
def get_games():
    games = Media.query.filter_by(category_id='3').all()
    return jsonify([games.to_JSON() for games in games])

# get game by id
@app.route('/api/games/<id>', methods=['GET'])
def get_game_by_id(id):
    game = Media.query.filter_by(id=id).first()
    return jsonify(game.to_JSON())

# create game
@app.route('/api/games', methods=['POST'])
def create_game():
    data = request.get_json()
    game = Media(title=data['title'], synopsis=data['synopsis'], score=data['score'], review=data['review'], image=data['image'], status=data['status'], category_id='3')
    db.session.add(game)
    db.session.commit()
    return jsonify({'message': 'Game created successfully'})

# update game
@app.route('/api/games/<id>', methods=['PUT'])
def update_game(id):
    game = Media.query.filter_by(id=id).first()
    data = request.get_json()
    game.title = data['title']
    game.synopsis = data['synopsis']
    game.score = data['score']
    game.review = data['review']
    game.image = data['image']
    game.status = data['status']
    game.category_id = '3'
    db.session.commit()
    return jsonify({'message': 'Game updated successfully'})

# delete game
@app.route('/api/games/<id>', methods=['DELETE'])
def delete_game(id):
    game = Media.query.filter_by(id=id).first()
    db.session.delete(game)
    db.session.commit()
    return jsonify({'message': 'Game deleted successfully'})

if __name__ == '__main__':
    app.run(debug=True)