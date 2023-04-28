
import './estilos.css';
import { useState } from 'react';
import './App.css';
function Menu() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#presentacion">Presentación</a></li>
        <li><a href="#sonic">Sonic</a></li>
        <li><a href="#tails">Tails</a></li>
        <li><a href="#knuckles">Knuckles</a></li>
        <li><a href="#eggman">Eggman</a></li>
        <li><a href="#shadow">Shadow</a></li>
        <li><a href="#rouge">Rouge</a></li>
      </ul>
    </nav>
  );
}

function GifPlayer(props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="gif-player">
      <img
        src={props.gif}
        alt={props.alt}
        onClick={() => setPlaying(!playing)}
      />
      {playing && (
        <video autoPlay loop muted onClick={() => setPlaying(!playing)}>
          <source src={props.video} type="video/mp4" />
        </video>
      )}
    </div>
  );
}



function Comentarios() {
  const [comentarios, setComentarios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");

  const handleEnviarComentario = (event) => {
    event.preventDefault();
    const nuevoComentario = { nombre, comentario };
    setComentarios([...comentarios, nuevoComentario]);
    setNombre("");
    setComentario("");
  };

  return (
    <div className="comentarios">
      <h3>Comentarios:</h3>
      {comentarios.length === 0 && <p>No hay comentarios.</p>}
      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index}>
            <p className="nombre">{comentario.nombre}:</p>
            <p className="comentario">{comentario.comentario}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleEnviarComentario}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />
        <label htmlFor="comentario">Comentario:</label>
        <textarea
          id="comentario"
          name="comentario"
          value={comentario}
          onChange={(event) => setComentario(event.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}


function App() {
  return (
    <div className="contenedor">
      <img src="https://cdn-ext.fanatical.com/production/product/1280x720/2017923c-d839-4a9c-85eb-a7769a516a9c.jpeg" alt="Portada de Sonic Adventure 2" className="portada" />
      <div className="presentacion">
        <h1>Sonic Adventure 2</h1>
        <p>Sonic Adventure 2 es un juego de plataformas desarrollado por Sonic Team y publicado por SEGA en 2001 para Dreamcast. Es la secuela del juego de 1998 Sonic Adventure y presenta una jugabilidad similar en 3D.</p>
      </div>
      <Menu/>
      <div className="personajes">
        <div className="personaje sonic">
          <h2>Sonic</h2>
          <p>Sonic es un erizo azul que es el protagonista principal del juego. Es rápido y ágil, y utiliza su velocidad para superar los obstáculos y derrotar a sus enemigos.</p>
        </div>
        <div className="personaje tails">
          <h2>Tails</h2>
          <p>Tails es un zorro amarillo que es amigo y compañero de Sonic. Es un genio inventor y utiliza sus habilidades técnicas para ayudar a Sonic en su misión.</p>
        </div>
        <div className="personaje knuckles">
          <h2>Knuckles</h2>
          <p>Knuckles es un equidna rojo que es el guardián de la Isla Ángel. Es fuerte y resistente, y utiliza sus habilidades de escalada para encontrar objetos ocultos.</p>
        </div>
        <div className="personaje eggman">
          <h2>Eggman</h2>
          <p>Eggman, también conocido como Dr. Robotnik, es el principal antagonista del juego. Es un científico loco que quiere dominar el mundo y utiliza sus máquinas para tratar de derrotar a Sonic.</p>
        </div>
        <div className="personaje shadow">
          <h2>Shadow</h2>
          <p>Shadow es un erizo negro que es el rival de Sonic. Es tan rápido y hábil como Sonic, pero tiene habilidades adicionales como teletransportación y control de caos.</p>
        </div>
        <div className="personaje rouge">
          <h2>Rouge</h2>
          <p>Rouge es un murciélago rosado que es una ladrona profesional. Es astuta y ágil, y utiliza sus habilidades de vuelo para alcanzar lugares difíciles de alcanzar.</p>
        </div>
      </div>
      <Comentarios />
    </div>
  );
}

export default App;