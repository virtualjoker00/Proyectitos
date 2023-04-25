function MyButton(){ //componentes parten con Mayus
    return (
        <button>soy un botooon</button>
    );
}

export default function MyApp() {
    return (
        <div>
            <h1>Bienvenido a mi app</h1>
            <MyButton />
        </div>
    );
}