import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import List from '../../components/List';
import CategoryRedactor from '../../components/Redactors/Category';
import {
    deleteCategory,
    setCategory
} from "../../redux/category/category.actions";
import { Button } from 'react-bootstrap';

import './style.scss'

const CategoriesPage = () => {
    const dispatch = useDispatch();
    const { categories, isLoading } = useSelector(({ Categories }) => ({
        categories: Categories.list,
        isLoading: Categories.loading
    }))

    const [redactorState, setRedactorState] = useState('');
    const [showRedactor, setShowRedactor] = useState(false);

    const onAddCategory = () => {
        setRedactorState('add')
        setShowRedactor(true);
        dispatch(setCategory(null))
    }

    const onEditCategory = (category) => {
        setRedactorState('edit')
        setShowRedactor(true);
        dispatch(setCategory(category))
    }

    const onDeleteCategory = ({id, name}) => {
        window.confirm(`Видалити ${name}?`) && dispatch(deleteCategory(id))
    }

    return (
        <div className='page-container'>
            <div className='page-list'>
                <Button className='list-add-button'
                    variant="primary"
                    onClick={onAddCategory}> Додати +</Button>
                <List
                    items={categories}
                    isLoading={isLoading}
                    onEditItem={onEditCategory}
                    onDeleteItem={onDeleteCategory}
                />
            </div>
            <div className='page-item'>
                {showRedactor ? <CategoryRedactor
                    redactorState={redactorState}
                /> :
                    <div className='page-item-message'>Редагуйте елемет зі списку або добавте новий</div>}

            </div>
        </div>
    )
}

export default CategoriesPage;
