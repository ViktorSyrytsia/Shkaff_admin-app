import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import DropdownBar from '../../DropdownBar'
import { addProduct, updateProduct } from "../../../redux/product/product.actions";
import './style.scss';

const ProductRedactor = ({ redactorState }) => {
        const dispatch = useDispatch()
        const { subcategories, categories, product } = useSelector(({ Subcategories, Categories, Products }) => ({
                subcategories: Subcategories.list,
                categories: Categories.list,
                product: Products.product
        }));

        const [id, setId] = useState('')
        const [name, setName] = useState('');
        const [categoryId, setCategoryId] = useState('')
        const [subcategoryId, setSubcategoryId] = useState('')
        const [size, setSize] = useState({ xs: '', s: '', m: '', l: '', xl: '', xxl: '' })
        const [description, setDescription] = useState('')
        const [price, setPrice] = useState('')
        const [image, setImages] = useState([])
        const [rating, setRating] = useState([{ value: 0 }])
        const [categoryDropdownBarValue, setCategoryDropdownBarValue] = useState(null)
        const [subcategoryDropdownBarValue, setSubcategoryDropdownBarValue] = useState(null)


        const onSelectCategoryDropdownBarItem = (key, e) => {
                setCategoryId(e.target.dataset.id)
                setCategoryDropdownBarValue(e.target.innerText)
        }
        const onSelectSubcategoryDropdownBarItem = (key, e) => {
                setSubcategoryId(e.target.dataset.id)
                setSubcategoryDropdownBarValue(e.target.innerText)
        }

        useEffect(() => {
                if (product) {

                        setId(product.id);
                        setName(product.name);
                        setSize(product.size);
                        setDescription(product.description);
                        setPrice(product.price);
                        setImages(product.images);
                        setRating(product.rating);
                        setCategoryDropdownBarValue(product.category.name);
                        setSubcategoryDropdownBarValue(product.subcategory.name);
                } else {
                        onResetInputs()
                }
        }, [product]);

        const onInputChange = (e) => {

                switch (e.target.name) {
                        case 'name':
                                setName(e.target.value);
                                break;
                        case 'price':
                                setPrice(e.target.value);
                                break;
                        case 'description':
                                setDescription(e.target.value);
                                break;
                        case 'image':
                                const imageString = e.target.value;
                                setImages(imageString.split(','))
                                break;

                        case 'rating':
                                const newRating = [];
                                newRating.push({ value: +e.target.value });
                                setRating(newRating);
                                break;
                        case 'size':
                                setSize(e.target.value);
                                break;
                        default:
                                break;
                }
        }

        const onSaveProduct = () => {
                if (name && categoryId && subcategoryId) {
                        console.log({ name, categoryId, subcategoryId, price, image, rating, description, size });
                        dispatch(redactorState === 'add' ?
                                addProduct({ name, categoryId, subcategoryId }) :
                                updateProduct({ id, name, categoryId, subcategoryId }))
                        onResetInputs();
                } else {
                        window.alert('Всі поля повинні бути заповнені!')
                }
        }

        const onResetInputs = () => {
                setId('');
                setName('');
                setSize('');
                setDescription('');
                setPrice('');
                setImages('');
                setRating([{ value: 0 }]);
                setCategoryDropdownBarValue(null);
                setSubcategoryDropdownBarValue(null);
        }

        return (
                <div className='prodcut-redactor-container'>
                        <Form>
                                <div className='prodcut-redactor-flex'>
                                        <div className='prodcut-redactor-flex-left'>
                                                <Form.Group controlId="productForm.nameInput">
                                                        <Form.Label>Назва продукту:</Form.Label>
                                                        <Form.Control
                                                                name='name'
                                                                type="text"
                                                                placeholder="Введіть назву продукту"
                                                                value={name || ''}
                                                                onChange={onInputChange} />
                                                </Form.Group>
                                                <Form.Group controlId="productForm.priceInput">
                                                        <Form.Label>Ціна:</Form.Label>
                                                        <Form.Control
                                                                name='price'
                                                                type="text"
                                                                placeholder="Введіть ціну продукту"
                                                                value={price || ''}
                                                                onChange={onInputChange} />
                                                </Form.Group>

                                                <Form.Group controlId="productForm.categorySelect">
                                                        <Form.Label>Категорія:</Form.Label>
                                                        <br />
                                                        <DropdownBar
                                                                items={categories}
                                                                selectedValue={categoryDropdownBarValue}
                                                                setSelectedValue={onSelectCategoryDropdownBarItem}
                                                        />
                                                </Form.Group>
                                                <Form.Group controlId="productForm.subcategorySelect">
                                                        <Form.Label>Підкатегорія:</Form.Label>
                                                        <br />
                                                        <DropdownBar
                                                                items={subcategories}
                                                                selectedValue={subcategoryDropdownBarValue}
                                                                setSelectedValue={onSelectSubcategoryDropdownBarItem}
                                                        />
                                                </Form.Group>
                                                <Form.Group controlId="productForm.descriptionInput">
                                                        <Form.Label>Опис продукту:</Form.Label>
                                                        <Form.Control
                                                                name='description'
                                                                type="textarea"
                                                                placeholder="Введіть опис продукту"
                                                                value={description || ''}
                                                                onChange={onInputChange} />
                                                </Form.Group>
                                                <Form.Group controlId="productForm.ratingInput">
                                                        <Form.Label>Рейтинг продукту:</Form.Label>
                                                        <Form.Control
                                                                name='rating'
                                                                type="text"
                                                                placeholder="Введіть рейтинг товару (від 1 до 10)"
                                                                value={Math.round(rating.reduce((a, b) =>
                                                                        a + b.value
                                                                        , 0) / product.rating.length) || ''}
                                                                onChange={onInputChange} />
                                                </Form.Group>
                                        </div>
                                        <div className='prodcut-redactor-flex-right'>
                                                <Form.Group controlId="productForm.imageInput">
                                                        <Form.Label>Посилання на зоображення:</Form.Label>
                                                        <Form.Control
                                                                name='image'
                                                                type="text"
                                                                placeholder="Введіть посилання на зоображення"
                                                                value={image || ''}
                                                                onChange={onInputChange} />
                                                </Form.Group>
                                                <Form.Group controlId="productForm.sizeInput">
                                                        <Form.Label>Розміри:</Form.Label>
                                                        <Form.Control
                                                                name='size'
                                                                type="text"
                                                                placeholder="Введіть кількість розмірів xs"
                                                                value={size.xs || ''}
                                                                onChange={onInputChange} />
                                                        <Form.Control
                                                                name='size'
                                                                type="text"
                                                                placeholder="Введіть кількість розмірів s"
                                                                value={size.s || ''}
                                                                onChange={onInputChange} />
                                                        <Form.Control
                                                                name='size'
                                                                type="text"
                                                                placeholder="Введіть кількість розмірів m"
                                                                value={size.m || ''}
                                                                onChange={onInputChange} />
                                                        <Form.Control
                                                                name='size'
                                                                type="text"
                                                                placeholder="Введіть кількість розмірів l"
                                                                value={size.l || ''}
                                                                onChange={onInputChange} />
                                                        <Form.Control
                                                                name='size'
                                                                type="text"
                                                                placeholder="Введіть кількість розмірів xl"
                                                                value={size.xl || ''}
                                                                onChange={onInputChange} />
                                                        <Form.Control
                                                                name='size'
                                                                type="text"
                                                                placeholder="Введіть кількість розмірів xxl"
                                                                value={size.xxl || ''}
                                                                onChange={onInputChange} />
                                                </Form.Group>
                                        </div>

                                </div>
                                <div className='category-redactor-buttons'>
                                        <Button variant="primary" onClick={onSaveProduct}>
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

export default ProductRedactor;
