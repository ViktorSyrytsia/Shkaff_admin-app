import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Form, Button} from 'react-bootstrap';

import DropdownBar from '../../DropdownBar'
import {addSubcategory, updateSubcategory} from "../../../redux/subcategory/subcategory.actions";
import './style.scss';

const SubcategoryRedactor = ({redactorState}) => {
    const dispatch = useDispatch()
    const {subcategory, categories} = useSelector(({Subcategories, Categories}) => ({
            subcategory: Subcategories.subcategory,
            categories: Categories.list,
        }));

    const [id, setId] = useState('')
    const [name, setName] = useState('');
    const [categoryId, setCategoryId] = useState('')
    const [dropdownBarValue, setDropdownBarValue] = useState(null)

    const onSelectDropdownBarItem = (key, e) => {
        setCategoryId(e.target.dataset.id)
        setDropdownBarValue(e.target.innerText)
    }

    useEffect(() => {
        if (subcategory) {
            setId(subcategory.id);
            setName(subcategory.name);
            setCategoryId(subcategory.category.id);
            setDropdownBarValue(subcategory.category.name);
        } else {
            onResetInputs()
        }
    }, [subcategory]);

    const onInputChange = (e) => {
       setName(e.target.value);
    }

    const onSaveCategory = () => {
        console.log(name, categoryId)
        if (name && categoryId ) {
            dispatch(redactorState === 'add' ?
                addSubcategory({name, categoryId}) :
                updateSubcategory({id, name, categoryId}))
            onResetInputs();
        } else {
            window.alert('Всі поля повинні бути заповнені!')
        }
    }

    const onResetInputs = () => {
        setName('');
        setCategoryId('')
        setDropdownBarValue(null)
    }

    return (
        <div className='subcategory-redactor-container'>
            <Form>
                <Form.Group controlId="subcategoryForm.nameInput">
                    <Form.Label>Назва субкатегорії:</Form.Label>
                    <Form.Control
                        name='name'
                        type="text"
                        placeholder="Введіть назву продукту"
                        value={name || ''}
                        onChange={onInputChange}/>
                </Form.Group>
                <Form.Group controlId="subcategoryForm.categorySelect">
                    <DropdownBar
                        items={categories}
                        selectedValue={dropdownBarValue}
                        setSelectedValue={onSelectDropdownBarItem}
                    />
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

export default SubcategoryRedactor;
