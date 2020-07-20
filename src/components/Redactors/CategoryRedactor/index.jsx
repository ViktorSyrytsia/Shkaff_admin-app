import React from 'react'

import { Form, Button } from 'react-bootstrap';

import './style.scss';

const CategoryRedactor = () => {
        return (
                <div className='category-redactor-container'>
                        <Form>
                                <Form.Group controlId="categoryForm.nameInput">
                                        <Form.Label>Назва продукту:</Form.Label>
                                        <Form.Control type="text" placeholder="Введіть назву продукту" />
                                </Form.Group>
                                <Form.Group controlId="categoryForm.imageInput">
                                        <Form.Label>Посилання на зоображення:</Form.Label>
                                        <Form.Control type="text" placeholder="Введіть посилання на зоображення" />
                                </Form.Group>
                                <div className='category-redactor-buttons'>
                                        <Button variant="primary" type="submit">
                                                Зберегти
  </Button>
                                        <Button variant="dark" type="reset">
                                                Відмінити
  </Button>
                                </div>




                        </Form>
                </div>
        )
}

export default CategoryRedactor;
