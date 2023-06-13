from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:password@localhost:5432/mymedialist'
db = SQLAlchemy(app)

class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(60), nullable=False)
    synopsis = db.Column(db.Text)
    rating = db.Column(db.Integer)
    comment = db.Column(db.Text)
    category = db.Column(db.String(10), nullable=False)
    image = db.Column(db.String(200))
    status = db.Column(db.String(15), nullable=False)

    def __repr__(self):
        return f'Item {self.title}' 
    
    def to_JSON(self):
        return{
            'id':self.id,
            'title':self.title,
            'synopsis':self.synopsis,
            'rating':self.rating,
            'comment':self.comment,
            'category':self.category,
            'image':self.image,
            'status':self.status
        }

@app.route('/api/items', methods=['GET'])
def get_items():
    items = Item.query.all()
    return jsonify([item.to_JSON() for item in items])


### JUEGOS ###
@app.route('/api/items/games', methods=['GET'])
def get_games():
    items = Item.query.filter_by(category='game')
    return jsonify([item.to_JSON() for item in items])

@app.route('/api/items/games', methods=['POST'])
def create_game():
    data = request.get_json()
    game = Item(title=data['title'], synopsis=data['synopsis'], rating=data['rating'], comment=data['comment'], category='game', image=data['image'], status=data['status'])
    db.session.add(game)
    db.session.commit()
    return jsonify({'message': 'Game created successfully'})

@app.route('/api/items/games/<id>', methods=['PUT'])
def update_game(id):
    data = request.get_json()
    game = Item.query.get(id)
    game.title = data['title']
    game.synopsis = data['synopsis']
    game.rating = data['rating']
    game.comment = data['comment']
    game.image = data['image']
    game.status = data['status']
    db.session.commit()
    return jsonify({'message': 'Game updated successfully'})

@app.route('/api/items/games/<id>', methods=['DELETE'])
def delete_game(id):
    game = Item.query.get(id)
    db.session.delete(game)
    db.session.commit()
    return jsonify({'message': 'Game deleted successfully'})


### PELICULAS ###
@app.route('/api/items/movies', methods=['GET'])
def get_movies():
    items = Item.query.filter_by(category='movie')
    return jsonify([item.to_JSON() for item in items])
@app.route('/api/items/movies', methods=['POST'])
def create_movie():
    data = request.get_json()
    movie = Item(title=data['title'], synopsis=data['synopsis'], rating=data['rating'], comment=data['comment'], category='movies', image=data['image'], status=data['status'])
    db.session.add(movie)
    db.session.commit()
    return jsonify({'message': 'Movie created successfully'})

@app.route('/api/items/movies/<id>', methods=['PUT'])
def update_movie(id):
    data = request.get_json()
    movie = Item.query.get(id)
    movie.title = data['title']
    movie.synopsis = data['synopsis']
    movie.rating = data['rating']
    movie.comment = data['comment']
    movie.image = data['image']
    movie.status = data['status']
    db.session.commit()
    return jsonify({'message': 'Movie updated successfully'})

@app.route('/api/items/movies/<id>', methods=['DELETE'])
def delete_movie(id):
    movie = Item.query.get(id)
    db.session.delete(movie)
    db.session.commit()
    return jsonify({'message': 'Movie deleted successfully'})

### SERIES ###
@app.route('/api/items/series', methods=['GET'])
def get_series():
    items = Item.query.filter_by(category='serie')
    return jsonify([item.to_JSON() for item in items])
@app.route('/api/items/series', methods=['POST'])
def create_serie():
    data = request.get_json()
    serie = Item(title=data['title'], synopsis=data['synopsis'], rating=data['rating'], comment=data['comment'], category='series', image=data['image'], status=data['status'])
    db.session.add(serie)
    db.session.commit()
    return jsonify({'message': 'Serie created successfully'})

@app.route('/api/items/series/<id>', methods=['PUT'])
def update_serie(id):
    data = request.get_json()
    serie = Item.query.get(id)
    serie.title = data['title']
    serie.synopsis = data['synopsis']
    serie.rating = data['rating']
    serie.comment = data['comment']
    serie.image = data['image']
    serie.status = data['status']
    db.session.commit()
    return jsonify({'message': 'Serie updated successfully'})

@app.route('/api/items/series/<id>', methods=['DELETE'])
def delete_serie(id):
    serie = Item.query.get(id)
    db.session.delete(serie)
    db.session.commit()
    return jsonify({'message': 'Serie deleted successfully'})


### ANIME ###
@app.route('/api/items/anime', methods=['GET'])
def get_anime():
    items = Item.query.filter_by(category='anime')
    return jsonify([item.to_JSON() for item in items])
@app.route('/api/items/anime', methods=['POST'])
def create_anime():
    data = request.get_json()
    anime = Item(title=data['title'], synopsis=data['synopsis'], rating=data['rating'], comment=data['comment'], category='anime', image=data['image'], status=data['status'])
    db.session.add(anime)
    db.session.commit()
    return jsonify({'message': 'Anime created successfully'})

@app.route('/api/items/anime/<id>', methods=['PUT'])
def update_anime(id):
    data = request.get_json()
    anime = Item.query.get(id)
    anime.title = data['title']
    anime.synopsis = data['synopsis']
    anime.rating = data['rating']
    anime.comment = data['comment']
    anime.image = data['image']
    anime.status = data['status']
    db.session.commit()
    return jsonify({'message': 'Anime updated successfully'})

@app.route('/api/items/anime/<id>', methods=['DELETE'])
def delete_anime(id):
    anime = Item.query.get(id)
    db.session.delete(anime)
    db.session.commit()
    return jsonify({'message': 'Anime deleted successfully'})

### MANGA ###
@app.route('/api/items/manga', methods=['GET'])
def get_manga():
    items = Item.query.filter_by(category='manga')
    return jsonify([item.to_JSON() for item in items])

@app.route('/api/items/manga', methods=['POST'])
def create_manga():
    data = request.get_json()
    manga = Item(title=data['title'], synopsis=data['synopsis'], rating=data['rating'], comment=data['comment'], category='manga', image=data['image'], status=data['status'])
    db.session.add(manga)
    db.session.commit()
    return jsonify({'message': 'Manga created successfully'})

@app.route('/api/items/manga/<id>', methods=['PUT'])
def update_manga(id):
    data = request.get_json()
    manga = Item.query.get(id)
    manga.title = data['title']
    manga.synopsis = data['synopsis']
    manga.rating = data['rating']
    manga.comment = data['comment']
    manga.image = data['image']
    manga.status = data['status']
    db.session.commit()
    return jsonify({'message': 'Manga updated successfully'})

@app.route('/api/items/manga/<id>', methods=['DELETE'])
def delete_manga(id):
    manga = Item.query.get(id)
    db.session.delete(manga)
    db.session.commit()
    return jsonify({'message': 'Manga deleted successfully'})
if __name__ == '__main__':
    app.run(port=5000, debug=True)
