import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import DropdownBar from '../../DropdownBar'
import { addProduct, updateProduct } from "../../../redux/product/product.actions";
import Sizes from "./sizes";

import './style.scss';

const ProductRedactor = ({ redactorState }) => {
        const dispatch = useDispatch()
        const { subcategories, categories, product } = useSelector(({ Subcategories, Categories, Products }) => ({
                subcategories: Subcategories.list,
                categories: Categories.list,
                product: Products.product
        }));

        const sizesDefault = { xs: 0, s: 0, m: 0, l: 0, xl: 0, xxl: 0 };

        const [id, setId] = useState('');
        const [categoryId, setCategoryId] = useState('');
        const [subcategoryId, setSubcategoryId] = useState('');
        const [categoryDropdownBarValue, setCategoryDropdownBarValue] = useState(null);
        const [subcategoryDropdownBarValue, setSubcategoryDropdownBarValue] = useState(null);
        const [images, setImages] = useState([{link: ''}]);
        const [sizes, setSizes] = useState(sizesDefault);

        const [productObj, setProductObj] = useState({ name: '', price: 0, description: ''})


        const onSelectCategoryDropdownBarItem = (key, e) => {
                setCategoryId(e.target.dataset.id)
                setCategoryDropdownBarValue(e.target.innerText)
                setSubcategoryDropdownBarValue(null)
        }
        const onSelectSubcategoryDropdownBarItem = (key, e) => {
                setSubcategoryId(e.target.dataset.id)
                setSubcategoryDropdownBarValue(e.target.innerText)
        }

        useEffect(() => {
                if (product) {
                        setId(product.id);
                        setProductObj({ name: product.name, price: product.price, description: product.description});
                        setImages(product.images.map( x => {
                              return {link: x.link}
                        }));
                        setCategoryId(product.category.id)
                        setSubcategoryId(product.subcategory.id)
                        setCategoryDropdownBarValue(product.category.name);
                        setSubcategoryDropdownBarValue(product.subcategory.name);
                        const sizes = Object.entries(product.sizes)
                        sizes.pop()
                        setSizes(Object.fromEntries(sizes))
                } else {
                        onResetInputs()
                }
        }, [product]);

        const onInputChange = (e) => {
                const valueArray = [];
                for (const input of e.target.form) {
                        if (input.id === 'productForm') {
                                valueArray.push(input.value);
                        }
                }
                setProductObj({
                        name: valueArray[0],
                        price: +valueArray[1],
                        description: valueArray[2],
                })
        }

        const onImageInputChange = (e) => {
        }

        const onSaveProduct = () => {

                if (productObj.name && categoryId && subcategoryId) {
                        dispatch(redactorState === 'add' ?
                                addProduct({ ...productObj, sizes, images: images || [], categoryId, subcategoryId }) :
                                updateProduct({ id, product: { ...productObj, sizes, images, categoryId, subcategoryId } }))
                        onResetInputs();
                } else {
                        window.alert('Всі поля повинні бути заповнені!')
                }
        }

        const onResetInputs = () => {
                setId('');
                setImages('')
                setProductObj({
                        name: '',
                        price: 0,
                        description: ''
                })
                setSizes(sizesDefault)
                setCategoryDropdownBarValue(null);
                setSubcategoryDropdownBarValue(null);
        }

        return (
                <div className='prodcut-redactor-container'>
                        <Form>
                                <div className='prodcut-redactor-flex'>
                                        <div className='prodcut-redactor-flex-left'>
                                                <Form.Group controlId="productForm">
                                                        <Form.Label>Назва продукту:</Form.Label>
                                                        <Form.Control
                                                                name='name'
                                                                type="text"
                                                                placeholder="Введіть назву продукту"
                                                                value={productObj.name || ''}
                                                                onChange={onInputChange} />
                                                </Form.Group>
                                                <Form.Group controlId="productForm">
                                                        <Form.Label>Ціна:</Form.Label>
                                                        <Form.Control
                                                                name='price'
                                                                type="text"
                                                                placeholder="Введіть ціну продукту"
                                                                value={productObj.price || 0}
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
                                                                items={subcategories.filter(item => item.category.id === categoryId)}
                                                                selectedValue={subcategoryDropdownBarValue}
                                                                setSelectedValue={onSelectSubcategoryDropdownBarItem}
                                                        />
                                                </Form.Group>
                                                <Form.Group controlId="productForm">
                                                        <Form.Label>Опис продукту:</Form.Label>
                                                        <Form.Control
                                                                name='description'
                                                                type="textarea"
                                                                placeholder="Введіть опис продукту"
                                                                value={productObj.description || ''}
                                                                onChange={onInputChange} />
                                                </Form.Group>
                                        </div>
                                        <div className='prodcut-redactor-flex-right'>
                                                <Form.Group controlId="productFormImages">
                                                        <Form.Label>Посилання на зоображення:</Form.Label>
                                                        {product && product.images.map((img, idx) => {
                                                                return (
                                                                        <Form.Control
                                                                                key={idx + img.link}
                                                                                name={`image-${idx}`}
                                                                                type="textarea"
                                                                                placeholder="Введіть силку на зоображення"
                                                                                value={img.link || ''}
                                                                                onChange={onImageInputChange} />
                                                                )
                                                        })}
                                                </Form.Group>
                                                <Form.Group>
                                                        <Form.Label>Розміри:</Form.Label>
                                                        <Sizes sizes={sizes}
                                                               setSizes={setSizes}

                                                        />

                                                 {/*       <Form.Control
                                                                name='sizeXs'
                                                                type="text"
                                                                placeholder="Введіть кількість розмірів xs"
                                                                value={productObj.sizes.xs || 0}
                                                                onChange={onInputChange} />
                                                        <Form.Control
                                                                name='sizeS'
                                                                type="text"
                                                                placeholder="Введіть кількість розмірів s"
                                                                value={productObj.sizes.s || 0}
                                                                onChange={onInputChange} />
                                                        <Form.Control
                                                                name='sizeM'
                                                                type="text"
                                                                placeholder="Введіть кількість розмірів m"
                                                                value={productObj.sizes.m || 0}
                                                                onChange={onInputChange} />
                                                        <Form.Control
                                                                name='sizeL'
                                                                type="text"
                                                                placeholder="Введіть кількість розмірів l"
                                                                value={productObj.sizes.l || 0}
                                                                onChange={onInputChange} />
                                                        <Form.Control
                                                                name='sizeXl'
                                                                type="text"
                                                                placeholder="Введіть кількість розмірів xl"
                                                                value={productObj.sizes.xl || 0}
                                                                onChange={onInputChange} />
                                                        <Form.Control
                                                                name='sizeXxl'
                                                                type="text"
                                                                placeholder="Введіть кількість розмірів xxl"
                                                                value={productObj.sizes.xxl || 0}
                                                                onChange={onInputChange} />*/}
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


