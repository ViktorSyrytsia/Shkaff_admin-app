import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Form, Button } from 'react-bootstrap';

import './style.scss';

const CategoryRedactor = ({ onAddCategory, onEditCategory, saveOptions }) => {
        console.log(saveOptions);
        const category = useSelector(({ Categories }) => Categories.category);
        const [id, setId] = useState('')
        const [name, setName] = useState('');
        const [image, setImage] = useState('');

        useEffect(() => {
                if (category) {
                        setName(category.name);
                        setImage(category.image);
                        setId(category.id);
                } else {
                        setName('');
                        setImage('');
                }
        }, [category]);

        const onInputChange = (e) => {
                if (e.target.name === 'name') {
                        setName(e.target.value);
                } else if (e.target.name === 'image') {
                        setImage(e.target.value)
                }
        }

        const onSubmitAction = (saveOptions) => {
                console.log(saveOptions);
                if (saveOptions === 'add') {
                        const newCategory = {
                                name,
                                image
                        }
                        console.log(newCategory);
                        onAddCategory(newCategory)
                } else {
                        const editedCategory = {
                                id,
                                name,
                                image
                        }
                        onEditCategory(editedCategory)
                }


        }

        const onResetInputs = () => {
                setName('');
                setImage('')
        }


        return (
                <div className='category-redactor-container'>
                        <Form>
                                <Form.Group controlId="categoryForm.nameInput">
                                        <Form.Label>Назва продукту:</Form.Label>
                                        <Form.Control
                                                name='name'
                                                type="text"
                                                placeholder="Введіть назву продукту"
                                                value={name || ''}
                                                onChange={onInputChange} />
                                </Form.Group>
                                <Form.Group controlId="categoryForm.imageInput">
                                        <Form.Label>Посилання на зоображення:</Form.Label>
                                        <Form.Control
                                                name='image'
                                                type="text"
                                                placeholder="Введіть посилання на зоображення"
                                                value={image || ''}
                                                onChange={onInputChange} />
                                </Form.Group>
                                <div className='category-redactor-buttons'>
                                        <Button variant="primary" onClick={() => onSubmitAction(saveOptions)}>
                                                Зберегти
  </Button>
                                        <Button variant="dark" onClick={onResetInputs}>
                                                Відмінити
  </Button>
                                </div>




                        </Form>
                </div>
        )
}

export default CategoryRedactor;
