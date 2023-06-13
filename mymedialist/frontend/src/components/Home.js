import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MediaModal from './MediaModal';
function Home(){
    const [media, setMedia] = useState([]);

    useEffect(() => {
        getMedia();
    }, []);

    const getMedia = async () => {
        const res = await axios.get('http://localhost:5000/api/media');
        setMedia(res.data);
    }
    // view links to mediamodal
    return (
        <div className="container">
            <div className="row row-cols-3 g-3">
                {media.map((media) => (
                    <div className="col">
                        <div className="card">
                            <img className="card-img-top" src={media.image} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{media.title}</h5>
                                <p className="card-text">{media.synopsis}</p>
                                <Link to={`/media/${media.id}`} className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
