import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import List from '../../components/List';
import CategoryRedactor from '../../components/Redactors/Category';
import {
    getCategories,
    addCategory,
    updateCategory,
    deleteCategory,
    selectCategory
} from "../../redux/category/category.actions";
import { Button } from 'react-bootstrap';

import './style.scss'
import {setSubcategory} from "../../redux/subcategory/subcategory.actions";

const CategoriesPage = () => {
    const { categories, isLoading } = useSelector(({ Categories }) => ({
        categories: Categories.list,
        isLoading: Categories.loading
    }))
    const dispatch = useDispatch();

    const [saveOptions, setSaveOptions] = useState('');

    const onSelectCategory = (id) => {
        dispatch(setSubcategory(id));
        setShowRedactor(true);
        id === '' ? setSaveOptions('add') : setSaveOptions('edit')
    }

    const onAddCategory = (category) => dispatch(addCategory(category));
    const onEditCategory = (category) => dispatch(updateCategory(category));

    const onDeleteCategory = (id, name) => {
        if (window.confirm(`Видалити ${name}?`)) {
            dispatch(deleteCategory(id))
        }
    }
    const [showRedactor, setShowRedactor] = useState(false);

    return (
        <div className='page-container'>
            <div className='page-list'>
                <Button className='list-add-button'
                    variant="primary"
                    onClick={() => onSelectCategory('')}> Додати +</Button>
                <List
                    items={categories}
                    isLoading={isLoading}
                    onSelectItem={onSelectCategory}
                    onDeleteItem={onDeleteCategory}
                />
            </div>
            <div className='page-item'>
                {showRedactor ? <CategoryRedactor
                    onAddCategory={onAddCategory}
                    onEditCategory={onEditCategory}
                    saveOptions={saveOptions}
                /> :
                    <div className='page-item-message'>Редагуйте елемет зі списку, або добавте новий</div>}

            </div>
        </div>
    )
}

export default CategoriesPage
