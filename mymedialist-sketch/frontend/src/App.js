import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table, Button } from 'react-bootstrap';
import './styles.css';
import AddItemModal from './components/AddItemModal';

function App(){
  const [games, setGames] = useState([]);
  const [series, setSeries] = useState([]);
  const [manga, setManga] = useState([]);
  const [movies, setMovies] = useState([]);
  const [anime, setAnime] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('game');
  const [formData, setFormData] = useState({
    'title': '',
    'synopsis': '',
    'rating': 1,
    'comment': '',
    'status': 'pendiente',
  })
  useEffect(() => {
    fetchGames();
    fetchSeries();
    fetchManga();
    fetchMovies();
    fetchAnime();
  }, []);

  const fetchGames = async () => {
    const { data } = await axios.get('http://localhost:5000/api/items/games');
    setGames(data);
  }
  
  const fetchSeries = async () => {
    const { data } = await axios.get('http://localhost:5000/api/items/series');
    setSeries(data);
  }
  
  const fetchManga = async () => {
    const { data } = await axios.get('http://localhost:5000/api/items/manga');
    setManga(data);
  }
  
  const fetchMovies = async () => {
    const { data } = await axios.get('http://localhost:5000/api/items/movies');
    setMovies(data);
  }
  
  const fetchAnime = async () => {
    const { data } = await axios.get('http://localhost:5000/api/items/anime');
    setAnime(data);
  }

  const handleAddClick = (category) => {
    setSelectedCategory(category);
    setShowModal(true);
  }



  const handleFormSubmit = async (formData) => {
    if (selectedCategory === 'games') {
      if (formData.id) {
        await axios.put(`http://localhost:5000/api/items/games/${formData.id}`, formData);
      } else {
        await axios.post('http://localhost:5000/api/items/games', formData);
      }
      fetchGames();
    }
    else if (selectedCategory === 'series') {
      if (formData.id) {
        await axios.put(`http://localhost:5000/api/items/series/${formData.id}`, formData);
      }
      else {
        await axios.post('http://localhost:5000/api/items/series', formData);
      }
      fetchSeries();
    }
    else if (selectedCategory === 'manga') {
      if (formData.id) {
        await axios.put(`http://localhost:5000/api/items/manga/${formData.id}`, formData);
      }
      else {
        await axios.post('http://localhost:5000/api/items/manga', formData);
      }
      fetchManga();
    }
    else if (selectedCategory === 'movies') {
      if (formData.id) {
        await axios.put(`http://localhost:5000/api/items/movies/${formData.id}`, formData);
      }
      else {
        await axios.post('http://localhost:5000/api/items/movies', formData);
      }
      fetchMovies();
    }
    else if (selectedCategory === 'anime') {
      if (formData.id) {
        await axios.put(`http://localhost:5000/api/items/anime/${formData.id}`, formData);
      }
      else {
        await axios.post('http://localhost:5000/api/items/anime', formData);
      }
      fetchAnime();
    }
    setShowModal(false);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleEditClick = (item) => {
    setFormData({
      ...item,
      category: selectedCategory,
    });
    setShowModal(true);
  };
  

  const handleDeleteClick = async (item) => {
    await axios.delete(`http://localhost:5000/api/items/${item.category}/${item.id}`);
    if (item.category === 'games') {
      fetchGames();
    }
    else if (item.category === 'series') {
      fetchSeries();
    }
    else if (item.category === 'manga') {
      fetchManga();
    }
    else if (item.category === 'movies') {
      fetchMovies();
    }
    else if (item.category === 'anime') {
      fetchAnime();
    }
  }

  return (
    <div className="container">
    <Container>
      <h1>My Media List</h1>
      {/*Sección de juegos */}
      <h2>Juegos</h2>
      <Button variant="primary" onClick={() => handleAddClick('games')}>Agregar</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Título</th>
            <th>Sinopsis</th>
            <th>Rating</th>
            <th>Comentario</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.id}>
              <td>{game.title}</td>
              <td>{game.synopsis}</td>
              <td>{game.rating}</td>
              <td>{game.comment}</td>
              <td>{game.status}</td>
              <td>
                <Button variant="warning" onClick={() => handleEditClick(game)}>Editar</Button>
                <Button variant="danger" onClick={() => handleDeleteClick(game)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/*Sección de series */}
      <h2>Series</h2>
      <Button variant="primary" onClick={() => handleAddClick('series')}>Agregar</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Título</th>
            <th>Sinopsis</th>
            <th>Rating</th>
            <th>Comentario</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {series.map((serie) => (
            <tr key={serie.id}>
              <td>{serie.title}</td>
              <td>{serie.synopsis}</td>
              <td>{serie.rating}</td>
              <td>{serie.comment}</td>
              <td>{serie.status}</td>
              <td>
                <Button variant="warning" onClick={() => handleEditClick(serie)}>Editar</Button>
                <Button variant="danger" onClick={() => handleDeleteClick(serie)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* Sección de Manga */}
      <h2>Manga</h2>
            <Button onClick={() => handleAddClick('manga')}>Agregar</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Sinopsis</th>
                        <th>Calificación</th>
                        <th>Comentario</th>
                        <th>Estado</th>
                        <th>Acciones</th> {/* Nueva columna para acciones */}
                    </tr>
                </thead>
                <tbody>
                    {manga.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.synopsis}</td>
                            <td>{item.rating} estrellas</td>
                            <td>{item.comment}</td>
                            <td>{item.status}</td>
                            <td>
                                <Button onClick={() => handleEditClick(item)}>Editar</Button>
                                <Button variant="danger" onClick={() => handleDeleteClick(item.id, 'manga')}>
                                    Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Sección de Películas */}
            <h2>Películas</h2>
            <Button onClick={() => handleAddClick('movies')}>Agregar</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Sinopsis</th>
                        <th>Calificación</th>
                        <th>Comentario</th>
                        <th>Estado</th>
                        <th>Acciones</th> {/* Nueva columna para acciones */}
                    </tr>
                </thead>
                <tbody>
                    {movies.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.synopsis}</td>
                            <td>{item.rating} estrellas</td>
                            <td>{item.comment}</td>
                            <td>{item.status}</td>
                            <td>
                                <Button onClick={() => handleEditClick(item)}>Editar</Button>
                                <Button variant="danger" onClick={() => handleDeleteClick(item.id, 'movies')}>
                                    Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {/* Sección de Anime */}
            <h2>Anime</h2>
            <Button onClick={() => handleAddClick('anime')}>Agregar</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Sinopsis</th>
                        <th>Calificación</th>
                        <th>Comentario</th>
                        <th>Estado</th>
                        <th>Acciones</th> 
                    </tr>
                </thead>
                <tbody>
                    {anime.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.synopsis}</td>
                            <td>{item.rating} estrellas</td>
                            <td>{item.comment}</td>
                            <td>{item.status}</td>
                            <td>
                                <Button onClick={() => handleEditClick(item)}>Editar</Button>
                                <Button variant="danger" onClick={() => handleDeleteClick(item.id, 'anime')}>
                                    Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
                    {/* Modal para agregar/editar elementos */}
                    <AddItemModal
                      show={showModal}
                      category={selectedCategory}
                      formData={formData}
                      onClose={() => setShowModal(false)}
                      onFormSubmit={handleFormSubmit}
                      handleChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                  />

    </Container>
    </div>
  );
}




  

export default App;
