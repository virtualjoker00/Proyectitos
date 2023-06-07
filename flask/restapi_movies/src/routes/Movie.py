from flask import Blueprint, jsonify, request
import uuid 
#entidades
from models.entities.Movie import Movie
#modelos
from models.MovieModel import MovieModel

main=Blueprint('movie_blueprint',__name__)

@main.route('/')
def get_movies():
    try:
        movies = MovieModel.get_movies()
        return jsonify(movies)
    except Exception as ex:
        return jsonify({'message': str(ex)})

@main.route('/<id>')
def get_movie(id):
    try:
        movie= MovieModel.get_movie(id)
        if movie != None:
            return jsonify(movie)
        else:
            return jsonify({'message':'No se encontró la película'}),404
    except Exception as ex:
        return jsonify({'message': str(ex)}),500
    
@main.route('/add',methods=['POST'])
def add_movie():
    try:
        m = {
            'name': request.json['name'],
            'duration': request.json['duration'],
            'released': request.json['released']
        }
        movie = Movie(str(uuid.uuid4()),m['name'],m['duration'],m['released'])
        affected_rows=MovieModel.add_movie(movie)
        if affected_rows == 1:
            return jsonify({'message':'Movie added'})
        else:
            return jsonify({'message':'Insert error'}),500
    except Exception as ex:
        return jsonify({'message': str(ex)}),500
    
@main.route('/delete/<id>',methods=['DELETE'])
def delete_movie(id):
    try:
        movie = Movie(id)

        affected_rows=MovieModel.delete_movie(movie)
        if affected_rows == 1:
            return jsonify({'message':'Movie deleted'})
        else:
            return jsonify({'message':'Delete error'}),500
    except Exception as ex:
        return jsonify({'message': str(ex)}),500
    
@main.route('/update/<id>',methods=['PUT'])
def update_movie(id):
    try:
        m = {
            'name': request.json['name'],
            'duration': request.json['duration'],
            'released': request.json['released']
        }
        movie = Movie(id,m['name'],m['duration'],m['released'])
        affected_rows=MovieModel.update_movie(movie)
        if affected_rows == 1:
            return jsonify({'message':'Movie updated'})
        else:
            return jsonify({'message':'Update error'}),500
    except Exception as ex:
        return jsonify({'message': str(ex)}),500