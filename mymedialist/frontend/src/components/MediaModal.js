// modal que muestra la información de un medio
// muestra titulo, imagen, sinopsis, puntuacion, comentario y estado
// permite editar cada uno de estos campos
// permite eliminar el medio

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

class MediaModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            media: [],
            show: false,
            title: '',
            image: '',
            synopsis: '',
            score: '',
            comment: '',
            status: '',
            category_id: '',
            categories: []
        };
    }

    componentDidMount() {
        this.getMedia();
        this.getCategories();
    }

    getMedia = async () => {
        const res = await axios.get('http://localhost:5000/api/media');
        this.setState({ media: res.data });
    }

    getCategories = async () => {
        const res = await axios.get('http://localhost:5000/api/categories');
        this.setState({ categories: res.data });
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/media/${id}`);
        this.getMedia();
    }

    handleEdit = async (id) => {
        const res = await axios.get(`http://localhost:5000/api/media/${id}`);
        this.setState({
            title: res.data.title,
            image: res.data.image,
            synopsis: res.data.synopsis,
            score: res.data.score,
            comment: res.data.comment,
            status: res.data.status,
            category_id: res.data.category_id
        });
        this.handleShow();
    }

    handleChange = (e) => {
        const { id, value } = e.target;
        this.setState({ [id]: value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { title, image, synopsis, score, comment, status, category_id } = this.state;
        const media = { title, image, synopsis, score, comment, status, category_id };
        await axios.put(`http://localhost:5000/api/media/${this.props.id}`, media);
        this.getMedia();
        this.handleClose();
    }

    render() {
        return (
            <div>
                <Button variant="primary" onClick={() => this.handleEdit(this.props.id)}>
                    Edit
                </Button>
                <Button variant="danger" onClick={() => this.handleDelete(this.props.id)}>
                    Delete
                </Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Media</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter title" value={this.state.title} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="image">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="text" placeholder="Enter image" value={this.state.image} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="synopsis">
                                <Form.Label>Synopsis</Form.Label>
                                <Form.Control type="text" placeholder="Enter synopsis" value={this.state.synopsis} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="score">
                                <Form.Label>Score</Form.Label>
                                <Form.Control type="text" placeholder="Enter score" value={this.state.score} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="comment">
                                <Form.Label>Comment</Form.Label>
                                <Form.Control type="text" placeholder="Enter comment" value={this.state.comment} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="status">
                                <Form.Label>Status</Form.Label>
                                <Form.Control type="text" placeholder="Enter status" value={this.state.status} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="category_id">
                                <Form.Label>Category</Form.Label>
                                <Form.Control as="select" value={this.state.category_id} onChange={this.handleChange}>
                                    {this.state.categories.map((category) => (
                                        <option value={category.id}>{category.name}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default MediaModal;