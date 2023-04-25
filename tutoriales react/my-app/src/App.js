import { useState } from "react";

function MyButton({count,onClick}){
  return(
    <button onClick={onClick}>
      Apretado {count} veces
    </button>
  );
}

function MyButton2(){
  const [ct, setCt] = useState(0);
  function handleClick(){
    setCt(ct+1);
  }
  return(
    <button onClick={handleClick}>
      Apretado {ct} veces
    </button>
  )
}

function AboutPage(){
  return(
    <>
    <h1>Acerca de</h1>
    <p>Hola. <br /> Cómo estás?</p>
    </>
  )
}

function Profile(){
  return(
    <>
    <h1>{user.name}</h1>
    <img
    className="avatar"
    src={user.imageUrl}
    alt={'Foto de '+user.name}
    />
    </>
  )
}

const user = {
  name: 'Julián',
  imageUrl: 'https://static.tvtropes.org/pmwiki/pub/images/shadowthehedgehog.png',
  imageSize: 90,
};

const personajes =[
  {nombre: 'Sonic', esBueno: true, id:1},
  {nombre: 'Tails', esBueno: true, id:2},
  {nombre: 'Eggman', esBueno: false, id:3},
];

function ListaPjes() {
  const listPj = personajes.map(pje =>
    <li
    key={pje.id}
    style={{
    color: pje.esBueno ? 'blue' : 'red'
    }}>
      {pje.nombre}
      </li>
      );

      return (
        <ul>{listPj}</ul>
      )
}

export default function MyApp() {
  const [count,setCount] = useState(0);
  function handleClick(){
    setCount(count+1);
  }
  return(
    <div>
    <h1>Bienvenido a mi app</h1>
    <h2>Contadores que se actualizan juntos</h2>
    <MyButton count={count} onClick={handleClick}/>
    <MyButton count={count} onClick={handleClick}/>
    <h2>Contadores que se actualizan por separado</h2>
    <MyButton2 />
    <MyButton2 />
    <AboutPage />
    <Profile />
    <ListaPjes />
    </div>
  );
}