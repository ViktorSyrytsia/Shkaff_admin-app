import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import List from '../../components/List';
import CategoryRedactor from '../../components/Redactors/CategoryRedactor';
import {
    getCategories,
    addCategory,
    updateCategory,
    deleteCategory,
    selectCategory
} from "../../redux/category/category.actions";
import { Button } from 'react-bootstrap';

import './style.scss'

const CategoriesPage = () => {
    const { categories, isLoading } = useSelector(({ Categories }) => ({
        categories: Categories.list,
        isLoading: Categories.loading
    }))
    const dispatch = useDispatch();

    const [saveOptions, setSaveOptions] = useState('');

    const onSelectCategory = (id) => {
        console.log(id);
        if (id === '') {
            dispatch(selectCategory(id));
            setShowRedactor(true);
            setSaveOptions('add');
        } else {
            dispatch(selectCategory(id));
            setShowRedactor(true);
            setSaveOptions('edit')
        }



    }

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])



    const onAddCategory = (category) => {
        dispatch(addCategory(category))
    }

    const onEditCategory = (category) => {
        dispatch(updateCategory(category))
    }

    const onDeleteCategory = (id) => {
        dispatch(deleteCategory(id))
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
                    onDeleteCategory={onDeleteCategory}
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
