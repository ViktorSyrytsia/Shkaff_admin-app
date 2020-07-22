import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Form, Button} from 'react-bootstrap';

import {addCategory, updateCategory} from "../../../redux/category/category.actions";
import './style.scss';

const CategoryRedactor = ({redactorState}) => {
    const category = useSelector(({Categories}) => Categories.category);
    const dispatch = useDispatch()

    const [id, setId] = useState('')
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        if (category) {
            setId(category.id);
            setName(category.name);
            setImage(category.image);
        } else {
            onResetInputs();
        }
    }, [category, redactorState]);

    const onSaveCategory = () => {
        if (name && image ) {
            dispatch(redactorState === 'add' ?
                addCategory({name, image}) :
                updateCategory({id, name, image}))
            onResetInputs();
        } else {
            window.alert('Всі поля повинні бути заповнені!')
        }
    }

    const onInputChange = (e) => {
        e.target.name === 'name' ? setName(e.target.value) : setImage(e.target.value);
    }

    const onResetInputs = () => {
        setName('');
        setImage('')
    }

    return (
        <div className='category-redactor-container'>
            <Form>
                <Form.Group controlId="categoryForm.nameInput">
                    <Form.Label>Назва категорії:</Form.Label>
                    <Form.Control
                        name='name'
                        type="text"
                        placeholder="Введіть назву продукту"
                        value={name || ''}
                        onChange={onInputChange}/>
                </Form.Group>
                <Form.Group controlId="categoryForm.imageInput">
                    <Form.Label>Посилання на зоображення:</Form.Label>
                    <Form.Control
                        name='image'
                        type="text"
                        placeholder="Введіть посилання на зоображення"
                        value={image || ''}
                        onChange={onInputChange}/>
                </Form.Group>
                <div className='category-redactor-buttons'>
                    <Button variant="primary" onClick={onSaveCategory}>
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
