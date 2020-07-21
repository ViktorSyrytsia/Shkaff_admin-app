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

    const onSelectCategory = (id) => {
        dispatch(selectCategory(id));
        setShowRedactor(true);
    }

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const category = {
        id: "5f16176d292d054aa84d4392",
        name: "Home interior",
        image: "www.home-interior.com"
    }

    const onAddCategory = () => {
        dispatch(addCategory(category))
    }

    const onEditCategory = () => {
        dispatch(updateCategory(category))
    }

    const onDeleteCategory = () => {
        dispatch(deleteCategory(category.id))
    }
    const [showRedactor, setShowRedactor] = useState(false);

    return (
        <div className='page-container'>
            <div className='page-list'>
                <Button className='list-add-button'
                    variant="primary"
                    onClick={() => onAddCategory()}>Додати +</Button>
                <List
                    items={categories}
                    isLoading={isLoading}
                    onSelectItem={onSelectCategory}
                />
            </div>
            <div className='page-item'>
                {showRedactor ? <CategoryRedactor /> :
                    <div className='page-item-message'>Редагуйте елемет зі списку, або добавте новий</div>}

            </div>
        </div>
    )
}

export default CategoriesPage
