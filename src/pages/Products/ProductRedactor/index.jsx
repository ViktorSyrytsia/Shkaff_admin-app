import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Form, Button} from 'react-bootstrap';

import DropdownBar from '../../../components/DropdownBar'
import {addProduct, updateProduct} from "../../../redux/product/product.actions";
import Sizes from "../ProductSizes";

import './style.scss';

const ProductRedactor = ({redactorState}) => {
    const dispatch = useDispatch()
    const {subcategories, categories, product} = useSelector(({Subcategories, Categories, Products}) => ({
        subcategories: Subcategories.list,
        categories: Categories.list,
        product: Products.product
    }));

    const productDefault = {name: '', price: 0, description: ''};
    const sizesDefault = {xs: 0, s: 0, m: 0, l: 0, xl: 0, xxl: 0, oneSize: 0};
    const imageDefault = {link: ''};


    const [id, setId] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [subcategoryId, setSubcategoryId] = useState('');
    const [categoryDropdownBarValue, setCategoryDropdownBarValue] = useState(null);
    const [subcategoryDropdownBarValue, setSubcategoryDropdownBarValue] = useState(null);
    const [images, setImages] = useState([imageDefault]);
    const [sizes, setSizes] = useState(sizesDefault);
    const [productObj, setProductObj] = useState(productDefault)

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
            const {price, name, description, id, subcategory, category, images} = product
            const sizes = Object.entries(product.sizes)

            setId(id);
            setProductObj({price, name, description});
            setImages(images.map(img => ({link: img.link})));
            setCategoryId(category.id)
            setSubcategoryId(subcategory.id)

            setCategoryDropdownBarValue(category.name);
            setSubcategoryDropdownBarValue(subcategory.name);

            sizes.pop()
            setSizes(Object.fromEntries(sizes))
        } else {
            onResetInputs()
        }
    }, [product]);

    const onInputChange = (e) => {
        const value = isFinite(e.target.value) ? +e.target.value : e.target.value
        const newObj = {...productObj};

        newObj[e.target.name] = value
        setProductObj(newObj)
    }

    const onImageInputChange = (idx, e) => {
        const values = [...images];
        values[idx].link = e.target.value;
        setImages(values);
    }

    const onAddImageInput = () => {
        const newArr = [...images]
        newArr.push(imageDefault);
        setImages(newArr);
    }

    const onSaveProduct = () => {
        console.log(sizes)
        if (productObj.name && categoryId && subcategoryId) {
            dispatch(redactorState === 'add' ?
                addProduct({...productObj, sizes, images, categoryId, subcategoryId}) :
                updateProduct({id, product: {...productObj, sizes, images, categoryId, subcategoryId}}))
            onResetInputs();
        } else {
            window.alert('Всі поля з "*" повинні бути заповнені!')
        }
    }

    const onResetInputs = () => {
        setId('');
        setImages([imageDefault])
        setProductObj(productDefault)
        setSizes(sizesDefault)
        setCategoryDropdownBarValue(null);
        setSubcategoryDropdownBarValue(null);
    }

    return (
        <div className='prodcut-redactor-container'>
            <Form>
                <div className='prodcut-redactor-flex'>
                    <div className='prodcut-redactor-flex-left'>
                        <Form.Group>
                            <Form.Label>*Назва продукту:</Form.Label>
                            <Form.Control
                                name='name'
                                type="text"
                                placeholder="Введіть назву продукту"
                                value={productObj.name || ''}
                                onChange={onInputChange}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>*Ціна:</Form.Label>
                            <Form.Control
                                name='price'
                                type="text"
                                placeholder="Введіть ціну продукту"
                                value={productObj.price || 0}
                                onChange={onInputChange}/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>*Категорія:</Form.Label>
                            <br/>
                            <DropdownBar
                                items={categories}
                                selectedValue={categoryDropdownBarValue}
                                setSelectedValue={onSelectCategoryDropdownBarItem}
                            />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>*Підкатегорія:</Form.Label>
                            <br/>
                            <DropdownBar
                                items={subcategories.filter(item => item.category.id === categoryId)}
                                selectedValue={subcategoryDropdownBarValue}
                                setSelectedValue={onSelectSubcategoryDropdownBarItem}
                            />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Опис продукту:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="8"
                                name='description'
                                type="textarea"
                                placeholder="Введіть опис продукту"
                                value={productObj.description || ''}
                                onChange={onInputChange}
                            />

                        </Form.Group>
                    </div>
                    <div className='prodcut-redactor-flex-right'>
                        <Form.Group>
                            <Form.Label>Посилання на зоображення:</Form.Label>
                            {images.map((img, idx) => {
                                return (
                                    <Form.Control
                                        key={idx + img.link}
                                        name={`image-${idx}`}
                                        type="textarea"
                                        placeholder="Введіть посилання на зоображення"
                                        value={img.link || ''}
                                        onChange={e => onImageInputChange(idx, e)}/>
                                )
                            })}
                            <div className="addImageInput-btn">
                                <Button variant="outline-dark"
                                    onClick={onAddImageInput}>Додати зображення</Button>
                            </div>


                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Розміри:</Form.Label>
                            <Sizes sizes={sizes}
                                   setSizes={setSizes}

                            />
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


