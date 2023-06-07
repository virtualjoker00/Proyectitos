import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function AddItemModal(props) {
    const { show, category, formData, onClose, onFormSubmit, handleChange } = props;
    return (
        <Modal show={show} onHide={onClose}>
          <Modal.Header closeButton>
            <Modal.Title>{formData.id ? 'Editar elemento' : 'Agregar elemento'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={onFormSubmit}>
              <Form.Group controlId="formTitle">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
                <Form.Group controlId="formSynopsis">
                <Form.Label>Sinopsis</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="synopsis"
                    value={formData.synopsis}
                    onChange={handleChange}
                    required
                />
                </Form.Group>
                <Form.Group controlId="formRating">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    required
                />
                </Form.Group>
                <Form.Group controlId="formImage">
                <Form.Label>Imagen</Form.Label>
                {/* url de imagen */}
                <Form.Control
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    required
                />
                </Form.Group>
                <Form.Group controlId="formCategory">
                <Form.Label>Categoría</Form.Label>
                <Form.Control
                    as="select"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                >
                    <option value="movie">Película</option>
                    <option value="series">Serie</option>
                    <option value="game">Juego</option>
                    <option value="anime">Anime</option>
                    <option value="manga">Manga</option>
                </Form.Control>
                </Form.Group>
                <Form.Group controlId="formStatus">
                <Form.Label>Estado</Form.Label>
                <Form.Control
                    as="select"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                >
                    <option value="watching">Incompleto</option>
                    <option value="completed">Completado</option>
                    <option value="onhold">En espera</option>
                    <option value="dropped">Dropeado</option>
                </Form.Control>
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit" form="formId">
              {formData.id ? 'Guardar cambios' : 'Agregar'}
            </Button>
          </Modal.Footer>
        </Modal>
      );
    }
    
    export default AddItemModal;