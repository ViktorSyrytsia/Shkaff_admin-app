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
        const [sizeXs, setSizeXs] = useState('');
        const [sizeS, setSizeS] = useState('');
        const [sizeM, setSizeM] = useState('');
        const [sizeL, setSizeL] = useState('');
        const [sizeXl, setSizeXl] = useState('');
        const [sizeXxl, setSizeXxl] = useState('');
        const [description, setDescription] = useState('')
        const [price, setPrice] = useState('')
        const [image, setImages] = useState([])
        const [categoryDropdownBarValue, setCategoryDropdownBarValue] = useState(null)
        const [subcategoryDropdownBarValue, setSubcategoryDropdownBarValue] = useState(null)
        const [valueObj, setValueObj] = useState({ name: '', price: '', description: '', image: [{ link: '' }], sizes: { xs: '', s: '', m: '', l: '', xl: '', xxl: '' } })


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
                        console.log(product);
                        setId(product.id);
                        setName(product.name);
                        setSizeXs(product.sizes.xs);
                        setSizeS(product.sizes.s);
                        setSizeM(product.sizes.m);
                        setSizeL(product.sizes.l);
                        setSizeXl(product.sizes.xl);
                        setSizeXxl(product.sizes.xxl);
                        setDescription(product.description);
                        setPrice(product.price);
                        setImages(product.images);
                        setCategoryDropdownBarValue(product.category.name);
                        setSubcategoryDropdownBarValue(product.subcategory.name);
                } else {
                        onResetInputs()
                }
        }, [product]);

        const onInputChange = (e) => {
                const formArray = e.target.form;
                const valueArray = [];
                for (const input of formArray) {
                        if (input.id == 'productForm') {
                                valueArray.push(input.value);
                        }
                }
                setValueObj({
                        name: valueArray[0],
                        price: valueArray[1],
                        description: valueArray[2],
                        images: valueArray[3],
                        sizes: {
                                xs: valueArray[4],
                                s: valueArray[5],
                                m: valueArray[6],
                                l: valueArray[7],
                                xl: valueArray[8],
                                xxl: valueArray[9],
                        }
                })
                console.log(valueObj);
        }

        const onSaveProduct = () => {
                if (name && categoryId && subcategoryId) {
                        const imageArray = image.map(image => ({ link: image }))
                        dispatch(redactorState === 'add' ?
                                addProduct({ name, categoryId, subcategoryId, price: +price, images: imageArray, description, sizes: { xs: +sizeXs, s: +sizeS, m: +sizeM, l: +sizeL, xl: +sizeXl, xxl: +sizeXxl } }) :
                                updateProduct({ id, name, categoryId, subcategoryId }))
                        onResetInputs();
                } else {
                        window.alert('Всі поля повинні бути заповнені!')
                }
        }

        const onResetInputs = () => {
                setId('');
                setName('');
                setSizeXs('');
                setSizeS('');
                setSizeM('');
                setSizeL('');
                setSizeXl('');
                setSizeXxl('');
                setDescription('');
                setPrice('');
                setImages('');
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
                                                                value={valueObj.name || ''}
                                                                onChange={onInputChange} />
                                                </Form.Group>
                                                <Form.Group controlId="productForm">
                                                        <Form.Label>Ціна:</Form.Label>
                                                        <Form.Control
                                                                name='price'
                                                                type="text"
                                                                placeholder="Введіть ціну продукту"
                                                                value={valueObj.price || ''}
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
                                                <Form.Group controlId="productForm">
                                                        <Form.Label>Опис продукту:</Form.Label>
                                                        <Form.Control
                                                                name='description'
                                                                type="textarea"
                                                                placeholder="Введіть опис продукту"
                                                                value={valueObj.description || ''}
                                                                onChange={onInputChange} />
                                                </Form.Group>
                                        </div>
                                        <div className='prodcut-redactor-flex-right'>
                                                <Form.Group controlId="productForm">
                                                        <Form.Label>Посилання на зоображення:</Form.Label>
                                                        <Form.Control
                                                                name='image'
                                                                type="text"
                                                                placeholder="Введіть посилання на зоображення"
                                                                value={valueObj.image ? valueObj.image.map(img => img.link) : ''}
                                                                onChange={onInputChange} />
                                                </Form.Group>
                                                <Form.Group controlId="productForm">
                                                        <Form.Label>Розміри:</Form.Label>
                                                        <Form.Control
                                                                name='sizeXs'
                                                                type="text"
                                                                placeholder="Введіть кількість розмірів xs"
                                                                value={valueObj.sizes.xs || ''}
                                                                onChange={onInputChange} />
                                                        <Form.Control
                                                                name='sizeS'
                                                                type="text"
                                                                placeholder="Введіть кількість розмірів s"
                                                                value={valueObj.sizes.s || ''}
                                                                onChange={onInputChange} />
                                                        <Form.Control
                                                                name='sizeM'
                                                                type="text"
                                                                placeholder="Введіть кількість розмірів m"
                                                                value={valueObj.sizes.m || ''}
                                                                onChange={onInputChange} />
                                                        <Form.Control
                                                                name='sizeL'
                                                                type="text"
                                                                placeholder="Введіть кількість розмірів l"
                                                                value={valueObj.sizes.l || ''}
                                                                onChange={onInputChange} />
                                                        <Form.Control
                                                                name='sizeXl'
                                                                type="text"
                                                                placeholder="Введіть кількість розмірів xl"
                                                                value={valueObj.sizes.xl || ''}
                                                                onChange={onInputChange} />
                                                        <Form.Control
                                                                name='sizeXxl'
                                                                type="text"
                                                                placeholder="Введіть кількість розмірів xxl"
                                                                value={valueObj.sizes.xxl || ''}
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


